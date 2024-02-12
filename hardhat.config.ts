import { HardhatUserConfig } from "hardhat/config";
import { envconfig } from "./utils/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    arbitrum : {
      url: envconfig.arbitrum.provider_url,
      accounts: [envconfig.arbitrum.private_key],
    },  
    arbitrumGoerli: {
      url: envconfig.arbitrumGoerli.provider_url,
      accounts: [envconfig.arbitrumGoerli.private_key],
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
      arbitrumGoerli: `privatekey://${envconfig.arbitrumGoerli.private_key}`,
      arbitrum: `privatekey://${envconfig.arbitrum.private_key}`,
    },
  }
};

export default config;
