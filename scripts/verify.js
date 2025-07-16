const { run } = require("hardhat");
async function verifyContract(contractAddress, constructorArgs) {
  console.log(`Verifying contract ${contractAddress}...`);
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: constructorArgs,
    });
    console.log("Contract verified successfully!");
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified!");
    } else {
      console.error(e);
    }
  }
}
async function main() {
  // Load addresses from your deployment file
  const contractAddresses = require("../contracts/deployments/contract-addresses.json");
  // Verify ZavaAIToken (no constructor args for a basic ERC20)
  await verifyContract(contractAddresses.ZavaAIToken, []);
  // Verify ZavaAIAgentCore (requires ZavaAIToken address as constructor arg)
  await verifyContract(contractAddresses.ZavaAIAgentCore, [
    contractAddresses.ZavaAIToken,
  ]);
  console.log("All contracts verification attempts completed.");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
