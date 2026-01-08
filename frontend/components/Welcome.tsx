"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Logo from "./Logo";

export default function Welcome() {
  const { isConnected } = useAccount();
  return (
    !isConnected && (
      <div className="absolute w-screen h-screen grid place-content-center bg-base-100 z-10 text-center">
        <div className="flex flex-col space-y-4 items-center">
          <span className="text-5xl">🍔</span>
          <Logo className="w-72" />
          
          {/* UPDATED COPY BELOW */}
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