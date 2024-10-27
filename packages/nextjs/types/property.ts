export interface Property {
  id: number;
  title: string;
  type: "Real Estate" | "Car";
  price: number;
  owner: string;
  tokenId: string;
  blockchainExplorerUrl: string;
  description: string;
  images: string[];
}
