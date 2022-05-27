async function main() {
    const MyNFT = await ethers.getContractFactory("Momentibles")
    const Marketplace = await ethers.getContractFactory("Marketplace")

    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy()
    const marketplace = await Marketplace.deploy()
    console.log("NFT Contract deployed to address:", myNFT.address)
    console.log("Marketplace Contract deployed to address:", marketplace.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})
  