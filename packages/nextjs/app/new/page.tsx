// packages\nextjs\app\page.tsx
"use client";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import AddProperty from "~~/components/property/add-property";
import { Address } from "~~/components/scaffold-eth";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
     <AddProperty />
    </>
  );
};

export default Home;
