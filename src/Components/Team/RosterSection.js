import styled from "styled-components";
import { useState } from "react";

import brandon0 from "../../Images/Team/headshots/brandon0.png"
import brandon1 from "../../Images/Team/headshots/brandon1.png"
import vinnie0 from "../../Images/Team/headshots/vinnie0.png"
import vinnie1 from "../../Images/Team/headshots/vinnie1.png"
import benny0 from "../../Images/Team/headshots/benny0.png"
import benny1 from "../../Images/Team/headshots/benny1.png"
import pri0 from "../../Images/Team/headshots/pri0.png"
import pri1 from "../../Images/Team/headshots/pri1.png"
import rachelle0 from "../../Images/Team/headshots/rachelle0.png"
import rachelle1 from "../../Images/Team/headshots/rachelle1.png"
import lizzy0 from '../../Images/Team/headshots/lizzy0.png'
import lizzy1 from '../../Images/Team/headshots/lizzy1.png'
import ben0 from '../../Images/Team/headshots/ben0.png'
import ben1 from '../../Images/Team/headshots/ben1.png'
import hana0 from '../../Images/Team/headshots/hana0.png'
import hana1 from '../../Images/Team/headshots/hana1.png'
import kate0 from '../../Images/Team/headshots/kate0.png'
import kate1 from '../../Images/Team/headshots/kate1.png'
import brianna0 from '../../Images/Team/headshots/bri0.png'
import brianna1 from '../../Images/Team/headshots/bri1.png'
import alejandro0 from '../../Images/Team/headshots/alejandro0.png'
import caden0 from '../../Images/Team/headshots/caden0.png'
import anthony0 from '../../Images/Team/headshots/anthony0.png'
import genta0 from '../../Images/Team/headshots/genta0.png'
import ragini0 from '../../Images/Team/headshots/ragini0.png'
import jackie0 from '../../Images/Team/headshots/jackie0.png'
import tylan0 from '../../Images/Team/headshots/tylan0.png'
import alejandro1 from '../../Images/Team/headshots/alejandro1.png'
import caden1 from '../../Images/Team/headshots/caden1.png'
import anthony1 from '../../Images/Team/headshots/anthony1.png'
import genta1 from '../../Images/Team/headshots/genta1.png'
import ragini1 from '../../Images/Team/headshots/ragini1.png'
import jackie1 from '../../Images/Team/headshots/jackie1.png'
import tylan1 from '../../Images/Team/headshots/tylan1.png'
import dylan1 from '../../Images/Team/headshots/dylan1.png'
import anish1 from '../../Images/Team/headshots/anish1.png'
import maxym1 from '../../Images/Team/headshots/maxym1.png'
import jack1 from '../../Images/Team/headshots/jack1.png'
import dylan0 from '../../Images/Team/headshots/dylan0.png'
import anish0 from '../../Images/Team/headshots/anish0.png'
import maxym0 from '../../Images/Team/headshots/maxym0.png'
import jack0 from '../../Images/Team/headshots/jack0.png'


const SectionContainer = styled.div`
  width: 100vw;
  height: fit-content;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const PositionContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  flex-wrap: wrap;
`

const CardContainer = styled.div`
    height: 60vmin;
    width: 40vmin;
    padding: 2vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
`

const CardImage = styled.div`
    background-image: url(${brandon0});
    width: 36vmin;
    height: 44vmin;
    background-size: cover;
`

const CardImageHover = styled.div`
    background-image: url(${brandon1});
    width: 36vmin;
    height: 44vmin;
    background-size: cover;
    transition: opacity 0.5s;
    margin-bottom: -100%;
    transform: translateY(-100%);
`

const NewLine = styled.div`
    width: 200%;
    height: 0;
`

const TinySpacer = styled.div`
    width:200%;
    height:1vmin;
`

const SmallSpacer = styled.div`
    width:200%;
    height:10vmin;
`

const TextContainer = styled.div`
    width:100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 2vmin;
    padding-right: 2vmin;
`

const TitleText = styled.h1`
  display: inline-block;
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 800;
  text-align: left;
  color: #1e1e1e;
`

const CardTitle = styled.h1`
  display: inline-block;
  font-size: 3vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  color: #1e1e1e;
`

const CardHeader = styled.h2`
  display: inline-block;
  font-size: 2.5vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-align: left;
  color: #4d4d4d;
`

const test = ({data}) => (
    <h1>{data.name}</h1>
);

function RosterSection (){

    const [hoverID2, setHoverID2] = useState(0);

    const eboardData = [
        {
            name: "Vincent Larson",
            image0: vinnie0,
            image1: vinnie1,
            position: "President",
            ID: 1
        },
        {
            name: "Benny Shaevsky",
            image0: benny0,
            image1: benny1,
            position: "VP of Client Acquisition",
            ID: 2
        },
        {
            name: "Priyanka Madhavan",
            image0: pri0,
            image1: pri1,
            position: "VP of Recruitment",
            ID: 3
        },
        {name: 'Rachelle Deng', image0: rachelle0, image1: rachelle1, position: 'VP of Operations & Finance', ID: 4},
        {
            name: "Brandon Geng",
            image0: brandon0,
            image1: brandon1,
            position: "VP of Community Engagement",
            ID: 7
        }
    ]

    const seniorData = [
        {name: 'Lizzy Lu', image0: lizzy0, image1: lizzy1, position: 'Senior Advisor', ID: 8},
        {name: 'Ben Millen', image0: ben0, image1: ben1, position: 'Senior Advisor', ID: 9},
        {name: 'Hana Yu', image0: hana0, image1: hana1, position: 'Senior Advisor', ID: 10},
        {name: 'Kate Miele ', image0: kate0, image1: kate1, position: 'Senior Advisor', ID: 11},
        {name: 'Brianna Patel', image0: brianna0, image1: brianna1, position: 'Senior Advisor', ID: 12}
    ]

    const analystData = [
    {name: 'Alejandro Borrego', image0: alejandro0, image1: alejandro1, position: 'Analyst', ID: 13},
    {name: 'Caden Rubischko', image0: caden0, image1: caden1, position: 'Analyst', ID: 14},
    {name: 'Anthony Remick', image0: anthony0, image1: anthony1, position: 'Analyst', ID: 15},
    {name: 'Genta Gollopeni', image0: genta0, image1: genta1, position: 'Analyst', ID: 16},
    {name: 'Ragini Chaudhari', image0: ragini0, image1: ragini1, position: 'Analyst', ID: 17},
    {name: 'Jackie Newman', image0: jackie0, image1: jackie1, position: 'Analyst', ID: 18},
    {name: 'Tylan Porterfield', image0: tylan0, image1: tylan1, position: 'Analyst', ID: 19}]

    const managerData = [{name: 'Dylan Roussel', image0: dylan0, image1: dylan1, position: 'Project Manager', ID: 20},
    {name: 'Anish Vankayalapati', image0: anish0, image1: anish1, position: 'Project Manager', ID: 21},
    {name: 'Maxym Wolberg', image0: maxym0, image1: maxym1, position: 'Project Manager', ID: 22},
    {name: 'Jack Watson', image0: jack0, image1: jack1, position: 'Project Manager', ID: 23},]

    return(
        <SectionContainer>
            <PositionContainer>
            <SmallSpacer/>
            <TextContainer>
                <TitleText style={{marginLeft: "2vmin"}}>Executive Board</TitleText>
            </TextContainer>
            <NewLine/>
                {eboardData.map((data) => (
                    <CardContainer >
                        <CardImage style={{backgroundImage: `url(${data.image0})`}} />
                        <CardImageHover onMouseEnter={()=>setHoverID2(data.ID)} onMouseLeave={()=>setHoverID2(0)} style={{opacity: hoverID2 === data.ID ? "100%":"0%", backgroundImage: `url(${data.image1})`}}/>
                        <NewLine/>
                        <TextContainer>
                            <CardTitle>{data.name}</CardTitle>
                            <TinySpacer/>
                            <CardHeader>{data.position}</CardHeader>
                        </TextContainer>
                    </CardContainer>
                ))}
            </PositionContainer>
            <PositionContainer>
            <SmallSpacer/>
            <TextContainer>
                <TitleText style={{marginLeft: "2vmin"}}>Senior Advisors</TitleText>
            </TextContainer>
            <NewLine/>
            {seniorData.map((data) => (
                <CardContainer >
                    <CardImage style={{backgroundImage: `url(${data.image0})`}} />
                    <CardImageHover onMouseEnter={()=>setHoverID2(data.ID)} onMouseLeave={()=>setHoverID2(0)} style={{opacity: hoverID2 === data.ID ? "100%":"0%", backgroundImage: `url(${data.image1})`}}/>
                    <NewLine/>
                    <TextContainer>
                        <CardTitle>{data.name}</CardTitle>
                        <TinySpacer/>
                        <CardHeader>{data.position}</CardHeader>
                    </TextContainer>
                </CardContainer>
            ))}
            </PositionContainer>
            <PositionContainer>
            <SmallSpacer/>
            <TextContainer>
                <TitleText style={{marginLeft: "2vmin"}}>Project Managers</TitleText>
            </TextContainer>
            <NewLine/>
            {managerData.map((data) => (
                <CardContainer >
                    <CardImage style={{backgroundImage: `url(${data.image0})`}} />
                    <CardImageHover onMouseEnter={()=>setHoverID2(data.ID)} onMouseLeave={()=>setHoverID2(0)} style={{opacity: hoverID2 === data.ID ? "100%":"0%", backgroundImage: `url(${data.image1})`}}/>
                    <NewLine/>
                    <TextContainer>
                        <CardTitle>{data.name}</CardTitle>
                        <TinySpacer/>
                        <CardHeader>{data.position}</CardHeader>
                    </TextContainer>
                </CardContainer>
            ))}
            </PositionContainer>
            <PositionContainer>
            <SmallSpacer/>
            <TextContainer>
                <TitleText style={{marginLeft: "2vmin"}}>Business Analysts</TitleText>
            </TextContainer>
            <NewLine/>
            {analystData.map((data) => (
                <CardContainer >
                    <CardImage style={{backgroundImage: `url(${data.image0})`}} />
                    <CardImageHover onMouseEnter={()=>setHoverID2(data.ID)} onMouseLeave={()=>setHoverID2(0)} style={{opacity: hoverID2 === data.ID ? "100%":"0%", backgroundImage: `url(${data.image1})`}}/>
                    <NewLine/>
                    <TextContainer>
                        <CardTitle>{data.name}</CardTitle>
                        <TinySpacer/>
                        <CardHeader>{data.position}</CardHeader>
                    </TextContainer>
                </CardContainer>
            ))}
            </PositionContainer>
        </SectionContainer>
    );
}

export default RosterSection;