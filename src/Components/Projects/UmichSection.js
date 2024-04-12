import styled from "styled-components";
import tower from "../../Images/Projects/umich.jpg";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #bfbdc7;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: -1px;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${tower});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 55%;
  position: relative;
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #E0CFF2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 6vmin;
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

function UmichSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={900} color="black"/>
      <ImageContainer />
      <TextContainer>
        <TitleText>SOLVE THE PROBLEMS</TitleText>
        <br />
        <TitleText>CLOSEST TO YOU</TitleText>
        <SmallSpacer />
        <BodyText>
        One of the best feelings in consulting is seeing your solutions come to life. At MEG, we work with various local businesses as well as the university itself to create positive change that our members can see from their own backyard. Discover our past projects with the University and see how you can help your school become a better place.
        </BodyText>
      </TextContainer>
    </SectionContainer>
  );
}

export default UmichSection;
