import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    //   localhost: {
    //     url: process.env.HOST_URL,
    //     forking: {
    //       url: process.env.ARBITRUM_RPC || "",
    //       blockNumber: 88911760, // (May-09-2023 12:26:03 PM +UTC)
    //     },
    //     loggingEnabled: true,
    //     chainId: 42161,
    //     accounts: [process.env.DEV_KEY],
    //   },
    hardhat: {
      forking: {
        url: process.env.ARBITRUM_RPC || "",
        blockNumber: 88911760, // (May-09-2023 12:26:03 PM +UTC)
      },

      loggingEnabled: true,
      allowUnlimitedContractSize: true,
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
