import { BsDiagram3, BsTable } from "react-icons/bs";
import {IoFootstepsOutline} from "react-icons/io5"
import {FaDiceFive} from "react-icons/fa"
import contour from "../../Images/Client/contour.jpg"
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color:white;
    height:100vh;
    flex-wrap:wrap;
`

const MenuContainer = styled.div`
    width:50%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: space-between;
    flex-wrap: wrap;
    border: solid 2px;
    margin-top:15vh;
    margin-bottom: 10vh;
    border-radius: 20px;
    @media (max-aspect-ratio: 1315/1044) {
        width: 80%;
        height: 40vh;
        flex-wrap: wrap;
        margin-bottom:0vh;
    }
    @media (max-aspect-ratio: 805/1044) {
        width: 80%;
        height: 80vh;
        margin:0;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 20vw;
    flex-direction: column;
    align-self: center;
    @media (max-aspect-ratio: 1315/1044) {
        width: 15vw;
        height: 30vh;
        transform: translateY(-10%);
    }
    @media (max-aspect-ratio: 805/1044) {
        width: 50vw;
        height: 20vh;
        margin:0;
    }
`

const IconContainer = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px;
    font-size: 30px;
`
const TitleText = styled.h2`
  font-size: 3vmax;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 700;
  margin:0;
  padding:1%;
  transform: translateY(-50%);
  background-color: white;
  margin-left: 5%;
`

const ToProjectTitleText = styled.h2`
    font-size: 4vmax;
    font-family: futura-pt, sans-serif;
    color: white;
    font-weight: 700;
    margin: 10%;
    color: black;
    padding: 2.5%;
    border-radius: 25px;
    background-color: rgba(255,255,255,.8);
`

const CardHeader = styled.h3`
  font-size: 1.3vmax;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 700;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 0;
  margin-left: 10%;
  margin-right: 10%;
`

const CardBody = styled.p`
  font-size: 1vmax;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 400;
  text-align: center;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
`

const ToProjectContainer = styled.div`
    height: 70vh;
    margin-top:5vh;
    margin-left: 5vw;
    width: 30%;
    border-radius: 20px;
    background-image: url(${contour});
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-aspect-ratio: 1315/1044) {
        width: 80%;
        height: 30vh;
        margin:0;
    }
    @media (max-aspect-ratio: 805/1044) {
        display: none;
    }
`

const NewLine = styled.div`
    width:100%;
`

function FrameworkSection (){
    return(
        <SectionContainer>
            <MenuContainer>
                <TitleText>Our Frameworks</TitleText>
                <NewLine/>
                <CardContainer>
                    <IconContainer>
                        <BsDiagram3/>
                    </IconContainer>
                    <CardHeader>Multichannel Marketing</CardHeader>
                    <CardBody>
                        Your customers are everywhere, you should be too.
                    </CardBody>
                </CardContainer>

                <CardContainer>
                    <IconContainer>
                        <BsTable/>
                    </IconContainer>
                    <CardHeader>BCG Growth Matrix</CardHeader>
                    <CardBody>
                        Portfolio management to identify your priorities.
                    </CardBody>
                </CardContainer>

                <CardContainer>
                    <IconContainer>
                        <IoFootstepsOutline/>
                    </IconContainer>
                    <CardHeader>McKinsey 7 Steps </CardHeader>
                    <CardBody>
                        Comprehensive problem solving for the fullest solution
                    </CardBody>
                </CardContainer>

                <CardContainer>
                    <IconContainer>
                        <FaDiceFive/>
                    </IconContainer>
                    <CardHeader>The 5 Whys </CardHeader>
                    <CardBody>
                        Getting down to the root of the issue
                    </CardBody>
                </CardContainer>
            </MenuContainer>
                <ToProjectContainer>
                    <Link to = "/client-projects" style = {{textDecoration: "none"}}>
                        <ToProjectTitleText>
                            <u>Project Showcase </u><br/>
                            <span style={{fontSize: "3vmax", fontWeight:"500", lineHeight:"1"}}>
                                Click to See Some of Our Best Work
                            </span>
                        </ToProjectTitleText>
                    </Link>
                </ToProjectContainer>
        </SectionContainer>
    )
}

export default FrameworkSection;