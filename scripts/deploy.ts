import { ethers } from "hardhat";

async function main() {
  const ownerAddress = "0x19a14D73e298Fc0E7b9b039Fda0d85eDbb1b460A";
  const vrfCoordinatorAddress = "0x8103b0a8a00be2ddc778e6e7eaa21791cd364625";
  const linkTokenAddress = "0x779877a7b0d9e8603169ddbd7836e478b4624789";
  const keyHash =
    "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c";
  const fee = "3";
  const tokenAddress = "0x779877a7b0d9e8603169ddbd7836e478b4624789";

  // const Airdrop = await ethers.getContractFactory("Airdrop");
  const airdrop = await ethers.deployContract("Airdrop", [
    vrfCoordinatorAddress,
    linkTokenAddress,
    keyHash,
    fee,
    tokenAddress,
    ownerAddress,
  ]);

  await airdrop.waitForDeployment();

  console.log(`Airdrop contract deployed to address: ${airdrop.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
