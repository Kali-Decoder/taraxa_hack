require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY, POLYGON_API_KEY } = process.env;
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
    bsc: {
      url: "https://rpc.ankr.com/bsc",
      accounts: [PRIVATE_KEY],
    },
    ethereum: {
      url: "https://mainnet.infura.io/v3/",
      accounts: [PRIVATE_KEY],
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
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
