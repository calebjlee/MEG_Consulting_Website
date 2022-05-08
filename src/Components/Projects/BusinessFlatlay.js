import styled from "styled-components";
import background from "../../Images/Projects/Business/background.jpg";
import projectText from "../../Images/Projects/project_text.png";
import bcase from "../../Images/Projects/Business/case.png";
import laptop from "../../Images/Projects/Business/laptop.png";
import clip from "../../Images/Projects/Business/clip.png";
import cup from "../../Images/Projects/Business/cup.png";
import map from "../../Images/Projects/Business/map.png";
import notebook from "../../Images/Projects/Business/notebook.png";
import phone from "../../Images/Projects/Business/phone.png";
import plant from "../../Images/Projects/Business/plant.png";
import React, { useState } from "react";
import NextSection from "../General/NextSection";


const ProjectContainer = styled.div`
  height: 150vh;
  width: 100vw;
  background-color: #c5c1c2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${projectText});
  background-size: 60vh;
  background-position: right 8px bottom 10px;
  position: sticky;
  top: 0px;
  max-width: 100%;
  @media (max-aspect-ratio: 1233/870) {
    display:none;
  }
`;

const FlatlayContainer = styled.div`
  position: relative;
  margin-bottom: 50vh;
  overflow: hidden;
`;

const FlatlayImage = styled.img`
  height: 80vh;
`;

const ObjectContainer = styled.div`
  position: absolute;
  bottom: attr(data-bottom px);
  left: attr(data-left px);
  transition: left 1s, bottom 1s;
  z-index: 1;
`;

const ObjectImage = styled.img`
  & {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const TextContainer = styled.div`
 display:inline-block;
`

const TitleText = styled.h1`
  display: inline-block;
  font-size: 6vmin;
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

const InfoContainer = styled.div`
    display:flex;
    position: absolute;
    width:70vh;
    height:72vh;
    left:58vh;
    bottom:5vh;
    flex-wrap: wrap;
    transition: opacity 1s linear 1s;
    z-index: 0;
    color: #1e1e1e;
`

const BackButton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border-width:2px;
    border-style: solid; 
    border-color:#696969;
    border-radius: 3vh;
    padding-left:1vh;
    padding-right:1vh;
    margin-bottom: 2.5vh;
    &:hover {
        cursor: pointer;
        background-color: #696969;
        color: white;
    }
`

const Spacer = styled.div`
    width:100%;
    height:0%;
`

function BusinessFlatlay() {

    const [clickID, setClickID] = useState(0);
    const [previousID, setPreviousID] = useState(0);
    const Titles = ["YOU SHOULD NOT BE SEEING THIS","Kaufman: Insurance & Portfolio Management","Workforce Software: Technology and Operations","Filson: Supply Chain Management","Underground Printing: Marketing","Zingerman's: Financial Restructuring","MadDog: Technology & Venture Capital","Tremec: Global Operations","Project Title 8"]
    const sample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    const Body = [sample,sample,sample,sample,sample,sample,sample,sample,sample,sample,sample]
    

  return (
    <ProjectContainer>
      <NextSection ScrollNext={151} ScrollAlready={1050} color="black"/>
      <FlatlayContainer>
        <FlatlayImage src={background} />
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 1 ? "20vh":"-50vh" ) : "8vh", left: clickID !== 1 ? "5vh":"13vh" }} onClick={() => {clickID == 0 ? setClickID(1):setClickID(0); setPreviousID(1); }}>
          <ObjectImage src={notebook} style={{ height: "35vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 2 ? "20vh":"-50vh" ) : "6vh", left: clickID !== 2? "33vh":"2vh" }} onClick={() => {clickID == 0 ? setClickID(2):setClickID(0); setPreviousID(2);}}>
          <ObjectImage src={laptop} style={{ height: "40vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 3 ? "25vh":"-50vh" ) : "8vh", left: clickID !== 3? "87vh":"17vh" }} onClick={() => {clickID == 0 ? setClickID(3):setClickID(0); setPreviousID(3);}}>
          <ObjectImage src={clip} style={{ height: "35vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 4 ? "30vh":"-50vh" ) : "10vh", left: clickID !== 4? "113vh":"25vh" }} onClick={() => {clickID == 0 ? setClickID(4):setClickID(0); setPreviousID(4);}}>
          <ObjectImage src={phone} style={{ height: "20vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 5 ? "30vh":"30vh", left: clickID !== 0? (clickID == 5 ? "20vh":"130vh" ) :"110vh" }} onClick={() => {clickID == 0 ? setClickID(5):setClickID(0); setPreviousID(5);}}>
          <ObjectImage src={cup} style={{ height: "17vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 6 ? "25vh":"80vh" ) : "45vh", left: clickID !== 6? "87vh":"10vh" }} onClick={() => {clickID == 0 ? setClickID(6):setClickID(0); setPreviousID(6);}}>
          <ObjectImage src={bcase} style={{ height: "30vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID == 7 ? "25vh":"80vh" ) : "47vh", left: clickID !== 7? "40vh":"7vh" }} onClick={() => {clickID == 0 ? setClickID(7):setClickID(0); setPreviousID(7);}}>
          <ObjectImage src={map} style={{ height: "30vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? "80vh" : "50vh", left: "10vh"}}>
          <img src={plant} style={{ height: "20vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID == 0 ? "1vh" : "-50vh", left: "25vh"}}>
          <TextContainer>
              <TitleText> IMPACT FOR <span style={{color: "#5A4FCF"}}> YOUR CAREER </span> </TitleText>
          </TextContainer>
        </ObjectContainer>
        <InfoContainer style={{ opacity: clickID !== 0 ? "1":"0", transitionDelay: clickID !==0 ? ".5s":"0s", transitionDuration: clickID !==0 ? ".5s":".25s"}}>
            <TitleText>{Titles[previousID]}</TitleText>
            <Spacer/>
            <BodyText>{Body[previousID]}</BodyText>
            <Spacer/>
            <BackButton onClick={() => {setClickID(0)}}>
                <BodyText>Go Back</BodyText>
            </BackButton>
        </InfoContainer>
      </FlatlayContainer>
    </ProjectContainer>
  );
}

export default BusinessFlatlay;
