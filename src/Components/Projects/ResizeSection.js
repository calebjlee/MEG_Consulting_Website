import styled from "styled-components";
import {MdCropRotate} from "react-icons/md";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
  @media (min-aspect-ratio: 1233/870) {
    display:none;
  }
`;

const TextContainer = styled.div`
  max-width:80vw;
  text-align:center;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-width: 80vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: #1e1e1e;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
`;

const IconContainer = styled.div`
  padding:10vw;
  font-size:10vw;
`

const BodyText = styled.p`
  display: inline-block;
  font-size: 4vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
`;

function ResizeSection() {
  return (
    <SectionContainer>
      <TextContainer>
        <TitleText>Oops! We noticed you might be in portrait mode</TitleText>
        <IconContainer>
          <MdCropRotate/>
        </IconContainer>
        <TitleText>Rotate or resize your screen to see our projects!</TitleText>
        <SmallSpacer/>
        <BodyText>(You might have to scroll after you resize)</BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default ResizeSection;