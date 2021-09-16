async function main() {
    const [deployer] = await hre.ethers.getSigners()

    console.log("Deploying contracts with the account:", deployer.address)

    console.log("Account balance:", (await deployer.getBalance()).toString())

    const Token = await hre.ethers.getContractFactory("WavePortal")
    const token = await Token.deploy()
    // const token = await Token.deploy({value: hre.ethers.utils.parseEther(0.0001)})

    console.log("WavePortal address:", token.address)
}


main()
  .then(() => process.exit(0))
  .catch((err) => {
      console.error(err)
      process.exit(1)
  })