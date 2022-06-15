import styled from "styled-components";
import timeline from "../../Images/Application/timeline.png"
import coffee from "../../Images/Application/coffee.png"

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #F1D7BC;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: start;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;

  @media (max-aspect-ratio: 1000/750){
    display: none;
  }
`;

const GridContainer = styled.div`
    margin: 15vh 15vw 15vh 15vw;
    height: 81vh;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`

const LogoContainer = styled.div`
    outline: solid 3px #1e1e1e;
    height: 27vh;
    width: 20vw;
    margin:1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TimelineContainer = styled.div`
    height: 27vh;
    width: 57vw;
    outline: solid 3px #1e1e1e;
    margin:1.5px;
    padding-right:3px;
    background-image: url(${timeline});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`

const InfoContainer = styled.div`
    height: 54vh;
    width:20vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
`

const NewLine = styled.div`
    height:0;
    width:100vw;
`

const CenterContainer = styled.div`
    height: 54vh;
    width: 37vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display:flex;
    flex-direction: column;
`

const ApplyContainer = styled.div`
    height:27vh;
    outline: solid 3px #1e1e1e;
    margin-bottom: .75px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MoreContainer = styled.div`
    height:27vh;
    outline: solid 3px #1e1e1e;
    margin-top: .75px;
`

const TextContainer = styled.div`
    display: inline-block;
    margin: 20px;
`

const TitleText = styled.h1`
    font-size: 2.5vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const HeaderText = styled.h1`
    font-size: 1.7vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const BodyText = styled.p`
  display: inline-block;
  font-size: calc(.9vmax + .9vmin);
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  word-wrap: break-word;
`;

const SmallSpacer = styled.div`
    height:1vh;
    width:100%;
`

const ImageContainer = styled.div`
    width:100%;
    height: 30vh;
    background-image: url(${coffee});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const SoonContainer = styled.div`
    background-color: rgba(255, 176, 97,.9);
    width: 50%;
    height: 50%;
    transform: rotate(10deg) ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25%;
    left: 25%;
`

function MenuSection() {
    return (
      <SectionContainer>
        <GridContainer>
            <LogoContainer>
                <TextContainer>
                    <TitleText style={{width:"16vw"}}>Our Application Tracker</TitleText>
                </TextContainer>
            </LogoContainer>
            <TimelineContainer>
                <SoonContainer>
                    <TitleText style={{color: "white"}}>Coming Soon</TitleText>
                </SoonContainer>
            </TimelineContainer>
            <NewLine/>
            <InfoContainer>
                <TextContainer>
                    <HeaderText>FAQ's:</HeaderText>
                    <SmallSpacer/>
                    <BodyText>
                        Q: I'm not in Ross, can I still apply? <br/> A: Yes, we accept all majors! <br/>
                        Q: Any advice to help me get in? <br/> A: There's a lot &#40;scroll down!&#41;, but being yourself and putting your best foot forward is the most important advice we have. <br/>
                    </BodyText>
                </TextContainer>
            </InfoContainer>
            <CenterContainer>
                <ApplyContainer>
                    <TextContainer>
                        <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeHCJl6mIQEAhO2DPE_1x8zasWhHH_C8zrzZ_AK3pMhmnZ0BQ/viewform" target="_blank" style={{textDecoration: "none"}}>
                            <TitleText style={{width:"30vw", textAlign: "center", textDecoration: "underline"}}>APPLY NOW</TitleText>
                        </a>
                    </TextContainer>
                </ApplyContainer>
                <MoreContainer>
                    <TextContainer>
                        <HeaderText>Maximize Your Recruiting Experience</HeaderText>
                        <SmallSpacer/>
                        <BodyText>Ross club recruiting can be an intimidating experience, but we're here to help you get through it and to help you get the most out of it! Below we have advice and our recruiting philosophy that'll help</BodyText>
                    </TextContainer>
                </MoreContainer>
            </CenterContainer>
            <InfoContainer>
                <SoonContainer style={{height:"25%", width:"100%", left: "0%", top:"35%"}}>
                    <TitleText style={{color: "white"}}>Coming Soon</TitleText>
                </SoonContainer>
                <TextContainer>
                    <TitleText style={{textAlign: "center"}}>Next Event</TitleText>
                    <ImageContainer/>
                    <HeaderText style={{textAlign: "center"}}>Coffee Chats #1</HeaderText>
                    <HeaderText style={{textAlign: "center"}}>Date and Location</HeaderText>
                </TextContainer>
            </InfoContainer>
            <NewLine/>
        </GridContainer>  
      </SectionContainer>
    );
  }
  
  export default MenuSection;