import styled from "styled-components";
import journey from "../../Images/About/journey.jpg";
import NextSection from "../../Components/General/NextSection.js";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #cce1cf;
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
  max-width: 600px;
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
  height: 50vh;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${journey});
`;

function JourneySection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={1175} color="white" />
      <TitleTextContainer>
        <TitleText>WE CAN HELP GET YOU THERE TOO</TitleText>
      </TitleTextContainer>
      <ImageContainer />
      <Spacer />
    </SectionContainer>
  );
}

export default JourneySection;
