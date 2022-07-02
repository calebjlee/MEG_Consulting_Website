import styled, { keyframes } from "styled-components";
import door from "../../Images/About/door.png";
import town from "../../Images/About/town1.jpg";
import NextSection from "../../Components/General/NextSection.js";
import { useState, useEffect } from "react";

{/*Door section including door, background image and text section*/}
{/*Animation works by scaling in on the door picture and shifting the text up at the same time */}
{/*TODO: Find a better door and background image (something corporate)*/}

const SectionContainer = styled.div`
  width: 100vw;
  height: 350vh;
  background-color: #faccc7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
  overflow: hidden;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin: 5vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: white;
  width:90%;
  text-align:center;
  margin-top:10vh;
`;

{/*Zoom animation for door*/}
const Zoom = keyframes`
  to {transform: scale(1000%)}
`;

{/*Shift animation for text section*/}
const Shift = keyframes`
  to {transform: translateY(0vh)}
`;

{/*Door image*/}
const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  max-width: 100%;
  background-size: cover;
  background-position: 50% 100%;
  background-image: url(${door});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;

  transform-origin: 50% 70%; /* Zoom in on the transparent opening of the door */
  transform: scale(100%);

  animation: ${Zoom} 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll2) * -15s);
  z-index: 1;
`;

{/*Shift container is the text container that shifts up on scroll*/}
const ShiftContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #E0CFF2;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  top: -0vh;

  transform: translateY(100vh);
  animation: ${Shift} 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll2) * -15s);
`;

const TextContainer = styled.div`
  width: 60vw;
  display: inline-block;
  background-color: #E0CFF2;
`;

const BodyTitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: left;
  color: #1e1e1e;
`;

const BodyText = styled.p`
  display: inline-block;
  font-size: 3.2vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  color: #1e1e1e;
  line-height: 1.6;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
`;

{/*Background Image of the town*/}
const TownContainer = styled.div`
  position: absolute;
  top: 0;
  background-image: url(${town});
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function DoorSection() {

  const [scroll1, setScroll1] = useState(window.scrollY);
  const handleScroll = () => setScroll1(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  {/*Convert pixels to vh*/}
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  {/*if the section moves within the "about us page" (i.e. a change in the vertical size of the sections above this section) 
  this function has to be changed: to change I just guessed and checked with the subtracted value and the min value until it
  looked right. you can console log temp to get the numbers right, sorry for the jank*/}
  {/*TODO: Make less jank*/}
  function calculatePosition() {
    var temp = Math.max(0, window.pageYOffset / vh(1450) - 0.7653);
    return Math.min(temp, 0.0665655);
  }

  {/*Set Css property based on calculate position ^*/}
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty("--scroll2", calculatePosition());
    },
    false
  );

  return (
    <SectionContainer>
      <TownContainer />
      <ShiftContainer>
      <NextSection ScrollNext={151} ScrollAlready={1250} color="black" />
        <TextContainer>
          <SmallSpacer />
          <BodyTitleText>COME ONE COME ALL</BodyTitleText>
          <SmallSpacer />
          <BodyText>
          At MEG Consulting we encourage everyone and anyone to apply. Our members study everything from business administration to computer science to fine art to piano performance, and we continue to look for students pursuing whatever their passions are. We come from all over the United States and some are even from abroad. Our only prerequisite for applying is an unyielding desire to learn and a strong commitment to finding the best solutions for our clients.
          </BodyText>
        </TextContainer>
      </ShiftContainer>
      <ImageContainer style={{ display: scroll1 > vh(1200) ? "none" : "inline-block" }} >   {/*after door is zoomed in, display none so you can interact with text underneath it*/}
      <NextSection ScrollNext={151} ScrollAlready={1100} color="white" />
        <TitleTextContainer>
          <TitleText>WE KEEP OUR DOORS OPEN </TitleText>
        </TitleTextContainer>
      </ImageContainer>
    </SectionContainer>
  );
}

export default DoorSection;
