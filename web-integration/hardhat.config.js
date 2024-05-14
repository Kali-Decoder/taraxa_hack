require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY, TARAXA_KEY } = process.env;
module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
    taraxa_testnet: {
      url: "https://rpc.testnet.taraxa.io/",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      taraxa_testnet : TARAXA_KEY
    },
    customChains: [
      {
        network: "taraxa_testnet",
        chainId: 842,
        urls: {
          apiURL: "https://taraxa-testnet.explorer.caldera.xyz/api",
          browserURL: "https://taraxa-testnet.explorer.caldera.xyz",
        },
      },
    ],
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
