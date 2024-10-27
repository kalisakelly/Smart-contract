// components/property/PropertyCard.tsx
"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Wallet, ExternalLink } from "lucide-react";
import { Property } from "~~/types/property";

export default function PropertyCard({ property, onClick }: { property: Property; onClick: () => void }) {
  return (
    <Card className="overflow-hidden cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative">
          <Image src={property.images[0]} alt={property.title} width={600} height={400} className="w-full h-48 object-cover" />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Token ID: {property.tokenId}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <div className="w-full flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{property.title}</h3>
          <Button size="icon" className="rounded-full">
            <Wallet className="h-4 w-4" />
          </Button>
        </div>
        <p className="font-bold text-xl mt-1">{property.price} ETH</p>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
          <a href={property.blockchainExplorerUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center" onClick={e => e.stopPropagation()}>
            View on Chain
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
