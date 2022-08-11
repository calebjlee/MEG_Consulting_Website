import styled from "styled-components";
import umichBackgrond from "../../Images/Projects/Umich/umich_background.jpg";
import projectText from "../../Images/Projects/project_text.png";
import bottle from "../../Images/Projects/Umich/bottle.png";
import laptop from "../../Images/Projects/Umich/laptop.png";
import flag from "../../Images/Projects/Umich/flag.png";
import tote from "../../Images/Projects/Umich/tote.png";
import tickets from "../../Images/Projects/Umich/tickets.png";
import notebook from "../../Images/Projects/Umich/notebook.png";
import NextSection from "../General/NextSection";
import React, { useState } from "react";

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
`;

const FlatlayImage = styled.img`
  height: 80vh;
`;

const ObjectContainer = styled.div`
  position: absolute;
  bottom: attr(data-bottom px);
  left: attr(data-left px);
  transition: left 1s, bottom 1s, transform 1s;
  transform-origin: 10% 50%;
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
  text-align: justify;
`;

const InfoContainer = styled.div`
    display:flex;
    position: absolute;
    width:60vh;
    height:50vh;
    left:50vh;
    bottom:5vh;
    flex-wrap: wrap;
    transition: opacity 1s linear 1s;
    z-index: 0;
    color: #1e1e1e;
    background-color: rgba(200,200,200,.5);
    padding: 2vh;
    padding-top: 0;
    border-radius: 0 0 2vh 2vh;
`

const Spacer = styled.div`
    width:100%;
    height:0%;
`

const TitleContainer = styled.div`
  display:flex;
  position: absolute;
  width:60vh;
  height:15vh;
  left:50vh;
  bottom:57vh;
  flex-wrap: wrap;
  transition: opacity 1s linear 1s;
  z-index: 0;
  background-color: rgba(200,200,200,.5);
  padding: 2vh;
  border-radius: 2vh 2vh 0vh 0vh;
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
    margin-bottom: 0;
    &:hover {
        cursor: pointer;
        background-color: #696969;
        color: white;
    }
`

function UmichFlatlay() {

  const [clickID1, setClickID1] = useState(0);
  const [previousID1, setPreviousID1] = useState(0);
  const [hoverID1, setHoverID1] = useState(0);
  const Titles = ["YOU SHOULD NOT BE SEEING THIS","UM Intramurals","Michigan Online","UM Basketball","M&B Cupboard","UM Football & Big House","MCity Test Facility"]
  const BasketballText = "We were approached by UM Athletics to increase student section attendance at Michigan Basketball games. In order to do this we suggested a streamlined version of their ticket claiming process, instituting various stadium promotions, and creating partnerships with other student organizations. "
  const MBCText = 'The Maize & Blue Cupboard is a resource for students with food insecurity. Our team was tasked with transforming this cupboard into a "No Wrong Doors" initiative in which The Maize & Blue Cupboard becomes a one-stop shop for students in need. We also developed a marketing strategy to ensure that this resource is utilized by students'
  const FootballText = "We were asked by UM Athletics to create a pricing model to generate additional revenue growth for Michigan Football tickets. The project focused on creating a new ticket pricing framework, identifying helpful customer segments, and introducing incentive programs to drive ticket sales."
  const MCityText = "MCity is Umich's connected and automated (CAV) research group. We conducted a gap analysis of technical and non-technical challenges in the CAV space and identify the overarching challenges so MCity research priorities can be decided. We did this by researching CAV databases, interviews, and other CAV research groups."
  const IntramuralText = "We worked with the intramural building to create a more efficient training program for their employees by identifying when and how they train. We also looked at their marketing and focused on ways we could improve diversity and number of people using the facilities, all while keeping costs under control."
  const MichiganOnlineText = "Michigan Online is a UM organization that focuses on giving an online and self-paced learning experience with their library of virtual classes. Our team was tasked with transforming the platform into something that is more widely used by students. We analyzed content, marketing, and accessibility to propose solutions."
  const Body = ["YOU SHOULD NOT BE SEEING THIS",IntramuralText,MichiganOnlineText,BasketballText,MBCText,FootballText,MCityText]
  const Category = ["NEIGHBORHOOD", "FITNESS", "EDUCATION", "BASKETBALL TEAM", "PANTRY","FOOTBALL TEAM", "RESEARCH"]
  return (
    <ProjectContainer>
      <NextSection ScrollNext={151} ScrollAlready={1050} color="black"/>
      <FlatlayContainer>
        <FlatlayImage src={umichBackgrond} />
        <ObjectContainer style={{ bottom: clickID1 !== 0 ? (clickID1 === 1 ? "25vh":"-50vh" ) : "8vh", left: clickID1 !== 1 ? "12vh":"8vh" }} onClick={() => {clickID1 === 0 ? setClickID1(1):setClickID1(0); setPreviousID1(1);}} onMouseEnter={() => {setHoverID1(1)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={bottle} style={{ height: "15vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 !== 2 ? "24vh" : "22vh", left: clickID1 !== 0 ? (clickID1 === 2 ? "8vh":"-50vh" ):"12vh" }} onClick={() => {clickID1 === 0 ? setClickID1(2):setClickID1(0); setPreviousID1(2);}} onMouseEnter={() => {setHoverID1(2)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={laptop} style={{ height: "28vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 !== 0 ? (clickID1 === 3 ? "60vh":"80vh" ) : "52vh", left: clickID1 !== 3 ? "4.5vh":"20vh", transform: clickID1 === 3 ? `rotate(90deg)`:`rotate(0deg)` }} onClick={() => {clickID1 === 0 ? setClickID1(3):setClickID1(0); setPreviousID1(3);}} onMouseEnter={() => {setHoverID1(3)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={flag} style={{ height: "25vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 !== 0 ? (clickID1 === 4 ? "12vh":"-60vh" ) : "10vh", left: clickID1 !== 4 ? "52vh":"8vh" }} onClick={() => {clickID1 === 0 ? setClickID1(4):setClickID1(0); setPreviousID1(4);}} onMouseEnter={() => {setHoverID1(4)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={tote} style={{ height: "52vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 !== 5 ? "36vh" : "32vh", left: clickID1 !== 0 ? (clickID1 === 5 ? "14vh":"125vh" ):"92vh" }} onClick={() => {clickID1 === 0 ? setClickID1(5):setClickID1(0); setPreviousID1(5);}} onMouseEnter={() => {setHoverID1(5)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={tickets} style={{ height: "16vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 !== 0 ? (clickID1 === 6 ? "25vh":"-50vh" ) : "8vh", left: clickID1 !== 6 ? "89vh":"14vh" }} onClick={() => {clickID1 === 0 ? setClickID1(6):setClickID1(0); setPreviousID1(6);}} onMouseEnter={() => {setHoverID1(6)}} onMouseLeave = {() => setHoverID1(0)}>
          <ObjectImage src={notebook} style={{ height: "27vh" }} />
        </ObjectContainer>
        <ObjectContainer style={{ bottom: clickID1 === 0 ? "3vh" : "-50vh", left: "50%",transform: "translateX(-50%)", whiteSpace:"nowrap"}}>
          <TitleText style={{textAlign:"center", fontSize:"5vh", lineHeight:"90%"}}> <span style={{fontSize:"2.5vh"}}>Click an object to see how we've created</span><br/> <span style = {{color: "#00274C"}}>IMPACT IN YOUR</span> <span style={{color: "#FFCB05", WebkitTextStroke: "1px gray"}}> {Category[hoverID1]} </span> </TitleText>
        </ObjectContainer>
        <InfoContainer style={{ opacity: clickID1 !== 0 ? "1":"0", transitionDelay: clickID1 !==0 ? ".5s":"0s", transitionDuration: clickID1 !==0 ? ".5s":".25s"}}>
          <BodyText>{Body[previousID1]}</BodyText>
          <Spacer/>
          <BackButton onClick={() => {setClickID1(0)}}>
                <BodyText>Go Back</BodyText>
          </BackButton>
        </InfoContainer>
        <TitleContainer style={{ opacity: clickID1 !== 0 ? "1":"0", transitionDelay: clickID1 !==0 ? ".5s":"0s", transitionDuration: clickID1 !==0 ? ".5s":".25s"}}>
          <TitleText style={{maxWidth: "40vh"}}>{Titles[previousID1]}</TitleText>
        </TitleContainer>
      </FlatlayContainer>
    </ProjectContainer>
  );
}

export default UmichFlatlay;
