import { config as dotenvConfig } from "dotenv";
dotenvConfig();

interface IConfig {
  arbitrum: {
    provider_url: string;
    private_key: string;
    multisig_address: string;
  };
  arbitrumGoerli: {
    provider_url: string;
    private_key: string;
    multisig_address: string;
  };
  testing: {
    fork: string;
  };
}

export const getEnv = (key: string, defaultValue?: any) => {
  const value = process.env[key];
  if (!value) {
    if (defaultValue === undefined || defaultValue === null) {
      throw new Error(`Required env var ${key} not set`);
    } else {
      return defaultValue;
    }
  }
  if (value.toLocaleLowerCase() === "false") {
    return false;
  }
  if (value.toLocaleLowerCase() === "true") {
    return true;
  }
  return value;
};

export const envconfig = {
  arbitrumGoerli: {
    provider_url: getEnv(
      "ARBGOERLI_PROVIDER_URL",
      process.env.ARBGOERLI_PROVIDER_URL
    ),
    private_key: getEnv("ARBGOERLI_PRIVATE_KEY", process.env.ARBGOERLI_PRIVATE_KEY),
  },
  arbitrum: {
    provider_url: getEnv(
      "ARBITRUM_PROVIDER_URL",
      process.env.ARBITRUM_PROVIDER_URL
    ),
    private_key: getEnv("ARBITRUM_PRIVATE_KEY", process.env.ARBITRUM_PRIVATE_KEY),
  },
  testing: {
    fork: getEnv("FORK", ""),
  },
};
