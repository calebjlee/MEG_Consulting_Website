import styled from "styled-components";
import bulb from "../../Images/Projects/bulb.jpg";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #D6F4FF;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: -1px;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${bulb});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 55%;
  position: relative;
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #D9D9FF;
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

function BusinessSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={900} color="black"/>
      <TextContainer>
        <TitleText>EXPLORE YOUR</TitleText>
        <br />
        <TitleText>BUSINESS POTENTIAL</TitleText>
        <SmallSpacer />
        <BodyText>
        Whether you have years of business experience or have never heard of consulting before we strive to expand your capabilities in the consulting field. From understanding earning reports to creating marketing schemes to exploring the supply chain, our projects spread across a wide variety of industries. We help you establish the fundamentals of business and delve into the specifics that you’re interested in.
        </BodyText>
      </TextContainer>
      <ImageContainer />
    </SectionContainer>
  );
}

export default BusinessSection;
