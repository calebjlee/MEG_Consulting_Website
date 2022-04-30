import styled from "styled-components";

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
      <TextContainer>
        <TitleText>FIND THE</TitleText>
        <br />
        <TitleText>
          <span style={{ color: "transparent" }}> HIDDEN</span> INSIGHTS
        </TitleText>
        <SmallSpacer />
        <BodyText>
          {" "}
          The best method for accelerating a computer is the one that boosts it
          by 9.8 m/s2. (Anonymous) If debugging is the process of removing bugs,
          then programming must be the process of putting them in. (Edsger W.
          Dijkstra) It is not about bits, bytes and protocols, but profits,
          losses and margins. (Lou Gerstner) Computers are like bikinis. They
          save people a lot of guesswork. (Sam Ewing) It’s not a bug – it’s an
          undocumented feature. (Anonymous)
        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default SummarySection;
