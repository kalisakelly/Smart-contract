import { Property } from "~~/types/property";

export const allProperties: Property[] = [
    // Real Estate Properties
    {
        id: 1,
        title: "Cozy Cottage",
        type: "Real Estate",
        price: 20,
        owner: "0x1234...5678",
        tokenId: "1",
        blockchainExplorerUrl: "https://etherscan.io/token/0x123...789?a=1",
        description: "A charming cottage nestled in the peaceful countryside, perfect for a relaxing getaway.",
        images: ["/1.jpg", "/images/realestate2.jpg", "/2.jpg"],
    },
    {
        id: 2,
        title: "Luxury Beach House",
        type: "Real Estate",
        price: 45,
        owner: "0xabcd...efgh",
        tokenId: "2",
        blockchainExplorerUrl: "https://etherscan.io/token/0x456...012?a=2",
        description: "A luxurious beach house with stunning ocean views and modern amenities.",
        images: ["/3.jpg", "/4.jpg", "5.jpg"],
    },

    // Suburban Family Home
    {
        id: 3,
        title: "Suburban Family Home",
        type: "Real Estate",
        price: 35,
        owner: "0x1234...abcd",
        tokenId: "5",
        blockchainExplorerUrl: "https://etherscan.io/token/0xdef...789?a=5",
        description: "Spacious suburban home with a large backyard, ideal for families.",
        images: ["/images/suburban1.jpg", "/images/suburban2.jpg", "/images/suburban3.jpg"],
    },

    // Car Properties
    {
        id: 4,
        title: "Tesla Model S",
        type: "Car",
        price: 15,
        owner: "0x2345...6789",
        tokenId: "6",
        blockchainExplorerUrl: "https://etherscan.io/token/0x123...456?a=6",
        description: "A sleek electric sedan with autopilot and a long-range battery, perfect for city driving.",
        images: ["/images/tesla1.jpg", "/images/tesla2.jpg", "/images/tesla3.jpg"],
    },
    {
        id: 5,
        title: "Ford Mustang",
        type: "Car",
        price: 12,
        owner: "0x5678...2345",
        tokenId: "7",
        blockchainExplorerUrl: "https://etherscan.io/token/0x789...456?a=7",
        description: "Iconic American muscle car with powerful performance and a stylish design.",
        images: ["/images/mustang1.jpg", "/images/mustang2.jpg", "/images/mustang3.jpg"],
    },
];
