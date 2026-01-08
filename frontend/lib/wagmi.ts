import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";
import { hardhatLocal } from "./localchain";

export const config = getDefaultConfig({
  appName: "Food ReelView",
  projectId: "606169e666474569070e28a0135f528c",
  chains: [sepolia, hardhatLocal],
  ssr: true,
});
