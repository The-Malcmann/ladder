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
        "tWETH", "tWETH"        
    ],
  };

  const res: DeployResult = await deploy("tWETH", config);
};
export default func;
func.tags = ["tweth"];