import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
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
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const TitleText = styled.h1`
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 0.03em white;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
`;

const TitleTextStill = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: white;
`;

const LineBreak = styled.div`
  width: 100%;
  height: 2vh;
`;

const Spacer = styled.div`
  width: 100%;
  height: 0vh;
`;

function ToHomeSection() {
  return (
    <SectionContainer>
      <TitleTextContainer>
        <TitleText>GO BACK:</TitleText>
      </TitleTextContainer>
      <LineBreak />
      <Link to="/" style={{ textDecoration: "none" }}>
        <TitleTextContainer>
          <TitleTextStill>HOME</TitleTextStill>
        </TitleTextContainer>
        <Spacer />
      </Link>
    </SectionContainer>
  );
}

export default ToHomeSection;
