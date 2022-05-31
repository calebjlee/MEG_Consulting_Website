import styled from "styled-components";
import NextSection from "../../Components/General/NextSection.js";

{/*First Text Section*/}

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
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: transparent;
`;

const TitleTextBold = styled.h1`
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

function DifferentSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={500} color="black" />
      <TextContainer>
        <TitleText>ELITE CONSULTING WITH A TWIST:</TitleText>
        <TitleTextBold>PEOPLE COME FIRST</TitleTextBold>
        <SmallSpacer />
        <BodyText>
          MEG Consulting is a pro-bono consulting group at the University of
          Michigan. From local startups to million dollar companies, members
          have the opportunity to provide the solutions for real world problems.
          At our core, we believe in treating our people with kindness and
          respect. From the executive board to our applicants, we strive to
          create an environment where everyone can learn and grow. We see our
          people as not only business professionals but also as our mentors,
          teachers, peers, and most importantly, friends.
        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default DifferentSection;
