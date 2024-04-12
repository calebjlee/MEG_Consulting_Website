import { keyframes} from "styled-components";
import styled from "styled-components";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #CBAFE9;
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
  display: inline-block;
  color: #1e1e1e;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: transparent;

`;

const ShiftContainer = styled.div`
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    position: relative;
`

const Shift = keyframes`
 0% { transform: translateY(-100%) }
 80% { transform: translateY(-100%) }
 85% { transform: translateY(0) }
 95% { transform: translateY(0) }
 100% { transform: translateY(100%) }
`

const ShiftSpan = styled.span`
    display: inline-block;
    animation: ${Shift} 10s linear infinite;
    position: absolute;
    left: 0;
    bottom:0;
`

function TipIntroSection(){
    return(
        <SectionContainer>
            <NextSection ScrollNext = {150} ScrollAlready = {450}/>
            <TextContainer>
                <TitleText>We get it, </TitleText> <br/>
                    <TitleText>Recruiting can be&nbsp;
                        <ShiftContainer>
                            <ShiftSpan style={{position:"relative"}}>confusing.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ShiftSpan>
                            <ShiftSpan style={{animationDelay:"-2s"}}>intimidating.</ShiftSpan>
                            <ShiftSpan style={{animationDelay:"-4s"}}>hard.</ShiftSpan>
                            <ShiftSpan style={{animationDelay:"-6s"}}>demanding.</ShiftSpan>
                            <ShiftSpan style={{animationDelay:"-8s"}}>complex.</ShiftSpan>
                        </ShiftContainer>
                    </TitleText>
                <TitleText style={{color: "#1e1e1e"}}>It doesn't have to be.</TitleText>
            </TextContainer>
            <Spacer/>
        </SectionContainer>
    )
}

export default TipIntroSection;