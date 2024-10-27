// components/property/PropertyGrid.tsx
"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import { allProperties } from "~~/data/properties";
import { Property } from "~~/types/property";

export default function PropertyGrid() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    loadMoreProperties();
  }, []);

  useEffect(() => {
    filterAndSortProperties();
  }, [properties, searchTerm, sortBy, priceRange]);

  const loadMoreProperties = () => {
    setLoading(true);
    setTimeout(() => {
      const newProperties = allProperties.slice(properties.length, properties.length + 3);
      setProperties((prevProperties) => [...prevProperties, ...newProperties]);
      setLoading(false);
    }, 1000);
  };

  const filterAndSortProperties = () => {
    const filtered = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1]
    );

    const sorted = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    setVisibleProperties(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blockchain Property Marketplace</h1>

      {/* Filter and Sort Controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4 text-muted-foreground" />}
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="title-asc">Title: A to Z</SelectItem>
              <SelectItem value="title-desc">Title: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="price-range" className="text-sm font-medium">
            Price Range: {priceRange[0]} ETH - {priceRange[1]} ETH
          </label>
          <Slider id="price-range" min={0} max={300} step={10} value={priceRange} onValueChange={setPriceRange} />
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map((property) => (
          <Dialog key={property.id}>
            <DialogTrigger asChild>
              <div>
                <PropertyCard property={property} onClick={() => setSelectedProperty(property)} />
              </div>
            </DialogTrigger>
            {selectedProperty && <PropertyModal property={selectedProperty} />}
          </Dialog>
        ))}
      </div>

      {/* No Results Found */}
      {visibleProperties.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No properties found matching your criteria.</p>
      )}

      {/* Load More Button */}
      {properties.length < allProperties.length && (
        <div className="mt-8 flex justify-center">
          <Button onClick={loadMoreProperties} disabled={loading} className="px-6 py-2">
            {loading ? "Loading..." : "Load More Properties"}
          </Button>
        </div>
      )}
    </div>
  );
}
