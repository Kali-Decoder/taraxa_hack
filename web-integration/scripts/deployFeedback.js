const loayalityTokenRewardAddress ="0x570fd1FED3dF41d79E5da1c0124F308516b101A0";
const feedbackPlatformAddress = "0xaE068D19Dc79aD9052e8dC4b12ADc4831338d820";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract(
    "FeedbackPlatform",
    [loayalityTokenRewardAddress]
  );
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.target;
  console.log("FeedbackPlatform Contract Address:", address);
  await sleep(30 * 1000);
  console.log("Verifying FeedbackPlatform on Given Network ...");
  //   Verify the Liquidity Locking Contract
  await hre.run("verify:verify", {
    contract: "contracts/Feedback.sol:FeedbackPlatform",
    address: address,
    constructorArguments: [loayalityTokenRewardAddress],
  });
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
