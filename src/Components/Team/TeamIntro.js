import styled from "styled-components";
import sky from "../../Images/Team/sky.jpg";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-image: url(${sky});
  background-size: cover;
  background-position-y: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: sticky;
  top: -1px;
  max-width: 100%;
  overflow: hidden;
`;

const TextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 80vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #1e1e1e;
`;

const Spacer = styled.div`
  height: 110vh;
`;

function TeamIntro() {
  return (
    <SectionContainer>
      <TextContainer>
        <TitleText>WE'RE EXCITED TO MEET YOU</TitleText>
        <Spacer />
      </TextContainer>
    </SectionContainer>
  );
}

export default TeamIntro;
