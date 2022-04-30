import styled from "styled-components";
import NextSection from "../General/NextSection";
import employers from "../../Images/About/employers.jpg";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const VisibleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-around;
  position: sticky;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 700px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-left: 5vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  line-height: 82%;
  color: black;
`;

const ImageContainer = styled.div`
  width: 70vw;
  height: 70vh;
  background-image: url(${employers});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function EmplyerSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={150} ScrollAlready={1025} color="black" />
      <VisibleContainer>
        <ImageContainer />
      </VisibleContainer>
    </SectionContainer>
  );
}

export default EmplyerSection;
