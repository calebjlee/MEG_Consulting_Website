import styled from "styled-components";
import building2 from "../../Images/Projects/Buildings/building2.png";
import building1 from "../../Images/Projects/Buildings/building1.png";
import NextSection from "../General/NextSection";
import { useState, useEffect } from "react";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: -1px;
  max-width: 100%;
  @media (max-aspect-ratio: 1233/870) {
    display:none;
  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${building2});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  max-width: 100%;
`;

const ImageCoverContainer = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: -150vh;
  max-width: 100%;
`;

const ImageCover = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${building1});
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0px;
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const LineBreak = styled.div`
  width: 100%;
  height: 0;
`;

const TitleText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: center;
  color: #1e1e1e;
`;

const OutlineText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: center;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: transparent;
`;

const InvisibleTextSmall = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: transparent;
`;

const InvisibleTextLarge = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: transparent;
`;

function BuildingSection1() {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={300} color="white" />
      <TextContainer>
        <InvisibleTextSmall>WHETHER IT'S FOR A</InvisibleTextSmall>
        <LineBreak />
        <InvisibleTextLarge>SMALL NONPROFIT</InvisibleTextLarge>
        <LineBreak />
        <OutlineText>OR IT'S FOR A</OutlineText>
        <LineBreak />
        <TitleText>LARGE CORPORATION</TitleText>
      </TextContainer>
      <ImageContainer>
        <ImageCoverContainer>
          <ImageCover
            style={{ display: scroll < vh(150) ? "none" : "inline-block" }}
          />
        </ImageCoverContainer>
      </ImageContainer>
    </SectionContainer>
  );
}

export default BuildingSection1;
