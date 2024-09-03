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
import pizza from "../../Images/Projects/Business/pizza.png";
import airplane from "../../Images/Projects/Business/airplane.webp";
import basketball from "../../Images/Projects/Business/basketball.png";
import recliner from "../../Images/Projects/Business/recliner.png";
import pills from "../../Images/Projects/Business/pills.png";

import notebookLogo from "../../Images/Projects/Business/shadow/notebookLogo.png";
import phoneLogo from "../../Images/Projects/Business/shadow/phoneLogo.png";
import mapLogo from "../../Images/Projects/Business/shadow/mapLogo.png";
import laptopLogo from "../../Images/Projects/Business/shadow/laptopLogo.png";
import cupLogo from "../../Images/Projects/Business/shadow/cupLogo.png";
import clipLogo from "../../Images/Projects/Business/shadow/clipLogo.png";
import bcaseLogo from "../../Images/Projects/Business/shadow/caseLogo.png";

import React, { useState } from "react";
import NextSection from "../General/NextSection";


const ProjectContainer = styled.div`
  height: 150vh;
  width: 100vw;
  background-color: #DFDFDF;
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
  display: flex;
`;

const FlatlayImage = styled.img`
  height: 80vh;
`;

const ObjectContainer = styled.div`
  position: absolute;
  bottom: attr(data-bottom px);
  left: attr(data-left px);
  transition: left 1s, bottom 1s, transform .1s ease-in-out;
  z-index: 1;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`

const ObjectImage = styled.img`
  & {
    cursor: pointer;
  }
`;

const ObjectImageLogo = styled.img`
  &{
  opacity: 0%;
  position: absolute;
  left:0;
  cursor: pointer;
  transition: opacity .2s;
  }
  &:hover{
    opacity: 100%;
  }
`

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
    const [hoverId, setHoverID] = useState(0);
    const [previousID, setPreviousID] = useState(0);
    const Names = ["our clients","la-z-boy", "domino's", "GE aerospace","soul cycle","zingerman's foods","orlando magic","siemens healthineers"]
    const Titles = ["YOU SHOULD NOT BE SEEING THIS","La-Z-Boy","Domino's","GE Aerospace","Soul Cycle","Zingerman's: Financial Restructuring","Orlando Magic","Siemens Healthineers"]
    const LaZBoyText = "La-Z-Boy (NYSE: LZB) is a top 10 American-made furniture brand headquartered in Michigan. They are well-known for their recliners and sofas, and are available at their brand stores, comfort studios, and third party dealers. MEG was responsible for identifying pricing strategies through analyzing the prices of several competitor dealers utilizing web scraping and creating an online pricing tool through dashboards in a data visualization tool."
    const DominosText = "Domino’s (NYSE: DPZ) is a multibillion dollar Quick Service Restaurant (QSR) that you may have had a slice of pizza from! MEG was able to optimize their kitchen layout leveraging artificial intelligence to decrease the flowtime of their pizzas."
    const GEText = "GE Aerospace (NYSE: GE) is one of the largest aircraft engine manufacturers. They tasked MEG with forecasting the growth of a new aircraft manufacturer over the next 5 years."
    const SoulCycleText = "Soul Cycle is a national fitness focused chain that combines cardio, strength training, and resistance training. MEG worked on attracting and retaining more male customers through exploring partnerships with fitness brands, redesigning the website, and special promotional events."
    const ZingermanText = "Zingerman, a local bakery, uses a specialized software to deal with the finances of their many locations called the Zingerman's Service Network (ZSN). We provided ZSN with a new funding model through research of market rates for financial services and a marketing deliverable to promote the model to the Zingerman’s community of businesses."
    const OrlandoText = "The Orlando Magic is a professional basketball team in the NBA based in Orlando, Florida. The project team explored a marketing strategy through social media and other channels within NBA league policy to reach fans outside of Orlando, increasing awareness for the team’s legacy and personability of players."
    const SiemensText = "Siemens Healthineers is a medical technology (OTCMKTS: SMMNY) is a medical technology company. They specialize in imagining, diagnostics, and advanced therapy. MEG was tasked with conducting an analysis of the U.S. manufacturing network for radiopharmaceuticals and the strategic considerations PETNET should pursue."
    const Body = ["YOU SHOULD NOT BE SEEING THIS",LaZBoyText,DominosText,GEText,SoulCycleText,ZingermanText,OrlandoText,SiemensText]
    

  return (
    <ProjectContainer>
      <NextSection ScrollNext={151} ScrollAlready={750} color="black"/>
      <FlatlayContainer>
        <FlatlayImage src={background} />
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 1 ? "20vh":"-50vh" ) : "12vh", left: clickID !== 1 ? "5vh":"13vh" }} onClick={() => {clickID === 0 ? setClickID(1):setClickID(0); setPreviousID(1); }} onMouseEnter={() => {setHoverID(1)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={recliner} style={{ height: "30vh" }} />
            <ObjectImageLogo src={recliner} style={{ height: "30vh" }} />
          </ImageContainer>
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 2 ? "20vh":"-50vh" ) : "8vh", left: clickID !== 2? "33vh":"2vh", zIndex:"2" }} onClick={() => {clickID === 0 ? setClickID(2):setClickID(0); setPreviousID(2);}} onMouseEnter={() => {setHoverID(2)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={pizza} style={{ height: "35vh", marginLeft: "70px", marginBottom: "25px"}} />
            <ObjectImageLogo src={pizza} style={{ height: "35vh", marginLeft: "70px", marginBottom: "25px"}} />
          </ImageContainer> 
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 3 ? "25vh":"-50vh" ) : "12vh", left: clickID !== 3? "87vh":"17vh" }} onClick={() => {clickID === 0 ? setClickID(3):setClickID(0); setPreviousID(3);}} onMouseEnter={() => {setHoverID(3)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={airplane} style={{ height: "15vh", marginBottom: "50px", marginLeft: "-60px" }} />
            <ObjectImageLogo src={airplane} style={{ height: "15vh", marginBottom: "50px", marginLeft: "-60px" }} />
          </ImageContainer> 
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 4 ? "30vh":"-50vh" ) : "10vh", left: clickID !== 4? "113vh":"25vh" }} onClick={() => {clickID === 0 ? setClickID(4):setClickID(0); setPreviousID(4);}} onMouseEnter={() => {setHoverID(4)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={phone} style={{ height: "20vh" }} />
            <ObjectImageLogo src={phoneLogo} style={{ height: "20vh" }} />
          </ImageContainer> 
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 5 ? "30vh":"30vh", left: clickID !== 0? (clickID === 5 ? "20vh":"130vh" ) :"110vh" }} onClick={() => {clickID === 0 ? setClickID(5):setClickID(0); setPreviousID(5);}} onMouseEnter={() => {setHoverID(5)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={cup} style={{ height: "17vh" }} />
            <ObjectImageLogo src={cupLogo} style={{ height: "17vh" }} />
          </ImageContainer> 
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 6 ? "25vh":"80vh" ) : "45vh", left: clickID !== 6? "87vh":"10vh" }} onClick={() => {clickID === 0 ? setClickID(6):setClickID(0); setPreviousID(6);}} onMouseEnter={() => {setHoverID(6)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
          <ObjectImage src={basketball} style={{ height: "30vh", marginLeft: "20px", marginBottom: "20px" }} />
            <ObjectImageLogo src={basketball} style={{ height: "30vh", marginLeft: "20px", marginBottom: "20px" }} />
          </ImageContainer>
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? (clickID === 7 ? "25vh":"80vh" ) : "47vh", left: clickID !== 7? "40vh":"7vh" }} onClick={() => {clickID === 0 ? setClickID(7):setClickID(0); setPreviousID(7);}} onMouseEnter={() => {setHoverID(7)}} onMouseLeave = {() => setHoverID(0)}>
          <ImageContainer>
            <ObjectImage src={pills} style={{ height: "20vh", marginBottom: "40px", marginLeft: "70px" }} />
            <ObjectImageLogo src={pills} style={{ height: "20vh", marginBottom: "40px", marginLeft: "70px" }} />
          </ImageContainer> 
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID !== 0 ? "80vh" : "50vh", left: "10vh", pointerEvents: "none"}}>
          <img src={plant} style={{ height: "20vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID === 0 ? "3vh" : "-50vh", left: "50%",transform: "translateX(-50%)", whiteSpace:"nowrap"}}>
          <TextContainer>
              <TitleText style={{textAlign:"center", fontSize:"5vh", lineHeight:"90%"}}> <span style={{fontSize:"2.5vh"}}>Click an object to see how we helped </span><br/> <span style={{color: "#5A4FCF", textTransform: "capitalize"}}> {Names[hoverId]} </span> </TitleText>
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
