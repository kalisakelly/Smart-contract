// packages\nextjs\app\page.tsx
"use client";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import HeroSection from "~~/components/property/hero";
import PropertyGrid from "~~/components/property/PropertyGrid";
import Footer1 from "~~/components/property/Footer1";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
     <HeroSection />
     <PropertyGrid />
     <Footer1 />
    </>
  );
};

export default Home;
