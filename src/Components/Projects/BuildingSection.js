import styled from "styled-components";
import building1 from "../../Images/Projects/Buildings/building1.jpg";
import NextSection from "../General/NextSection";
import { useState, useEffect } from "react";

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #E0CFF2;
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
  background-image: url(${building1});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
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
  background-color: #D0D1F2;
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
  font-size: 7vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  margin-top: 0;
  font-weight: 900;
  text-align: left;
  line-height: 1;
  color: #1e1e1e;
  padding-inline: 4vw;
  width: 100%;
`;

const OutlineText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 3vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  padding-inline: 4vw;
  padding-top: 2vh;
  font-weight: 300;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
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

const InvisibleTextTiny = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 1vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: transparent;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

function BuildingSection() {
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
      <NextSection ScrollNext={151} ScrollAlready={126} color="white" />
      <TextContainer>
        <TitleText>EXPLORE YOUR </TitleText>
        <TitleText>BUSINESS POTENTIAL</TitleText>
        <LineBreak />
        <OutlineText>We provide a wide array of consulting services to all different types of organizations, ranging from social enterprises with under 5 employees to international nonprofits with 1000+ employees. Primarily, we strive to help our clients overcome their most pressing business challenges or capitalize on their largest opportunities by providing data-backed recommendations that align with our client’s top-line strategy and mission.</OutlineText>
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

export default BuildingSection;
