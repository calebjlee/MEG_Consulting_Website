import styled from "styled-components";
import { useState } from "react";

import brandon0 from "../../Images/Team/headshots/brandon0.png";
import brandon1 from "../../Images/Team/headshots/brandon1.png";
import vinnie0 from "../../Images/Team/headshots/vinnie0.png";
import vinnie1 from "../../Images/Team/headshots/vinnie1.png";
import benny0 from "../../Images/Team/headshots/benny0.png";
import benny1 from "../../Images/Team/headshots/benny1.png";
import pri0 from "../../Images/Team/headshots/pri0.png";
import pri1 from "../../Images/Team/headshots/pri1.png";
import rachelle0 from "../../Images/Team/headshots/rachelle0.png";
import rachelle1 from "../../Images/Team/headshots/rachelle1.png";
import lizzy0 from "../../Images/Team/headshots/lizzy0.png";
import lizzy1 from "../../Images/Team/headshots/lizzy1.png";
import ben0 from "../../Images/Team/headshots/ben0.png";
import ben1 from "../../Images/Team/headshots/ben1.png";
import hana0 from "../../Images/Team/headshots/hana0.png";
import hana1 from "../../Images/Team/headshots/hana1.png";
import kate0 from "../../Images/Team/headshots/kate0.png";
import kate1 from "../../Images/Team/headshots/kate1.png";
import brianna0 from "../../Images/Team/headshots/bri0.png";
import brianna1 from "../../Images/Team/headshots/bri1.png";
import alejandro0 from "../../Images/Team/headshots/alejandro0.png";
import caden0 from "../../Images/Team/headshots/caden0.png";
import anthony0 from "../../Images/Team/headshots/anthony0.png";
import genta0 from "../../Images/Team/headshots/genta0.png";
import ragini0 from "../../Images/Team/headshots/ragini0.png";
import jackie0 from "../../Images/Team/headshots/jackie0.png";
import tylan0 from "../../Images/Team/headshots/tylan0.png";
import alejandro1 from "../../Images/Team/headshots/alejandro1.png";
import caden1 from "../../Images/Team/headshots/caden1.png";
import anthony1 from "../../Images/Team/headshots/anthony1.png";
import genta1 from "../../Images/Team/headshots/genta1.png";
import ragini1 from "../../Images/Team/headshots/ragini1.png";
import jackie1 from "../../Images/Team/headshots/jackie1.png";
import tylan1 from "../../Images/Team/headshots/tylan1.png";
import dylan1 from "../../Images/Team/headshots/dylan1.png";
import anish1 from "../../Images/Team/headshots/anish1.png";
import maxym1 from "../../Images/Team/headshots/maxym1.png";
import jack1 from "../../Images/Team/headshots/jack1.png";
import dylan0 from "../../Images/Team/headshots/dylan0.png";
import anish0 from "../../Images/Team/headshots/anish0.png";
import maxym0 from "../../Images/Team/headshots/maxym0.png";
import jack0 from "../../Images/Team/headshots/jack0.png";
import charlie0 from "../../Images/Team/headshots/charlie0.png";
import charlie1 from "../../Images/Team/headshots/charlie1.png";
import kapil0 from "../../Images/Team/headshots/kapil0.png";
import kapil1 from "../../Images/Team/headshots/kapil1.png";
import manan0 from "../../Images/Team/headshots/manan0.png";
import john0 from "../../Images/Team/headshots/john0.png";
import manan1 from "../../Images/Team/headshots/manan1.png";
import john1 from "../../Images/Team/headshots/john1.png";
import jacob0 from "../../Images/Team/headshots/jacob0.png";
import kiran0 from "../../Images/Team/headshots/kiran0.png";
import carly0 from "../../Images/Team/headshots/carly0.png";
import madelyn0 from "../../Images/Team/headshots/madelyn0.png";
import jacob1 from "../../Images/Team/headshots/jacob1.png";
import kiran1 from "../../Images/Team/headshots/kiran1.png";
import carly1 from "../../Images/Team/headshots/carly1.png";
import madelyn1 from "../../Images/Team/headshots/madelyn1.png";
import lawder0 from "../../Images/Team/headshots/lawder0.png";
import lawder1 from "../../Images/Team/headshots/lawder1.png";
import christine0 from "../../Images/Team/headshots/christine0.png";
import christine1 from "../../Images/Team/headshots/christine1.png";

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
	max-width: 100%;
	transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 1000px);
`;

const PositionContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-content: center;
	position: relative;
	flex-wrap: wrap;
`;

const CardContainer = styled.div`
	height: 60vmin;
	width: 40vmin;
	padding: 2vmin;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
`;

const CardImage = styled.div`
	background-image: url(${brandon0});
	width: 36vmin;
	height: 44vmin;
	background-size: cover;
`;

const CardImageHover = styled.div`
	background-image: url(${brandon1});
	width: 36vmin;
	height: 44vmin;
	background-size: cover;
	transition: opacity 0.5s;
	margin-bottom: -100%;
	transform: translateY(-100%);
`;

const NewLine = styled.div`
	width: 200%;
	height: 0;
`;

const TinySpacer = styled.div`
	width: 200%;
	height: 1vmin;
`;

const SmallSpacer = styled.div`
	width: 200%;
	height: 10vmin;
`;

const TextContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding-left: 2vmin;
	padding-right: 2vmin;
`;

const TitleText = styled.h1`
	display: inline-block;
	font-size: 6vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 800;
	text-align: left;
	color: #1e1e1e;
`;

const CardTitle = styled.h1`
	display: inline-block;
	font-size: 3vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 700;
	text-align: left;
	color: #1e1e1e;
`;

const CardHeader = styled.h2`
	display: inline-block;
	font-size: 2.5vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 600;
	text-align: left;
	color: #4d4d4d;
`;

function RosterSection() {
	const [hoverID2, setHoverID2] = useState(0);

	const eboardData = [
		{
			name: "Priyanka Madhavan",
			image0: pri0,
			image1: pri1,
			position: "VP of Recruitment",
			ID: 3,
			url: "https://www.linkedin.com/in/primadhavan/",
		},
		{
			name: "Charlie Schuetze",
			image0: charlie0,
			image1: charlie1,
			position: "VP of Internal Development",
			ID: 5,
			url: "https://linkedin.com/in/charlie-schuetze",
		},
		{
			name: "Kiran Sequeira",
			image0: kiran0,
			image1: kiran1,
			position: "VP of Operations",
			ID: 29,
			url: "https://www.linkedin.com/in/kiran-sequeira",
		},
		{
			name: "Ragini Chaudhari",
			image0: ragini0,
			image1: ragini1,
			position: "VP of Community Engagement",
			ID: 17,
			url: "https://www.linkedin.com/in/ragini-chaudhari-178369191/",
		},
		{
			name: "Anish Vankayalapati",
			image0: anish0,
			image1: anish1,
			position: "VP of External",
			ID: 21,
			url: "https://linkedin.com/in/anish-vankayalapati-6b4914223",
		},
	];

	const seniorData = [
		{
			name: "Brandon Geng",
			image0: brandon0,
			image1: brandon1,
			position: "Senior Advisor",
			ID: 7,
			url: "https://www.linkedin.com/in/brandon-geng-5b99241b6/",
		},
		{
			name: "Jacob Blumenstein",
			image0: jacob0,
			image1: jacob1,
			position: "Senior Advisor",
			ID: 30,
			url: "https://www.linkedin.com/in/jacobblumenstein/",
		},
		{
			name: "Rachelle Deng",
			image0: rachelle0,
			image1: rachelle1,
			position: "Senior Advisor",
			ID: 4,
			url: "https://www.linkedin.com/in/rachelle-deng-4a7203202/",
		},
		{
			name: "Vincent Larsson",
			image0: vinnie0,
			image1: vinnie1,
			position: "Senior Advisor",
			ID: 1,
			url: "https://www.linkedin.com/in/vinnielarsson",
		},
		{
			name: "Benny Shaevsky",
			image0: benny0,
			image1: benny1,
			position: "Senior Advisor",
			ID: 2,
			url: "https://www.linkedin.com/in/benny-shaevsky",
		},
		{
			name: "Lizzy Lu",
			image0: lizzy0,
			image1: lizzy1,
			position: "Senior Advisor",
			ID: 8,
			url: "https://www.linkedin.com/in/elizabeth-lu/",
		},
		{
			name: "Ben Millen",
			image0: ben0,
			image1: ben1,
			position: "Senior Advisor",
			ID: 9,
			url: "https://www.linkedin.com/in/benjmillen",
		},
		{
			name: "Hana Yu",
			image0: hana0,
			image1: hana1,
			position: "Senior Advisor",
			ID: 10,
			url: "https://www.linkedin.com/in/hanayu2001/",
		},
		{
			name: "Kate Miele ",
			image0: kate0,
			image1: kate1,
			position: "Senior Advisor",
			ID: 11,
			url: "https://www.linkedin.com/in/kate-miele-320",
		},
		{
			name: "Jackie Newman",
			image0: jackie0,
			image1: jackie1,
			position: "Analyst",
			ID: 18,
			url: "https://www.linkedin.com/in/newman-jacqueline/",
		},
		{
			name: "Brianna Patel",
			image0: brianna0,
			image1: brianna1,
			position: "Senior Advisor",
			ID: 12,
			url: "https://www.linkedin.com/in/brianna-patel/",
		},
		{
			name: "Carly May",
			image0: carly0,
			image1: carly1,
			position: "Senior Advisor",
			ID: 27,
			url: "https://www.linkedin.com/in/carly-may-b33792194",
		},
		{
			name: "Madelyn Woodrow",
			image0: madelyn0,
			image1: madelyn1,
			position: "Senior Advisor",
			ID: 28,
			url: "https://www.linkedin.com/in/madelyn-woodrow-1446661a0",
		},
		{
			name: "Christine Yan",
			image0: christine0,
			image1: christine1,
			position: "Senior Advisor",
			ID: 32,
			url: "https://www.linkedin.com/in/christineyan-915",
		},
	];

	const analystData = [
		{
			name: "Alejandro Borrego",
			image0: alejandro0,
			image1: alejandro1,
			position: "Analyst",
			ID: 13,
			url: "https://www.linkedin.com/in/alejandro-borrego-8329671b1",
		},
		{
			name: "Caden Rubischko",
			image0: caden0,
			image1: caden1,
			position: "Analyst",
			ID: 14,
			url: "https://www.linkedin.com/in/caden-rubischko-7a3a08206/",
		},
		{
			name: "Anthony Remick",
			image0: anthony0,
			image1: anthony1,
			position: "Analyst",
			ID: 15,
			url: "https://www.linkedin.com/in/anthony-remick",
		},
		{
			name: "Genta Gollopeni",
			image0: genta0,
			image1: genta1,
			position: "Analyst",
			ID: 16,
			url: "https://www.linkedin.com/in/gentagollopeni",
		},
		{
			name: "Tylan Porterfield",
			image0: tylan0,
			image1: tylan1,
			position: "Analyst",
			ID: 19,
			url: "https://www.linkedin.com/mwlite/in/tylan-porterfield-780a221bb",
		},
		{
			name: "Jack Watson",
			image0: jack0,
			image1: jack1,
			position: "Analyst",
			ID: 23,
			url: "https://www.linkedin.com/in/jack-m-watson/",
		},
		{
			name: "Manan Jain",
			image0: manan0,
			image1: manan1,
			position: "Analyst",
			ID: 25,
			url: "https://www.linkedin.com/in/manan-jain1803/",
		},
		{
			name: "John Zhou",
			image0: john0,
			image1: john1,
			position: "Analyst",
			ID: 26,
			url: "https://www.linkedin.com/in/john-zhou-45a878166/",
		},
		{
			name: "Dylan Roussel",
			image0: dylan0,
			image1: dylan1,
			position: "Analyst",
			ID: 20,
			url: "https://www.linkedin.com/in/dylan-roussel-4a79891b4/",
		},
		{
			name: "Maxym Wolberg",
			image0: maxym0,
			image1: maxym1,
			position: "Analyst",
			ID: 22,
			url: "https://www.linkedin.com/in/maxymw/",
		},
		{
			name: "Kapil Pownikar",
			image0: kapil0,
			image1: kapil1,
			position: "Analyst",
			ID: 24,
			url: "https://www.linkedin.com/in/kapil-pownikar",
		},
		{
			name: "Lawder Desantis",
			image0: lawder0,
			image1: lawder1,
			position: "Analyst",
			ID: 31,
			url: "https://www.linkedin.com/in/lawder-desantis-50a733232",
		},
	];

	const managerData = [];

	return (
		<SectionContainer>
			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Executive Board
					</TitleText>
				</TextContainer>
				<NewLine />
				{eboardData.map((data) => (
					<a
						href={data.url}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{
									backgroundImage: `url(${data.image0})`,
								}}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity:
										hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>{data.position}</CardHeader>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Senior Advisors
					</TitleText>
				</TextContainer>
				<NewLine />
				{seniorData.map((data) => (
					<a
						href={data.url}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{
									backgroundImage: `url(${data.image0})`,
								}}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity:
										hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>{data.position}</CardHeader>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
			{/*<PositionContainer>
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
            </PositionContainer>*/}
			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Business Analysts
					</TitleText>
				</TextContainer>
				<NewLine />
				{analystData.map((data) => (
					<a
						href={data.url}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{
									backgroundImage: `url(${data.image0})`,
								}}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity:
										hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>{data.position}</CardHeader>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
		</SectionContainer>
	);
}

export default RosterSection;
