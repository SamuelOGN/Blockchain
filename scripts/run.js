async function main() {
    const [owner, randoPerson] = await hre.ethers.getSigners()
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()
    // const waveContract = await waveContractFactory.deploy({value: hre.ethers.utils.parseEther("0.0001")})
    await waveContract.deployed()

    console.log("Contract deployed to:", waveContract.address)
    console.log("Contract deployed by:", owner.address)
    console.log("Random Address:", randoPerson.address)

   // let contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
   // console.log("Contract Balance:", hre.ethers.util.formatEther(contractBalance))

    let waveTxn = await waveContract.wave("My first message!")
    await waveTxn.wait() // wait for it to be mined

   // contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
   // console.log("Contract Balance:", hre.ethers.util.formatEther(contractBalance))

    let allWaves = await waveContract.getAllWaves()
    console.log(allWaves)
}


main()
.then(() => process.exit(0))
.catch((err) => {
    console.error(err)
    process.exit(1)
})