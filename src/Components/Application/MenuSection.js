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
    width: 58.15vw;
    outline: solid 3px #1e1e1e;
    margin:1.5px;
    background-image: url(${timeline});
    background-size: cover;
    background-position: center;
`

const InfoContainer = styled.div`
    height: 54vh;
    width:20vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const NewLine = styled.div`
    height:0;
    width:100vw;
`

const CenterContinaer = styled.div`
    height: 54vh;
    width: 38vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display:flex;
    flex-direction: column;
`

const ApplyContinaer = styled.div`
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
    font-size: 6vmin;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
`

const HeaderText = styled.h1`
    font-size: 4vmin;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
`

const BodyText = styled.p`
  display: inline-block;
  font-size: 3.2vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
`;

const SmallSpacer = styled.div`
    height:1vh;
    width:100%;
`

const ImageContainer = styled.div`
    width:100%;
    height: 30vh;
    background-image: url(${coffee});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
            </TimelineContainer>
            <NewLine/>
            <InfoContainer>
                <TextContainer>
                    <HeaderText>FAQ's:</HeaderText>
                    <SmallSpacer/>
                    <BodyText>
                        Q: Who let the dogs out? <br/> A: Did you know this song was about cat calling? <br/>
                        Q: How much wood could a woodchuck chuck if a wood chuck could chuck wood? <br/> A: No, but check in later, and it is 1:33 AM as I write this <br/>
                    </BodyText>
                </TextContainer>
            </InfoContainer>
            <CenterContinaer>
                <ApplyContinaer>
                    <TextContainer>
                        <TitleText style={{width:"30vw", textAlign: "center"}}>APPLY NOW</TitleText>
                    </TextContainer>
                </ApplyContinaer>
                <MoreContainer>
                    <TextContainer>
                        <HeaderText>Maxize Your Recruiting Experience</HeaderText>
                        <SmallSpacer/>
                        <BodyText>This is filler text. Imagine a whole paragraph with well written stuff in here. This is filler text. Imagine a whole paragraph with well written stuff in here.</BodyText>
                    </TextContainer>
                </MoreContainer>
            </CenterContinaer>
            <InfoContainer>
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