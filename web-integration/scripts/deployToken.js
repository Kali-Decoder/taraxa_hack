async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract("PlatformToken");
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.target;
  console.log("Feedback Loyality Token Contract Address:", address);

  await sleep(30 * 1000);
  console.log("Verifying Ecommerce Contract on Given Network ...");

  await hre.run("verify:verify", {
    contract: "contracts/PlatformToken.sol:PlatformToken",
    address: address,
  });
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
