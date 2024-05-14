import { polygon, polygonMumbai, arbitrum, bsc, mainnet,taraxaTestnet } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
const { chains, publicClient } = configureChains(
  [polygonMumbai,taraxaTestnet],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        
        if (chainId.id == 80001) {
          return {
            http: "https://rpc-mumbai.maticvigil.com",
            webSocket:
              "wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
          };
        }
        else if (chainId.id == 842) {
          return {
            http: "https://rpc.testnet.taraxa.io/",
          };
        }
       
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Feedback Incentivized",
  projectId: "87106bd465234d097b8a51ba585bf799",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };
