import styled from "styled-components";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #faccc7;
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

const TextContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
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

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
`;

function ProfessionalSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={1700} color="black" />
      <TextContainer>
        <TitleText>COMPREHENSIVE PROFESSIONAL DEVELOPMENT</TitleText>
        <SmallSpacer />
        <BodyText>
        At MEG we want to help our members get to pursue their dreams and get into the position they want to be in. Our professional development sessions, open to all members, helps our members learn key business skills applicable to many fields. Our mentor problem assigns new members an upperclassman to help guide them through the complicated recruitment process. Lastly, our projects have a strong focus on real world frameworks that you’ll see in the professional world.
        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default ProfessionalSection;
