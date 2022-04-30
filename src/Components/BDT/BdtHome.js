import styled from "styled-components";
import tech from "../../Images/BDT/tech.mp4";
import { keyframes } from "styled-components";
import { useState } from "react";

const FlyIn = keyframes`
  from {transform: translateX(-100vw)}
  to {transform: translateX(0)
  }
`;

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #f3e7db;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 700px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transform: translateX(-100vw);
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-duration: 0.14s;
  animation-name: ${FlyIn};
  margin-right: 30vw;
  margin-left: 10vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: #1e1e1e;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  max-width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
`;

function BdtHome() {
  const [ready, setReady] = useState(false);

  return (
    <SectionContainer>
      <TitleTextContainer
        style={{ animationPlayState: ready ? "running" : "paused" }}
      >
        <TitleText>LETS DESIGN AND CREATE STUFF</TitleText>
      </TitleTextContainer>
      <VideoContainer>
        <Video
          playsInline
          muted
          autoPlay
          onPlay={() => {
            setReady(true);
          }}
        >
          <source src={tech} type="video/mp4" />
        </Video>
      </VideoContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default BdtHome;
