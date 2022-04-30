import styled, { keyframes } from "styled-components";
import door from "../../Images/About/door.png";
import town from "../../Images/About/town1.jpg";
import NextSection from "../../Components/General/NextSection.js";

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
  width: fit-content;
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
  text-align: center;
`;

const Spacer = styled.div`
  width: 100%;
  height: 55vh;
`;

const Zoom = keyframes`
  to {transform: scale(1000%)}
`;

const Shift = keyframes`
  to {transform: translateY(0vh)}
`;

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

  transform-origin: 50% 70%;
  transform: scale(100%);

  animation: ${Zoom} 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll2) * -15s);
  z-index: 1;
`;

const ShiftContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #faccc7;

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
  height: 50vh;
  background-color: #faccc7;
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
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  function calculatePosition() {
    var temp = Math.max(0, window.pageYOffset / vh(1450) - 0.7653);
    return Math.min(temp, 0.0665655);
  }

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
        <TextContainer>
          <SmallSpacer />
          <BodyTitleText>COME ONE COME ALL</BodyTitleText>
          <SmallSpacer />
          <BodyText>
            MEG Consulting is a pro-bono consulting group at the University of
            Michigan. From local startups to million dollar companies, members
            have the opportunity to provide the solutions for real world
            problems. At our core, we believe in treating our people with
            kindness and respect. From the executive board to our applicants, we
            strive to create an enviornment where everyone can learn and grow.
            We see our people as not only business professionals but also as our
            mentors, teachers, peers, and most importantly, friends.
          </BodyText>
        </TextContainer>
      </ShiftContainer>
      <ImageContainer>
        <TitleTextContainer>
          <TitleText>WE KEEP OUR DOORS OPEN </TitleText>
          <Spacer />
        </TitleTextContainer>
      </ImageContainer>
    </SectionContainer>
  );
}

export default DoorSection;
