import styled from "styled-components";
import { keyframes } from "styled-components";
import space from "../../Images/About/space.mp4";
import earth from "../../Images/About/help.mp4";
import NextSection from "../General/NextSection";

{/*Down to earth section and Space Section*/}
{/*TODO: Combine this page without the animation: have the two videos side by side with the same text
I'm not in love with the side scrolling (plus it can get a bit laggy) also the wordplay might be more
obvious if the two sections are on the same page 
NOTE: If you do this you have to change the NextSections for all the sections after this one, also you
have to change the calculate position function in DoorSection.js */}

const Shift = keyframes`
  to {transform: translateX(-200%);}
`;

const SectionContainer = styled.div`
  width: 100vw;
  height: 375vh;
  background-color: #E0CFF2;
  position: sticky;
  top: -1px;
  max-width: 100%;
  overflow: hidden;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 700px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-left: 5vw;
  padding-right: 10vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

{/*Container that has all the shifting divs, no aniamtion for itself*/}
const ShiftContainer = styled.div`
  width: 200vw;
  height: 100vh;
  display: flex;
  position: relative;
  z-index: -1;
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  max-width: 50%;
  position: relative;
`;

{/*Container that contains the video divs and video and shifts*/}
const ShiftVideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  max-width: 100%;
  position: relative;

  transform: translateX(0);
  -webkit-transform:translate3d(0,0,0);

  animation: ${Shift} 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll1) * -4s);
  z-index: 1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  -webkit-transform: translate3d(0,0,0)
`;

function SpaceSection() {

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
    var temp = Math.max(0, window.pageYOffset / vh(950) - 0.75);
    return Math.min(temp, 0.1252);
  }

  {/*Set Css property based on calculate position ^*/}
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty("--scroll1", calculatePosition());
    },
    false
  );

  return (
    <SectionContainer>
      <ShiftContainer>
        <VideoContainer>
          <NextSection ScrollNext={188.5} ScrollAlready={650} color="white" />
          <TitleTextContainer style={{ zIndex: "5"}}>
            <TitleText>OUT OF THIS WORLD PROJECTS</TitleText>
          </TitleTextContainer>
          <Video autoPlay playsInline loop muted>
            <source src={space} type="video/mp4" />
          </Video>
        </VideoContainer>
        
        {/*This div shifts over the "Out of this world div"*/}
        <ShiftVideoContainer>
          <NextSection ScrollNext={376} ScrollAlready={650} color="white" />
          <TitleTextContainer style={{ zIndex: 10, WebkitTransform: "translate3d(-50%,-50%,100px)"}}>
            <TitleText style={{ textAlign: "right" }}>
              DOWN TO EARTH PEOPLE
            </TitleText>
          </TitleTextContainer>
          <Video autoPlay playsInline loop muted>
            <source src={earth} type="video/mp4" />
          </Video>
        </ShiftVideoContainer>
      </ShiftContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default SpaceSection;
