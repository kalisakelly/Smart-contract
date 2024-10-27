// packages\nextjs\components\property\cards.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { ChevronLeft, ChevronRight, ExternalLink, Search, Wallet } from "lucide-react";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

interface Property {
  id: number;
  title: string;
  price: number;
  owner: string;
  tokenId: string;
  blockchainExplorerUrl: string;
  description: string;
  images: string[];
}

const allProperties: Property[] = [
  // Real Estate Properties
  {
    id: 1,
    title: "Cozy Cottage",
    price: 20,
    owner: "0x1234...5678",
    tokenId: "1",
    blockchainExplorerUrl: "https://etherscan.io/token/0x123...789?a=1",
    description: "A charming cottage nestled in the peaceful countryside, perfect for a relaxing getaway.",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 2,
    title: "Luxury Beach House",
    price: 45,
    owner: "0xabcd...efgh",
    tokenId: "2",
    blockchainExplorerUrl: "https://etherscan.io/token/0x456...012?a=2",
    description: "A luxurious beach house with stunning ocean views and modern amenities.",
    images: ["/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg"],
  },


  {
    id: 5,
    title: "Suburban Family Home",
    price: 35,
    owner: "0x1234...abcd",
    tokenId: "5",
    blockchainExplorerUrl: "https://etherscan.io/token/0xdef...789?a=5",
    description: "Spacious suburban home with a large backyard, ideal for families.",
    images: ["/17.jpg", "/18.jpg", "/19.jpg", "/20.jpg"],
  },

  // Car Properties
  {
    id: 6,
    title: "Tesla Model S",
    price: 15,
    owner: "0x2345...6789",
    tokenId: "6",
    blockchainExplorerUrl: "https://etherscan.io/token/0x123...456?a=6",
    description: "A sleek electric sedan with autopilot and a long-range battery, perfect for city driving.",
    images: ["/car1.jpg", "/car2.jpg", "/car3.jpg", "/car4.jpg"],
  },
  {
    id: 7,
    title: "Ford Mustang",
    price: 12,
    owner: "0x5678...2345",
    tokenId: "7",
    blockchainExplorerUrl: "https://etherscan.io/token/0x789...456?a=7",
    description: "Iconic American muscle car with powerful performance and a stylish design.",
    images: ["/car5.jpg", "/car6.jpg", "/car7.jpg", "/car8.jpg"],
  },


];

function PropertyCard({ property, onClick }: { property: Property; onClick: () => void }) {
  const { address: connectedAddress } = useAccount();

  return (
    <Card className="overflow-hidden cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Token ID: {property.tokenId}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <div className="w-full flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{property.title}</h3>
          </div>
          <Button size="icon" className="rounded-full">
            <Wallet className="h-4 w-4" />
          </Button>
        </div>
        <p className="font-bold text-xl mt-1">{property.price} ETH</p>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
          <a
            href={property.blockchainExplorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center"
            onClick={e => e.stopPropagation()}
          >
            View on Chain
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

function PropertyModal({ property }: { property: Property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % property.images.length);
  }, [property.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + property.images.length) % property.images.length);
  }, [property.images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Auto-switch every 5 seconds
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <DialogContent className="sm:max-w-[700px]">
      <DialogHeader>
        <DialogTitle>{property.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <div className="relative">
          <Image
            src={property.images[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          {property.images.map((_, index) => (
            <Button
              key={index}
              variant={index === currentImageIndex ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentImageIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p>
          <strong>Price:</strong> {property.price} ETH
        </p>
        <p>
          <strong>Token ID:</strong> {property.tokenId}
        </p>
        <p>
          <strong>Owner:</strong> {property.owner}
        </p>
        <p>
          <strong>Description:</strong> {property.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between">
        <Button>Make Offer</Button>
        <a
          href={property.blockchainExplorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          View on Chain
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </DialogContent>
  );
}

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
    const filtered = properties.filter(
      property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1],
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
  }, [properties, searchTerm, sortBy, priceRange]);

  const loadMoreProperties = () => {
    setLoading(true);
    setTimeout(() => {
      const newProperties = allProperties.slice(properties.length, properties.length + 3);
      setProperties([...properties, ...newProperties]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blockchain Property Marketplace</h1>

      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map(property => (
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

      {visibleProperties.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No properties found matching your criteria.</p>
      )}

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
