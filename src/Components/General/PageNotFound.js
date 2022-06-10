import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dbbdd3;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  max-width: 100%;
`;

const TextContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
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

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
`;

const LineBreak = styled.div`
    width: 100%;
`

function PageNotFound() {
    return (
      <SectionContainer>
        <TextContainer>
          <TitleText>ERROR 404</TitleText>
          <LineBreak/>
          <TitleText><span style={{fontSize: "5vmin"}}> Aw Schucks! We can't find what your looking for... </span></TitleText>
          <SmallSpacer/>
          <BodyText>
              Luckily we don't have too many pages! Are you looking for any of these pages: <Link to="/about" >About Us</Link>, <Link to="/team" >Our Team</Link>, <Link to="/projects" >Projects</Link>, <Link to="/application" >Application</Link>, <Link to="/" >Home</Link>?
          </BodyText>
        </TextContainer>
      </SectionContainer>
    );
}

export default PageNotFound;