// components/property/PropertyModal.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Property } from "~~/types/property";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

export default function PropertyModal({ property }: { property: Property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { address: connectedAddress } = useAccount();

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % property.images.length);
  }, [property.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + property.images.length) % property.images.length);
  }, [property.images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <DialogContent className="sm:max-w-[700px]">
      <DialogHeader>
        <DialogTitle>{property.title}</DialogTitle>
      </DialogHeader>
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
