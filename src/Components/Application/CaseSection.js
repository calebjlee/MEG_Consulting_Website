import styled  from "styled-components";
import story from "../../Images/Application/practice/story.png"
import website from "../../Images/Application/practice/website.png"
import practice from "../../Images/Application/practice/practice.png"

import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const SectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#E0CFF2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-wrap: wrap;
    top: 100vh;
    max-width: 100%;
    transition: transform 1s;
`;

const GhostContainer = styled.div`
    width: 80%;
    height: 70vh;
`

const SlideContainer = styled.div`
    position: absolute;
    left: center;
    background-color:#E0CFF2;
    top: 10vh;
    width: 80%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    transition: transform 1s;
`

const ContentContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleText = styled.h2`
    font-size: 3vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const TextContainer = styled.div`
    width: 100%;
    flex-grow: 2;
`

const ContentText = styled.h3`
    font-size: 2vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const BodyText = styled.h3`
    font-size: 1.5vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const ContentImage = styled.img`
    height: 55vh;
    width: 30vw;
    object-fit: contain;
    object-position: center;
`

const ChevronContainer = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10;
`

const SmallSpacer = styled.div`
    width:100%;
    height: 10vh;
`

function CaseSection(props){
    
    const [behavioralID, setBehavioralID] = useState(0);

    useEffect(()=>{
        if (props.display === 0){
            setTimeout(()=>{
                setBehavioralID(0);
            },1000)
        }
    },[props.display])

    return(
        <SectionContainer style={{transform: props.display === 3 ? "translateY(-100vh)":"none"}}>
            <SlideContainer>
                <TitleText>Mock Case Coming Soon!</TitleText>
            </SlideContainer>
        </SectionContainer>
    )
}

export default CaseSection;