import styled from "styled-components";
import { keyframes } from "styled-components";
import forest from "../../Images/About/forest.jpg";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 350vh;
  background-color: #1e1e1e;
  display: flex;
  justify-content: flex-start;
  position: sticky;
  top: -1px;
  max-width: 100%;
  overflow: hidden;
`;

const ClipScale = keyframes`
to {clip-path:circle(100vmax at center)}
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  background-color: #1e1e1e;
  background-image: url(${forest});
  clip-path: circle(7vmax at center);

  animation: ${ClipScale} 1s linear forwards;
  animation-play-state: paused;
  animation-delay: calc((var(--scroll) * -3s));
`;

const TextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 80vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 12vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: left;
  color: white;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 45vmin;
`;

function AboutIntro() {
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / vh(500) - 0.4
      );
    },
    false
  );

  return (
    <SectionContainer>
      <ImageContainer>
        <NextSection ScrollNext={351} ScrollAlready={150} color="white" />
        <TextContainer>
          <TitleText>NOT YOUR TYPICAL</TitleText>
        </TextContainer>
        <SmallSpacer />
        <TextContainer>
          <TitleText>CONSULTING CLUB</TitleText>
        </TextContainer>
      </ImageContainer>
    </SectionContainer>
  );
}

export default AboutIntro;
