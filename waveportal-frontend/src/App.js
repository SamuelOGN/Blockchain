import * as React from "react";
import { AppWrapper, Container, Input, Titles, DetailsText, BioText, DetailsContainer, WaveButton, ConnectWalletButton } from "./components/headerContainer"
// import data from "./utils/test.json"
import { ethers } from "ethers";
import abi from "./utils/WavePortal.json"
import detectEthereumProvider from '@metamask/detect-provider'
 

function App() {

  // Saving ethereum accounts to state
  const [currAccount, setCurrAccount] = React.useState("")
  const [allWaves, setAllWaves] = React.useState([])
  const [textMessage, setTextMessage] = React.useState("")
  const contractAddress = "0xCAcA0b73059C9b23887C299F58C3eE050F79696F"
  const contractABI = abi.abi

  const checkIfWalletIsConnected = () => {

    // Checking if there is a window.ethereum object
    const { ethereum } = window

    if (!ethereum) {
      console.log("Download a wallet")
      return
    }
    else {
      console.log("There is a wallet, connect", ethereum)
    }

    // Checking if we are authorized to access any wallet
    ethereum.request({ method: 'eth_accounts' })
    .then(accounts => {
      console.log(accounts)
      if (accounts.length !== 0) {
        const account = accounts[0]
        console.log("Found an authorized account:", account)
        setCurrAccount(account)
        getAllWaves()
      }
      else {
        console.log("There is no authorized account")
      }
    })


  }

  const connectWallet = () => {
    // Checking if there is a window.ethereum object
    const { ethereum } = window

    if (!ethereum) {
      alert("Get a wallet")
    }

    ethereum.request({ method: "eth_requestAccounts"})
    .then(accounts => {
      console.log("Connected", accounts[0])
      setCurrAccount(accounts[0])
    })
    .catch(err => {
      console.log(err)
    })
  }

  const wave = async (text) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer)

    let count = await wavePortalContract.getTotalWaves()
    console.log("Retrieved amount of waves is", count.toNumber())

    const waveTxn = await wavePortalContract.wave(text, { gasLimit: 300000 })
    console.log("Mining..", waveTxn.hash)
    await waveTxn.wait()
    console.log("Mined-", waveTxn.hash)

    count = await wavePortalContract.getTotalWaves()
    console.log("Retrieved amount of waves is", count.toNumber())

  }

  
  async function getAllWaves() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer)

    let waves = await wavePortalContract.getAllWaves()

    let wavesCleaned = []
    waves.forEach(wave => {
      wavesCleaned.push({
        address: wave.waver,
        timestamp: new Date(wave.timestamp * 1000),
        message: wave.message
      })
    })

    setAllWaves(wavesCleaned)
  }

  const handleChange = (e) => {
    setTextMessage(e.target.value)
  }

  React.useEffect(() => {
    checkIfWalletIsConnected()
  }, []);

  React.useEffect(() => {
  const interval = setInterval(() => {
    getAllWaves()
  }, 30000)
  return () => clearInterval(interval)
  }, [])


  return (
    <AppWrapper>
      <Container>
        <Titles>👋 Welcome to my digital estate</Titles>
        <BioText>I’m Samuel Nwachukwu a blockchain tech enthusiaist and I am so happy you decided to stop by. Connect your Ethereum wallet and drop a message! Might drop some coins for a random visitor.</BioText>
        <Input placeholder="Say something..." onChange={handleChange}/>
        <WaveButton onClick={() => wave(textMessage)}>👋 Wave and send the message</WaveButton>
        {currAccount ? null : (<ConnectWalletButton onClick={connectWallet} > Connect wallet </ConnectWalletButton>) }
      </Container>
      <Titles>My cool visitors 🏡</Titles>
      {allWaves.map((wave, index) => {
        return (
          <DetailsContainer>
            <DetailsText>Address: {wave.address}</DetailsText>
            <DetailsText>Time: {wave.timestamp.toString()}</DetailsText>
            <DetailsText>Message: {wave.message}</DetailsText>
          </DetailsContainer>
        )
      })}
    </AppWrapper>
  );
}

export default App;
