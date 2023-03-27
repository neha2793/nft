const friends = [
    "0xb24512aB24101D2BaAA548a07143B5e76C1D9bC6",
    "0xD57aFB71CcE0F9C8011a3751571bbCB3501C66F3",
    "0x852B45386b98DFCc817D2636F1F4ed6E32fBf356"
];
const existingContractAddr = "0x223510559A648E84689E42f68dA4D69833E74D5a";

async function main() {
  const nft = await hre.ethers.getContractAt("NFTMarketplace", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmcnG9VcMuumREednndN28LjzvPjHPDwh2s7nYW9ynckPk";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });