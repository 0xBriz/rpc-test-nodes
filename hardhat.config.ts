import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ARBITRUM_RPC || "",
        blockNumber: 88537092, // (May-08-2023 09:59:25 AM +UTC)
      },
      loggingEnabled: true,
      chainId: 42161,
      accounts: [
        {
          privateKey: process.env.DEV_KEY,
          balance: "10000000000000000000000",
        },
      ],
    },
  },
};

export default config;
