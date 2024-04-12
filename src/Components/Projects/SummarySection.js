import styled from "styled-components";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #E0CFF2;
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
  -webkit-text-stroke: 0.03em #1e1e1e;
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

function SummarySection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={600} color="black"></NextSection>
      <TextContainer>
        <TitleText>FIND THE</TitleText>
        <br />
        <TitleText>
          <span style={{ color: "transparent" }}> HIDDEN</span> INSIGHTS
        </TitleText>
        <SmallSpacer />
        <BodyText>
          {" "}
          Good solutions take all the information given and provide useful analysis. Great solutions go deeper into the issue at hand, they explore the overlooked facets of a business, and they create analysis that will make the client say “Oh, I’ve never thought of that before!” At MEG, we strive to create the best solutions for our clients. Consequently, our frameworks are designed to dig deeper and uncover all the hidden insights required to create solutions that stand out.        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default SummarySection;
