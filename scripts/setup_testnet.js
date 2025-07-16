const { ethers } = require("hardhat");
async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();
  const contractAddresses = require("../contracts/deployments/contract-addresses.json");
  const zavaAIToken = await ethers.getContractAt(
    "ZavaAIToken",
    contractAddresses.ZavaAIToken
  );
  const zavaAIAgentCore = await ethers.getContractAt(
    "ZavaAIAgentCore",
    contractAddresses.ZavaAIAgentCore
  );
  console.log("Setting up testnet environment...");
  // Example: Mint some tokens to test accounts
  await zavaAIToken.mint(addr1.address, ethers.parseUnits("1000", 18));
  await zavaAIToken.mint(addr2.address, ethers.parseUnits("500", 18));
  console.log(`Minted 1000 $ZAVA to ${addr1.address} and 500 $ZAVA
to ${addr2.address}`);
  // Example: Register an agent for addr1
  await zavaAIAgentCore.connect(addr1).registerAgent();
  console.log(`Agent registered for ${addr1.address}`);
  // Example: Activate a module
  const agentIdAddr1 = await zavaAIAgentCore.getAgentId(addr1.address);
  await zavaAIAgentCore
    .connect(addr1)
    .activateModule(agentIdAddr1, "DeFiOptimizer");
  console.log(`'DeFiOptimizer' module activated for agent
${agentIdAddr1}`);
  console.log("Testnet setup complete!");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
