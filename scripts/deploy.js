const { ethers } = require("hardhat");
async function main() {
  // Get signers
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // Deploy ZavaAIToken
  const ZavaAIToken = await ethers.getContractFactory("ZavaAIToken");
  const zavaAIToken = await ZavaAIToken.deploy(
    ethers.parseUnits("1000000000", 18)
  ); // Example: 1 Billion tokens
  await zavaAIToken.waitForDeployment();
  console.log("ZavaAIToken deployed to:", zavaAIToken.target);
  // Deploy ZavaAIAgentCore (example with token address dependency)
  const ZavaAIAgentCore = await ethers.getContractFactory("ZavaAIAgentCore");
  const zavaAIAgentCore = await ZavaAIAgentCore.deploy(zavaAIToken.target);
  await zavaAIAgentCore.waitForDeployment();
  console.log("ZavaAIAgentCore deployed to:", zavaAIAgentCore.target);
  // Save contract addresses to a file (optional but recommended)
  const fs = require("fs");
  const contractsDir = __dirname + "/../contracts/deployments";
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  fs.writeFileSync(
    contractsDir + "/contract-addresses.json",
    JSON.stringify(
      {
        ZavaAIToken: zavaAIToken.target,
        ZavaAIAgentCore: zavaAIAgentCore.target,
      },
      undefined,
      2
    )
  );
  console.log("Deployment complete!");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
