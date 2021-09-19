import styled from "styled-components"

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1C1C28;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 684px;
    background: #28293D;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 0px 70px;
    border-radius: 72px;

    @media ${device.tablet} { 
        max-width: 70%;
        padding: 0px 30px;
        border-radius: 40px;
      }
`

const Titles = styled.h2`
    font-family: "Sora";
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    margin: 0;
    text-align: center;

    @media ${device.tablet} { 
        font-size: 20px;
      }
`

const DetailsText = styled.p`
    font-family: "Sora";
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    margin: 0;
    padding: 5px 0;

    @media ${device.tablet} { 
      font-size: 9px;
    }
`

const BioText = styled.p`
    font-family: "Sora";
    font-weight: 300;
    font-size: 14px;
    color: #6D6D72;
    text-align: center;
    padding-bottom: 20px;

    @media ${device.tablet} { 
        font-size: 10px;
      }
`
const Input = styled.input.attrs({type: 'text'})`
    width: 90%;
    height: 5%;
    background: #1C1C28;
    padding: 2em;
    font-size: 14px;
    font-family: "Sora";
    font-weight: 300;
    color: #FFFFFF;
    border-radius: 18px;
    border: none;
    margin-bottom: 3em;
    margin-top: -1em;

    ::placeholder {
        color: #46465C;
      }

    &:focus {
        outline: none;
        border-style: solid;
        border-color: #FFFFFF;
        border-width: 2px;
        border-radius: 18px;
    }

    @media ${device.tablet} { 
    font-size: 10px;
    }
`
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 130px;
    width: 684px;
    background: none;
    border: dashed #28293D 3px;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 40px 0px 40px;
    padding: 0px 70px;
    border-radius: 38px;

    @media ${device.tablet} { 
        max-width: 70%;
        padding: 0px 30px;
        border-radius: 20px;
      }
`

const WaveButton = styled.button`
    font-family: "Sora";
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    background: "#FFFFFF";
    width: 70%;
    height: 12%;
    border-radius: 20px;
    margin-bottom: 10px;
    border: none;
    padding: 0 1em;

    @media ${device.tablet} { 
        width: 100%;
        height: 9%;
        font-size: 12px;
        border-radius: 14px;
      }
`

const ConnectWalletButton = styled.button`
    font-family: Sora;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    background: #FFCC01;
    width: 70%;
    height: 12%;
    border-radius: 20px;
    border: none;

    @media ${device.tablet} { 
        width: 100%;
        height: 9%;
        font-size: 12px;
        border-radius: 14px;
      }
`

export { AppWrapper, Container, Titles, DetailsText, Input, BioText, DetailsContainer, WaveButton, ConnectWalletButton }