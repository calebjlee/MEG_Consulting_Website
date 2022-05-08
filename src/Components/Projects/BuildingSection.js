import styled from "styled-components";
import building1 from "../../Images/Projects/Buildings/building1.jpg";

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #bec8da;
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

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #bfbdc7;
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

function BuildingSection() {
  return (
    <SectionContainer>
      
      <TextContainer>
        <OutlineText>WHETHER IT'S FOR A</OutlineText>
        <LineBreak />
        <TitleText>SMALL NONPROFIT</TitleText>
        <LineBreak />
        <InvisibleTextSmall>OR IT'S A</InvisibleTextSmall>
        <LineBreak />
        <InvisibleTextLarge>LARGE CORPORATION</InvisibleTextLarge>
      </TextContainer>
      <ImageContainer />
    </SectionContainer>
  );
}

export default BuildingSection;
