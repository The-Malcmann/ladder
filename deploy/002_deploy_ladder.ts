import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, DeployResult } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const chainId = await hre.getChainId();
  console.log(chainId);
  const { deployer} = await getNamedAccounts();
  console.log("deployer: ", deployer);
  const config = {
    log: true,
    from: deployer,
    args: [
        "0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30",
        "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        30000000,
        25000,
        "0xfaE14106232e610FA7607a27bDf6d3Fe1D32CdD5",
        "0x5140780e32d84a3ddF2feBE31fFA0741c1a515E1"
    ],
  };

  const res: DeployResult = await deploy("LADDER", config);
};
export default func;
func.tags = ["ladder"];