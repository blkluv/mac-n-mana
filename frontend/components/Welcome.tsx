"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image"; // 1. Import the optimized component

export default function Welcome() {
  const { isConnected } = useAccount();
  return (
    !isConnected && (
      <div className="absolute w-screen h-screen grid place-content-center bg-base-100 z-10 text-center">
        <div className="flex flex-col space-y-4 items-center">
          <span className="text-5xl">🍔</span>
          
          {/* 2. Use <Image /> instead of <img> */}
          <Image 
            src="/foodreelview.svg" 
            alt="FoodReelView Logo" 
            width={288} // Matches w-72 (18rem * 16px = 288px)
            height={100} // Required by Next.js; h-auto below keeps it proportional
            className="w-72 h-auto" 
            priority // Fixes the LCP warning by loading this image immediately
          />
          
          <p className="font-bold mb-8">
            100% authentic food reviews verified on-chain.
            <br />
            Watch the TikTok UGC ReelViews on <a href="https://www.tiktok.com/@foodreelview" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@FoodReelView</a>.
          </p>
          
          <ConnectButton />
        </div>
      </div>
    )
  );
}