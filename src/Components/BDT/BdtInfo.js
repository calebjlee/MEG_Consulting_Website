import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #f3e7db;
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

function BdtInfo() {
  return (
    <SectionContainer>
      <TextContainer>
        <TitleText>MEG BUSINESS DESIGN AND TECHNOLOGY</TitleText>
        <SmallSpacer />
        <BodyText>
          At the website team on MEG Consulting we are looking for exceptional designers and programmers to continue to create the website you are looking at right now! This website was 100% member made and we hope to keep it that way for years to come. So if you have an eye for design, a passion for coding, or are just plain old curious as to how a website is made, consider joining today! <br/><br/> Also if you see any visual bugs anywhere on the website or bad syntax in the source code please reach out to gengb@umich.edu
        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default BdtInfo;
