import styled from "styled-components";
import { keyframes } from "styled-components";
import contour from "../../Images/Client/contour.png";


const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #E6ECEF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  background-image: url(${contour});
  background-position:0 99%;
  background-size:cover;
`;

const TitleText = styled.h1`
  font-size: 6vmax;
  font-family: futura-pt, sans-serif;
  margin:10vw;
  color: white;
  font-weight: 700;
`;

const Spacer = styled.div`
  width: 100%;
  height: 10vh;
`;

function ClientProjectHome() {
  return (
    <SectionContainer>
      <TitleText>Project Showcase:<br/> An Exploration of Our Past Solutions </TitleText>
      <Spacer/>
    </SectionContainer>
  );
}

export default ClientProjectHome;
