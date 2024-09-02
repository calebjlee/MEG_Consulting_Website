import styled from "styled-components";
import written from "../../Images/Application/practice/written.png";
import case1 from "../../Images/Application/practice/case.png";
import behavioral from "../../Images/Application/practice/behavioral.png";
import { useState } from "react";
import WrittenSection from "./WrittenSection";
import BehavioralSection from "./BehavioralSection";
import CaseSection from "./CaseSection";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #E0CFF2;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  position: sticky;
  flex-wrap: wrap;
  overflow: hidden;
  top: -1px;
  max-width: 100%;
  @media (max-aspect-ratio: 1233/870) {
    display:none;
  }
`;

const TitleText = styled.h1`
    font-size: 3vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
    transition: transform 1s;
`

const HeaderText = styled.h2`
    font-size: 2vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 1vw;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
    text-align: center;
`

const SelectionContainer = styled.div`
    width: 80%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50vh;
`

const OptionContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    border-radius: 1vw;
    background-color: #E0CFF2;
    cursor: pointer;
    position: relative;
    transition: .5s box-shadow, .5s background-color, 1s transform, .5s opacity .75s;
`

const OutlineContainer = styled.div`
    width:100%;
    height:100%;
    z-index:-1;
    background: linear-gradient(-45deg, rgba(69,0,129,1) 0%, rgba(85,45,184,1) 50%, rgba(156,181,238,1) 100%);
    transform: scaleX(1.05) scaleY(1.035);
    position: absolute;
    top: center;
    left: center;
    border-radius: 1.05vw;
    clip-path: circle(0vh at 0% 0%);
    transition: 1s clip-path;
`

const CoverContainer = styled.div`
    width:100%;
    height:100%;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    border-radius: 1vw;
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
    position: absolute;
    top: 51%;
    left: 10%;
    transition: opacity .5s;
    &:hover {
        cursor: pointer;
        background-color: #696969;
        color: white;
    }
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
    width:100%;
    height: 5vh;
`

const OptionImage = styled.img`
    height:80%;
    width: 95%;
    object-fit: contain;
`

function PracticeSection(){

    const [clickID, setClickID] = useState(0);
    const [displayID, setDisplayID] = useState(0);
    const [hoverID, setHoverID] = useState(0);

    function handleOptionClick(ID){
        setClickID(ID);
        setTimeout(()=>{
            setDisplayID(ID)
        },"1000")
    }

    return(
        <SectionContainer>
            <NextSection ScrollNext = {150} ScrollAlready = {900}/>
            <TitleText onClick={()=>{setClickID(0); setDisplayID(0)}} style={{transform: clickID !== 0 ? "translateY(-50vh)":"translateY(0)"}}>Practice, Tips, and More!</TitleText>
            <SmallSpacer/>
            <SelectionContainer>
                
                <OptionContainer onClick={()=>handleOptionClick(1)} onMouseEnter={()=>{setHoverID(1)}} onMouseLeave={()=>{setHoverID(0)}}
                style={{backgroundColor: clickID !== 1 && hoverID === 1 ? "#D5BFED":"#E0CFF2",
                boxShadow: clickID !== 1 && hoverID === 1 ? ".25vw .25vw .5vw grey":"none",
                opacity: clickID === 1 ? "0%":"100%",
                pointerEvents: clickID !== 0 ? "none":"auto",
                transform: clickID !== 0 && clickID !== 1 ? "translateY(100vh)":"translateY(0)"}}>
                    <CoverContainer>
                        <OptionImage src={written} alt="Typewriter Written Application" />
                        <HeaderText>Written Application</HeaderText>
                    </CoverContainer>
                    <OutlineContainer style={{clipPath: clickID === 1 ? "circle(200% at 0% 0%)":"circle(0% at 0% 0%)"}}/>
                </OptionContainer>
                
                <OptionContainer onClick={()=>handleOptionClick(2)} onMouseEnter={()=>{setHoverID(2)}} onMouseLeave={()=>{setHoverID(0)}}
                style={{backgroundColor: clickID !== 2 && hoverID === 2 ? "#D5BFED":"#E0CFF2", 
                boxShadow: clickID !== 2 && hoverID === 2 ? ".25vw .25vw .5vw grey":"none", 
                opacity: clickID === 2 ? "0%":"100%", 
                pointerEvents: clickID !== 0 ? "none":"auto",
                transform: clickID !== 0 && clickID !== 2 ? "translateY(100vh)":"translateY(0)"}}>
                    <CoverContainer>
                        <OptionImage src={behavioral} alt="Book Behavioral Interview" />
                        <HeaderText>Behavioral Interview</HeaderText>
                    </CoverContainer>
                    <OutlineContainer style={{clipPath: clickID === 2 ? "circle(200% at 0% 0%)":"circle(0% at 0% 0%)"}}/>
                </OptionContainer>
                
                <OptionContainer onClick={()=>handleOptionClick(3)} onMouseEnter={()=>{setHoverID(3)}} onMouseLeave={()=>{setHoverID(0)}}
                style={{backgroundColor: clickID !== 3 && hoverID === 3 ? "#D5BFED":"#E0CFF2",
                boxShadow: clickID !== 3 && hoverID === 3 ? ".25vw .25vw .5vw grey":"none", 
                opacity: clickID === 3 ? "0%":"100%", 
                pointerEvents: clickID !== 0 ? "none":"auto",
                transform: clickID !== 0 && clickID !== 3 ? "translateY(100vh)":"translateY(0)"}}>
                    <CoverContainer>
                        <OptionImage src={case1} alt="Briefcase Case Interview" style={{filter:"grayscale(100%)"}}/>
                        <HeaderText>Mock Case</HeaderText>
                    </CoverContainer>
                    <OutlineContainer style={{clipPath: clickID === 3 ? "circle(200% at 0% 0%)":"circle(0% at 0% 0%)"}}/>
                </OptionContainer>  

            </SelectionContainer>
            <WrittenSection display = {displayID}/>
            <BehavioralSection display = {displayID}/>
            <CaseSection display = {displayID}/>
            <BackButton onClick={()=>{setDisplayID(0); setClickID(0);}} style={{opacity: displayID === 0 ? "0%":"100%",pointerEvents: clickID !== 0 ? "auto":"none", transitionDelay: clickID!==0 ? "0.5s":"0s" }}>
                <BodyText>Go Back</BodyText>
            </BackButton>
        </SectionContainer>
    )
}

export default PracticeSection;