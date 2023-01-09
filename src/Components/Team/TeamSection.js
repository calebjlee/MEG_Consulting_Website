import styled from "styled-components";
import team from "../../Images/Team/team.jpg";
import alejandro from "../../Images/Team/shadows/alejandro.png";
import anish from "../../Images/Team/shadows/anish.png";
import anthony from "../../Images/Team/shadows/anthony.png";
import ashley from "../../Images/Team/shadows/ashley.png";
import benny from "../../Images/Team/shadows/benny.png";
import brandon from "../../Images/Team/shadows/brandon.png";
import caden from "../../Images/Team/shadows/caden.png";
import charlie from "../../Images/Team/shadows/charlie.png";
import dylan from "../../Images/Team/shadows/dylan.png";
import jacob from "../../Images/Team/shadows/jacob.png";
import kapil from "../../Images/Team/shadows/kapil.png";
import kiran from "../../Images/Team/shadows/kiran.png";
import lizzy from "../../Images/Team/shadows/lizzy.png";
import manan from "../../Images/Team/shadows/manan.png";
import meghna from "../../Images/Team/shadows/meghna.png";
import nakul from "../../Images/Team/shadows/nakul.png";
import pri from "../../Images/Team/shadows/pri.png";
import rachelle from "../../Images/Team/shadows/rachelle.png";
import ragini from "../../Images/Team/shadows/ragini.png";
import shub from "../../Images/Team/shadows/shub.png";
import vinnie from "../../Images/Team/shadows/vinnie.png";
import zevik from "../../Images/Team/shadows/zevik.png";
import andrew from "../../Images/Team/shadows/andrew.png";

import React, { useState } from "react";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
	width: 100vw;
	height: 150vh;
	background-color: #d0d1f2;
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	position: sticky;
	top: -1px;
	max-width: 100%;
	overflow: hidden;
	flex-wrap: wrap;
`;

const TeamContainer = styled.div`
	position: relative;
	margin-bottom: 50vh;
	overflow: hidden;
	@media (max-aspect-ratio: 1233/870) {
		margin-bottom: 5vh;
		margin-top: 40vh;
	}
`;

const TeamImage = styled.img`
	width: 55vw;
	@media (max-aspect-ratio: 1233/870) {
		width: 50vw;
	}
	@media (max-aspect-ratio: 850/870) {
		width: 80vw;
	}
`;

const SvgDesktop = styled.div`
	@media (max-aspect-ratio: 1233/870) {
		display: none;
	}
	@media (max-aspect-ratio: 850/870) {
		display: none;
	}
`;

const SvgTablet = styled.div`
	display: none;
	@media (max-aspect-ratio: 1233/870) {
		display: inline-block;
	}
	@media (max-aspect-ratio: 850/870) {
		display: none;
	}
`;

const SvgPhone = styled.div`
	display: none;
	@media (max-aspect-ratio: 1233/870) {
		display: none;
	}
	@media (max-aspect-ratio: 850/870) {
		display: inline-block;
	}
`;

const ShadowContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity 0.25s;
`;

const HoverContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const TextContainer = styled.div`
	width: 30vw;
	height: 80vh;
	margin-bottom: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
	@media (max-aspect-ratio: 1233/870) {
		align-content: flex-start;
		width: 80vw;
	}
`;

const TitleText = styled.h1`
	display: inline-block;
	font-size: 6vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 900;
	text-align: left;
	color: #1e1e1e;
	transition: opacity 0.5s;
`;

const BodyText = styled.p`
	display: inline-block;
	font-size: 3.2vmin;
	font-family: futura-pt, Helvetica, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.6;
	width: 100%;
`;

const SmallSpacer = styled.div`
	width: 100%;
	height: 3vh;
`;

function TeamSection() {
	const [hoverID, setHoverID] = useState(0);
	const [hoverID1, setHoverID1] = useState(0);
	const names = [
		"YOU SHOULD NOT BE SEEING THIS",
		"Andrew Zhou",
		"Kapil Pownikar",
		"Ashley Winger",
		"Ragini Chaudhari",
		"Elizabeth Lu",
		"Anish Vankayalapati",
		"Anthony Remick",
		"Manan Jain",
		"Kiran Sequeira",
		"Zevik Citron",
		"Nakul Chadha",
		"Priyanka Madhavan",
		"Vincent Larsson",
		"Jacob Blumenstein",
		"Rachelle Deng",
		"Shubh Yadav",
		"Charlie Schuetze",
		"Dylan Roussel",
		"Meghna Gupta",
		"Caden Rubischko",
		"Brandon Geng",
		"Benny Shaevsky",
		"Alejandro Borrego",
	];
	const majors = [
		"YOU SHOULD NOT BE SEEING THIS",
		"BBA",
		"Economics & Computer Science",
		"BBA",
		"BHS & Economics",
		"Computer Science",
		"BBA and Computer Science",
		"Computer Science",
		"BBA",
		"Computer Science",
		"BBA",
		"BBA",
		"Mechanical Engineering and BBA",
		"Industrial Operations",
		"BBA",
		"BBA",
		"BBA",
		"BBA",
		"BBA",
		"Mechanical Engineering",
		"BBA",
		"BBA and Computer Science",
		"BBA",
		"CS",
	];
	const years = [
		"YOU SHOULD NOT BE SEEING THIS",
		"Sophomore",
		"Sophomore",
		"Junior",
		"Sophomore",
		"Senior",
		"Sophomore",
		"Sophomore",
		"Sophomore",
		"Junior",
		"Sophomore",
		"Graduated",
		"Junior",
		"Senior",
		"Junior",
		"Junior",
		"Sophomore",
		"Junior",
		"Junior",
		"Junior",
		"Junior",
		"Senior",
		"Junior",
		"Junior",
	];
	const abouts = [
		"YOU SHOULD NOT BE SEEING THIS",
		"I like to cook and play ping-pong",
		"I have 5 cats, all are strays :)",
		"I run an Etsy store selling necklaces and bracelets",
		"I love skiing",
		"I enjoy a making good cup of pourover, playing tennis, and meeting new people!",
		"I like to play soccer, basketball, and volleyball",
		"I like Hockey, baseball, skiing",
		"I’ve been scuba diving for the past 7 years and was once chased by a 7-foot fish",
		"In my free time, I love playing the piano or going for walks in the Arb!",
		"In my spare time I like to flip samples and cook up beats in FL Studio",
		"I’m currently working at Morgan Stanley",
		"I love photography and the outdoors!",
		"I love playing hockey, learned from my dad to skate backwards before I could skate forwards",
		"I like writing alternative rock music",
		"I've met 8 Olympic figure skaters!",
		"I Love playing soccer, coin collecting, and photography",
		"I’m a Golf enthusiast, banjo player in training, future pilot and scuba diving connoisseur",
		"Anything outdoors is my hobby, I love to travel and get lost",
		"I like cooking, music, and dogs",
		"I enjoy fishing and hockey",
		"I got Franz Wagner sick once",
		"I have seen Michigan play football in 6 states",
		"I sat in the Stanley Cup as a baby",
	];
	const projects = [
		"YOU SHOULD NOT BE SEEING THIS",
		"Argus Farm Stop",
		"Kaufmann Insurance",
		"Argus Farm Stop",
		"Emagine",
		"MCity, Community Action Network, Freezer Recycling, TREMEC ",
		"Workforce Software, Zoominfo (2)",
		"ZoomInfo (1)",
		"Kaufman Insurance ",
		"Community Action Network, Workforce, ZoomInfo 2",
		"MadDog Ventures, ZoomInfo (1)",
		"Second to None, Give and Take",
		"Academic Innovation, Gritter Real Estate, Zingerman's Service Network",
		"M City, Second to None, Cayman Chemical, HSHV, TREMEC",
		"Workforce, Filson, Cayman Chemicals",
		"Avicenna Healthcare, Hope Clinic",
		"Bouma Real Estate, Kaufman Insurance",
		"Gritter Real Estate, MadDog Ventures, Beer City Dog Biscuits",
		"Argus Farmstop, CAN Group, Exchange Capital Wealth Management",
		"Beer City Dog Biscuits",
		"Emagine",
		"CAN Group, M&B Cupboard, Hope Clinic",
		"Underground Printing, Kaufman (Atain), MadDog Technology",
		"Argus Farm Stop",
	];

	return (
		<SectionContainer>
			<NextSection ScrollNext={151} ScrollAlready={470} color="black" />
			<TeamContainer
				onMouseEnter={() => {
					setHoverID1(1);
				}}
				onMouseLeave={() => {
					setHoverID1(0);
				}}
			>
				<TitleText
					style={{
						position: "absolute",
						bottom: "5vmin",
						left: "center",
						width: "100%",
						textAlign: "center",
						color: "white",
						opacity: hoverID1 ? "0%" : "100%",
						zIndex: "999",
						fontSize: "4vmin",
					}}
				>
					Hover Over to Meet Our Team
				</TitleText>
				<TeamImage src={team}></TeamImage>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 1 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={andrew}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 2 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={kapil}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 3 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={ashley}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 4 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={ragini}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 5 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={lizzy}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 6 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={anish}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 7 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={anthony}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 8 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={manan}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 9 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={kiran}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 10 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={zevik}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 11 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={nakul}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 12 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={pri}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 13 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={vinnie}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 14 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={jacob}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 15 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={rachelle}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 16 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={shub}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 17 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={charlie}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 18 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={dylan}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 19 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={meghna}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 20 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={caden}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 21 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={brandon}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 22 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={benny}></TeamImage>
				</ShadowContainer>
				<ShadowContainer
					style={{
						opacity:
							hoverID === 23 ? "0" : hoverID === 0 ? "0" : "1",
					}}
				>
					<TeamImage src={alejandro}></TeamImage>
				</ShadowContainer>
				<HoverContainer>
					<SvgDesktop>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="55vw"
							viewBox="0 0 1911.000000 1147.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							{/*Andrew */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(1)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M1620 9131 c-128 -35 -204 -89 -297 -212 -64 -84 -76 -125 -68 -241
                4 -69 2 -104 -6 -120 -26 -47 -11 -208 25 -276 23 -43 63 -80 95 -87 29 -6 29
                -6 36 -100 8 -108 1 -178 -21 -196 -8 -7 -21 -27 -29 -45 -13 -32 -62 -83
                -151 -159 -26 -22 -56 -48 -66 -58 -26 -24 -122 -57 -168 -57 -20 0 -41 -5
                -46 -10 -6 -6 -48 -24 -95 -41 -87 -32 -112 -40 -189 -59 -87 -23 -213 -86
                -238 -119 -23 -32 -58 -129 -79 -218 -12 -54 -17 -150 -20 -463 -6 -512 9
                -716 77 -1027 43 -197 80 -250 246 -355 63 -39 120 -78 126 -86 9 -10 2 -32
                -30 -98 -26 -52 -42 -98 -42 -120 0 -60 59 -213 117 -301 74 -114 153 -271
                153 -303 0 -23 77 -190 124 -270 8 -14 55 -99 105 -190 91 -165 180 -280 219
                -280 8 0 23 -7 33 -16 30 -27 39 -9 33 69 -4 49 -1 101 10 160 9 49 16 112 15
                140 -1 29 1 77 5 107 7 62 -3 150 -34 295 -19 87 -21 120 -16 250 3 83 8 166
                11 185 3 19 10 96 15 170 11 141 22 243 39 345 32 193 76 414 86 440 12 29 55
                63 173 133 29 18 58 32 63 32 5 0 17 4 27 9 56 31 139 61 167 61 18 0 39 8 47
                18 30 33 92 167 110 237 9 38 29 113 43 165 17 61 30 143 36 230 5 74 19 178
                29 230 11 52 25 120 30 150 6 31 24 76 40 100 17 25 30 55 30 68 0 12 11 49
                25 82 14 33 25 68 25 79 0 22 -44 61 -69 61 -10 0 -21 4 -26 8 -6 5 -32 17
                -60 27 -27 10 -62 28 -77 41 -15 12 -31 24 -35 26 -4 1 -26 28 -49 58 -35 48
                -42 66 -53 143 -15 99 -15 98 65 192 46 55 114 172 114 198 0 9 11 52 25 94
                14 43 31 93 36 112 11 34 24 258 22 382 -2 126 -91 278 -183 314 -25 10 -61
                30 -80 45 -63 48 -123 63 -260 66 -95 2 -141 -2 -190 -15z"
								/>
								<path
									d="M692 4458 c-11 -24 -47 -92 -81 -153 l-62 -110 1 -100 c1 -55 0 -116
                -2 -135 -3 -34 -1 -36 72 -75 66 -35 76 -44 82 -75 25 -123 42 -224 49 -286 4
                -39 22 -134 40 -210 31 -134 32 -147 34 -369 1 -177 6 -255 21 -340 21 -124
                22 -148 5 -665 -7 -232 -19 -418 -31 -510 -10 -80 -21 -199 -25 -265 -4 -66
                -8 -138 -10 -160 -2 -22 -9 -187 -15 -367 -13 -367 -13 -371 62 -521 5 -10 12
                -41 15 -68 l6 -49 543 0 544 0 1 53 c1 28 3 212 4 407 2 195 7 630 11 965 5
                336 8 630 8 655 0 46 -53 162 -160 351 -24 42 -143 274 -265 515 -122 242
                -266 522 -319 624 -54 102 -170 328 -259 504 -163 320 -222 426 -240 426 -6 0
                -19 -19 -29 -42z"
								/>
							</g>

							{/*Kapil */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(2)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M4724 6955 c-12 -19 -27 -23 -100 -29 -52 -4 -91 -2 -98 3 -7 6 -22
                8 -34 4 -12 -3 -28 0 -35 6 -8 6 -17 8 -21 4 -3 -4 -35 -6 -71 -5 -69 2 -134
                -17 -171 -50 -11 -10 -24 -18 -30 -18 -16 -1 -194 -177 -194 -192 0 -8 -11
                -25 -25 -38 -14 -13 -25 -29 -25 -36 0 -6 -7 -18 -17 -25 -9 -8 -27 -36 -39
                -64 -13 -27 -33 -57 -46 -66 -21 -16 -22 -25 -23 -151 -1 -93 -6 -150 -18
                -188 -9 -30 -17 -82 -19 -114 -3 -58 -2 -60 31 -83 19 -13 46 -23 60 -23 19 0
                32 -9 43 -28 9 -15 44 -58 78 -95 56 -61 65 -67 101 -67 39 0 41 -2 64 -54 27
                -61 25 -114 -7 -155 -10 -13 -18 -27 -18 -32 0 -17 -88 -128 -140 -176 -8 -8
                -53 -37 -100 -65 -46 -27 -97 -60 -112 -73 -42 -35 -287 -152 -381 -182 -133
                -41 -173 -66 -201 -122 -39 -76 -53 -162 -60 -361 -4 -102 -9 -232 -11 -290
                -15 -337 -15 -520 -1 -735 13 -207 18 -239 46 -325 17 -52 42 -138 56 -190 13
                -52 37 -114 52 -138 15 -24 38 -64 52 -88 14 -24 49 -85 79 -135 l54 -92 -12
                -56 c-7 -31 -18 -97 -25 -146 -8 -50 -26 -138 -40 -195 -15 -58 -36 -168 -46
                -245 -11 -77 -29 -167 -40 -200 -11 -33 -45 -145 -76 -250 -57 -197 -65 -222
                -96 -292 -27 -63 -27 -82 3 -105 37 -28 149 -37 168 -14 17 20 37 21 45 1 3
                -8 12 -15 19 -15 11 0 16 -26 21 -112 9 -145 24 -341 33 -441 5 -43 4 -85 0
                -93 -4 -8 -12 -66 -17 -129 -8 -97 -7 -121 6 -155 l16 -40 912 0 912 0 18 118
                c17 120 35 211 62 317 29 115 35 140 45 194 5 30 12 57 14 61 2 3 9 46 15 95
                6 49 16 96 23 104 9 10 12 89 12 281 0 241 2 270 18 287 20 23 22 46 5 72 -15
                24 6 77 77 196 102 171 183 364 200 479 4 27 22 79 40 115 41 83 51 120 70
                255 9 60 20 117 25 127 22 39 1 231 -33 311 -19 46 -34 118 -47 233 -11 104
                -22 162 -46 260 -15 61 -16 80 -4 162 10 74 10 118 0 221 -9 95 -9 156 -1 237
                5 61 13 190 16 287 8 205 -2 277 -43 322 -42 45 -149 110 -357 216 -225 114
                -293 162 -335 234 -16 29 -38 60 -49 70 -11 10 -22 38 -26 67 -4 27 -15 60
                -26 73 -26 33 -25 99 1 136 11 16 27 46 34 68 13 36 43 101 52 111 2 2 10 -2
                18 -8 19 -16 26 -11 62 41 15 24 38 55 50 70 18 22 21 38 19 105 -2 106 32
                267 67 312 14 18 17 33 12 55 -4 17 -6 58 -6 90 2 57 -29 190 -49 211 -5 5 -9
                20 -9 33 0 13 -13 36 -28 50 -61 58 -102 91 -119 96 -10 3 -26 19 -35 36 -12
                21 -25 30 -42 30 -15 0 -27 7 -31 19 -3 10 -27 41 -53 68 -55 60 -95 73 -118
                38z"
								/>
							</g>

							{/* Ashley */}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(3)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6765 6543 c-103 -44 -210 -128 -265 -208 -44 -64 -109 -273 -121
                -390 -6 -55 -14 -118 -19 -141 -24 -105 -40 -468 -26 -575 l8 -66 -93 -45
                c-52 -25 -114 -53 -139 -64 -75 -31 -242 -124 -291 -161 -56 -42 -69 -68 -69
                -131 0 -26 -6 -57 -14 -68 -11 -15 -14 -45 -12 -115 2 -54 -4 -135 -13 -189
                -20 -122 -23 -922 -3 -942 7 -7 12 -24 12 -40 0 -15 7 -52 15 -84 8 -31 17
                -97 21 -148 4 -53 15 -112 27 -141 11 -27 23 -70 28 -95 4 -25 12 -70 17 -101
                6 -34 7 -70 2 -90 -40 -152 -50 -204 -50 -252 0 -50 -23 -134 -53 -192 -11
                -22 -33 -92 -49 -155 -29 -121 -79 -234 -174 -402 -31 -53 -64 -120 -75 -148
                -17 -46 -18 -53 -4 -79 13 -27 13 -31 -8 -57 -22 -28 -22 -33 -19 -288 2 -218
                0 -261 -12 -275 -9 -10 -19 -55 -26 -111 -6 -52 -17 -120 -25 -150 -32 -129
                -55 -236 -55 -252 0 -10 -9 -44 -19 -75 -19 -59 -37 -165 -44 -261 l-4 -52
                1287 0 1287 0 -3 108 c-2 66 3 141 12 197 9 50 20 128 25 175 5 47 14 121 19
                165 6 44 14 145 20 225 13 189 19 256 25 305 3 22 5 43 5 47 0 4 12 29 27 55
                61 110 70 138 77 239 7 98 28 182 70 284 15 36 40 99 56 140 15 41 38 102 50
                135 23 61 59 299 66 430 1 39 6 104 10 145 5 58 1 98 -15 175 -16 79 -22 147
                -25 325 -4 224 -22 376 -51 446 -7 17 -16 49 -19 71 -4 22 -27 68 -51 104 -55
                80 -115 197 -115 224 0 12 -4 25 -9 31 -14 14 -106 280 -126 364 -55 231 -77
                305 -113 376 -22 44 -51 112 -66 153 -24 67 -27 87 -26 205 3 254 -47 714 -97
                896 -14 52 -29 115 -32 140 -8 57 -66 161 -125 227 -52 57 -155 124 -236 151
                -37 13 -98 21 -185 25 -124 6 -133 5 -190 -20z"
								/>
							</g>

							{/*ragini*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(4)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M2758 7581 c-108 -26 -185 -76 -320 -206 -46 -45 -128 -227 -150
                -334 -10 -52 -22 -99 -25 -105 -4 -5 -10 -69 -14 -141 -12 -210 -26 -283 -103
                -538 -45 -153 -71 -201 -111 -205 -17 -2 -43 -9 -60 -16 -16 -8 -57 -26 -90
                -41 -166 -74 -262 -135 -300 -191 -11 -17 -26 -62 -34 -100 -7 -38 -21 -114
                -31 -169 -11 -55 -26 -152 -35 -215 -8 -63 -18 -128 -21 -145 -9 -49 -35 -400
                -41 -552 -5 -141 1 -197 38 -323 15 -49 14 -192 -1 -350 -7 -74 -14 -180 -15
                -235 l-3 -100 86 -175 c48 -96 96 -197 106 -223 21 -55 61 -107 82 -107 22 0
                84 -104 84 -141 0 -21 32 -94 92 -208 131 -253 146 -280 184 -338 19 -28 34
                -55 34 -60 0 -4 24 -45 54 -90 30 -46 72 -120 95 -165 23 -46 63 -119 90 -164
                55 -92 168 -301 292 -539 17 -33 46 -78 63 -100 47 -60 83 -117 91 -145 4 -14
                24 -56 45 -95 21 -38 57 -106 80 -150 85 -162 151 -281 170 -305 16 -21 22
                -23 46 -15 61 22 96 160 74 289 -10 61 -18 81 -37 94 -71 50 -73 52 -63 75 36
                90 77 208 102 297 33 120 36 131 78 260 17 52 35 131 41 175 14 114 37 236 64
                340 13 50 26 119 30 155 3 36 13 88 22 116 21 67 13 102 -43 199 -26 44 -57
                101 -69 126 -13 25 -34 59 -48 75 -29 34 -51 84 -61 135 -3 19 -26 98 -51 174
                -39 119 -47 158 -56 274 -12 164 -12 705 0 816 5 44 12 154 16 245 7 216 22
                317 54 382 31 62 64 83 190 123 105 34 320 134 375 176 61 46 179 119 191 119
                19 0 155 157 171 197 9 21 24 47 34 58 29 33 32 88 8 148 -31 77 -45 89 -89
                82 -34 -6 -39 -3 -82 45 -26 29 -61 74 -78 100 -27 42 -37 49 -74 55 -24 3
                -49 13 -56 21 -8 10 -21 13 -36 9 -27 -6 -101 23 -122 48 -18 23 -40 129 -41
                197 0 30 -11 100 -24 155 -13 55 -27 123 -31 150 -13 91 -54 326 -59 334 -3 4
                -16 57 -30 117 -14 60 -29 126 -34 146 -11 42 -134 273 -162 303 -10 11 -23
                32 -29 47 -7 18 -28 36 -59 52 -27 14 -64 38 -83 53 -18 15 -47 29 -63 30
                -158 12 -175 11 -248 -6z"
								/>
							</g>

							{/*lizzy*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(5)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M3590 8080 c-100 -8 -118 -13 -216 -61 -73 -36 -217 -173 -245 -233
                -10 -22 -34 -62 -53 -87 -42 -57 -54 -110 -33 -142 8 -13 47 -40 86 -61 39
                -20 71 -44 71 -51 0 -8 16 -36 37 -62 46 -61 125 -228 148 -313 10 -36 28
                -105 42 -155 22 -82 36 -159 78 -420 7 -49 21 -120 29 -156 9 -37 20 -109 26
                -160 5 -52 17 -116 26 -142 14 -40 24 -52 68 -77 28 -17 62 -30 76 -30 14 -1
                36 -7 50 -15 28 -16 86 -20 94 -6 14 21 8 179 -8 234 -24 79 -18 190 19 374 3
                11 32 53 65 93 33 39 60 76 60 81 0 25 189 199 216 199 3 0 18 9 34 20 40 28
                43 66 16 183 -31 130 -42 184 -56 277 -6 41 -20 98 -30 125 -70 185 -96 246
                -126 295 -18 30 -36 67 -40 83 -6 26 -56 77 -75 77 -5 0 -43 27 -84 60 -69 54
                -127 82 -165 78 -8 0 -58 -4 -110 -8z"
								/>
							</g>

							{/*anish*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(6)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M5186 7794 c-21 -8 -55 -27 -75 -42 -20 -15 -45 -33 -56 -40 -92 -58
                -114 -76 -125 -103 -7 -17 -34 -48 -59 -69 -72 -61 -84 -109 -77 -296 10 -256
                18 -319 44 -347 13 -13 26 -37 31 -52 5 -19 17 -32 37 -39 17 -6 61 -38 98
                -71 37 -33 79 -66 93 -73 17 -9 23 -20 20 -32 -3 -10 1 -27 8 -37 6 -10 23
                -49 38 -88 21 -57 25 -87 25 -165 -1 -52 -4 -100 -9 -106 -5 -6 -20 -44 -34
                -85 -20 -56 -27 -102 -32 -194 -6 -119 -6 -121 -45 -177 -25 -38 -46 -58 -58
                -58 -22 0 -73 -63 -96 -120 -8 -19 -22 -42 -31 -52 -8 -9 -19 -38 -24 -62 -7
                -40 -5 -52 21 -102 17 -31 30 -68 30 -83 1 -15 24 -58 58 -106 66 -92 156
                -165 272 -222 41 -20 104 -53 140 -74 36 -21 81 -44 100 -50 19 -7 71 -34 116
                -61 100 -59 126 -58 182 10 106 129 231 232 281 232 11 0 22 4 25 9 3 4 25 11
                48 15 26 4 58 20 84 41 23 19 49 35 57 35 8 0 26 11 39 24 24 21 26 31 32 142
                3 65 10 204 16 308 10 173 10 190 -6 207 -9 11 -22 19 -28 19 -22 0 -192 88
                -210 109 -11 12 -35 31 -53 42 -18 11 -54 47 -79 80 -44 57 -92 89 -135 89
                -12 0 -38 26 -70 70 -28 39 -55 70 -59 70 -11 0 -50 126 -50 162 0 17 9 45 19
                62 11 17 27 58 37 91 21 74 40 105 66 105 33 0 75 28 86 57 9 25 26 114 52
                291 5 29 16 64 24 77 9 13 16 33 16 43 0 11 9 31 21 45 26 34 18 86 -22 144
                -16 23 -29 44 -29 48 0 4 -14 26 -31 50 -18 24 -48 77 -68 117 -36 73 -37 73
                -121 116 -46 23 -99 57 -118 75 l-33 32 -172 2 c-128 1 -182 -2 -211 -13z"
								/>
							</g>

							{/*anthony*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(7)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M4285 9156 c-114 -40 -267 -105 -303 -129 -39 -26 -118 -148 -137
                -211 -7 -24 -23 -62 -34 -84 -28 -55 -27 -94 4 -130 17 -21 26 -47 31 -88 3
                -33 13 -70 22 -84 9 -14 19 -41 23 -60 9 -43 50 -143 68 -164 8 -9 25 -22 39
                -29 38 -18 54 -76 50 -178 -2 -66 -7 -92 -20 -106 -25 -27 -22 -51 10 -98 15
                -23 49 -97 76 -165 26 -69 55 -140 62 -158 8 -18 14 -44 14 -59 0 -14 4 -42 9
                -62 5 -20 15 -70 21 -111 20 -131 51 -254 71 -282 10 -15 19 -32 19 -37 0 -26
                48 -32 259 -32 152 -1 225 3 241 11 23 12 23 12 16 194 -9 223 -20 296 -52
                353 -21 35 -25 51 -19 80 4 22 1 63 -8 102 -9 36 -24 102 -34 146 -15 65 -17
                98 -10 175 9 119 50 244 88 271 58 41 114 269 113 465 -1 113 -3 126 -28 175
                -16 30 -45 74 -65 99 -20 25 -48 61 -61 80 -37 55 -60 70 -112 70 -38 0 -54 6
                -82 30 -31 28 -43 31 -118 36 -70 4 -94 1 -153 -20z"
								/>
							</g>

							{/*manan*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(8)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6115 8753 c-65 -14 -246 -77 -277 -96 -40 -24 -133 -124 -165 -178
                -32 -52 -51 -126 -57 -219 -4 -56 -13 -99 -26 -125 -24 -47 -26 -99 -4 -151
                19 -46 98 -150 123 -164 14 -7 20 -25 23 -70 4 -50 9 -65 35 -93 17 -17 47
                -66 68 -107 20 -41 44 -84 54 -95 36 -41 82 -125 88 -159 4 -28 -1 -51 -25
                -99 -32 -66 -69 -231 -79 -349 -7 -77 -25 -108 -66 -108 -35 0 -64 -26 -82
                -73 -19 -50 -8 -118 28 -177 12 -19 42 -82 67 -140 89 -204 172 -346 222 -381
                18 -12 44 -32 58 -45 30 -28 157 -98 223 -125 l48 -19 9 26 c6 14 15 72 21
                128 12 119 69 325 105 379 28 43 127 139 177 172 63 41 127 59 209 57 70 -2
                78 0 89 20 15 28 5 127 -20 182 -20 45 -70 90 -141 126 -60 30 -120 78 -120
                96 0 8 -32 49 -72 92 -39 42 -96 113 -125 157 -30 44 -70 103 -90 130 -34 49
                -35 52 -30 122 6 79 14 99 64 158 19 22 52 78 75 125 22 47 50 95 61 108 20
                21 22 33 20 125 -2 68 4 136 17 204 11 56 21 112 21 125 2 50 -22 130 -67 217
                -48 95 -95 147 -142 156 -15 3 -38 12 -52 20 -81 47 -106 55 -175 54 -38 -1
                -79 -3 -90 -6z"
								/>
							</g>

							{/*kiran*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(9)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7975 7711 c-11 -5 -36 -10 -56 -10 -69 -2 -99 -13 -156 -62 -32 -26
                -74 -62 -94 -78 -76 -65 -106 -133 -129 -301 -5 -36 -7 -84 -4 -107 5 -32 1
                -50 -15 -76 -24 -39 -27 -100 -7 -138 7 -14 16 -36 19 -50 4 -13 27 -47 52
                -76 25 -28 45 -56 45 -62 0 -5 9 -16 20 -24 31 -22 50 -80 50 -155 l0 -69 -42
                -12 c-23 -7 -76 -35 -116 -62 -41 -27 -92 -54 -113 -59 -22 -6 -39 -16 -39
                -23 0 -7 17 -37 37 -67 35 -52 53 -103 75 -215 5 -27 18 -86 29 -130 10 -44
                23 -111 28 -150 6 -38 17 -110 26 -160 8 -49 15 -130 15 -180 0 -49 7 -117 14
                -150 8 -33 17 -89 21 -125 4 -36 20 -98 36 -138 16 -40 29 -78 29 -84 0 -22
                49 -75 82 -88 34 -13 98 -67 98 -82 0 -5 13 -37 30 -72 32 -69 63 -96 110 -96
                56 0 90 69 127 259 6 33 68 92 125 120 27 12 50 27 54 32 3 5 12 9 20 9 8 0
                33 9 54 19 22 10 62 24 90 31 63 15 129 84 154 160 15 46 33 205 32 285 0 53
                24 214 64 420 53 277 53 279 31 299 -20 18 -141 56 -179 56 -27 0 -90 41 -143
                93 -50 48 -77 109 -85 190 -6 62 -4 73 26 140 18 39 43 83 56 97 72 76 87 105
                99 188 6 44 4 57 -11 74 -17 18 -19 35 -16 137 4 164 -6 206 -70 287 -29 37
                -70 84 -91 104 -53 51 -146 99 -188 98 -19 0 -65 2 -104 6 -38 3 -79 2 -90 -3z"
								/>
							</g>

							{/*zevik*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(10)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7068 9353 c-43 -4 -54 -10 -121 -76 -40 -40 -84 -90 -97 -112 -12
                -22 -33 -56 -46 -75 -32 -48 -55 -145 -57 -240 -2 -65 -5 -80 -19 -83 -49 -13
                -73 -121 -46 -210 16 -53 84 -125 126 -133 38 -8 47 -34 56 -161 5 -77 4 -83
                -18 -100 -13 -10 -31 -34 -41 -53 -9 -19 -75 -92 -146 -163 -109 -108 -134
                -138 -162 -200 -19 -39 -54 -97 -80 -128 -41 -51 -47 -63 -57 -137 l-12 -82
                53 -73 c30 -39 67 -92 83 -117 16 -25 37 -54 47 -65 10 -11 47 -52 83 -92 36
                -40 66 -80 66 -90 0 -20 71 -78 138 -112 55 -28 107 -75 121 -108 6 -16 17
                -64 24 -108 l13 -80 65 -6 c82 -7 168 -47 268 -122 41 -32 79 -57 85 -57 26 1
                65 49 85 105 21 61 20 93 -6 130 -7 11 -13 29 -13 40 0 12 -11 31 -24 44 -20
                19 -24 35 -29 112 -10 134 24 265 118 464 30 63 55 124 55 137 1 21 22 54 115
                175 16 21 52 54 80 74 31 22 51 43 53 58 4 27 -32 69 -95 109 -23 14 -52 44
                -65 65 -13 21 -37 61 -55 88 -17 26 -35 63 -38 81 -4 18 -13 42 -21 53 -9 15
                -10 45 -4 125 9 123 21 160 50 160 53 0 115 59 160 153 31 66 24 146 -17 189
                -26 27 -28 34 -26 106 1 42 3 94 4 114 2 25 -7 61 -28 105 -17 38 -37 88 -45
                113 -18 56 -74 97 -145 107 -26 3 -81 23 -121 44 -72 38 -76 39 -170 37 -54
                -1 -118 -3 -144 -5z"
								/>
							</g>

							{/*nakul*/}

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(11)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M8640 8521 c0 -5 -11 -11 -23 -15 -13 -3 -40 -19 -61 -35 -21 -17
                -52 -35 -69 -41 -50 -16 -146 -159 -147 -217 0 -29 -16 -123 -40 -228 -5 -23
                -5 -59 0 -85 5 -25 9 -48 10 -51 0 -4 -11 -10 -24 -13 -14 -3 -28 -16 -32 -29
                -4 -12 -10 -24 -14 -27 -4 -3 -10 -24 -13 -48 -4 -37 -2 -46 21 -68 15 -13 35
                -27 45 -30 9 -3 17 -9 17 -14 0 -5 40 -50 89 -100 100 -103 101 -106 106 -270
                2 -59 9 -113 20 -144 15 -41 16 -54 6 -82 -9 -25 -9 -39 -1 -55 16 -29 -3 -73
                -44 -101 -53 -38 -96 -84 -96 -103 0 -10 -12 -52 -26 -94 -43 -125 -22 -180
                115 -298 85 -74 143 -99 247 -110 51 -5 54 -5 64 21 5 15 10 39 10 54 0 42 69
                149 125 195 28 22 77 68 111 102 55 55 69 63 140 84 43 12 92 25 107 28 37 7
                30 22 -29 59 -66 43 -160 113 -196 147 l-30 27 4 135 c3 130 4 134 31 162 15
                16 27 32 27 36 0 4 8 16 17 27 10 11 25 39 34 62 13 34 33 57 56 64 6 1 45
                164 50 207 5 46 4 48 -26 60 -29 11 -31 14 -31 63 0 34 5 54 13 57 22 8 34
                103 33 242 -2 117 -4 136 -26 180 -33 66 -87 95 -176 95 -59 0 -64 2 -85 33
                -28 40 -38 47 -66 47 -12 0 -33 11 -47 25 -21 20 -35 25 -79 25 -31 0 -61 6
                -73 15 -21 16 -44 19 -44 6z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(12)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9360 6773 c-14 -3 -31 -9 -37 -15 -7 -6 -84 -46 -170 -90 -87 -44
                -164 -89 -172 -101 -9 -12 -36 -42 -61 -67 -52 -51 -109 -145 -121 -199 -4
                -20 -19 -67 -33 -106 -13 -38 -27 -94 -30 -124 -4 -29 -8 -57 -11 -61 -3 -6
                -13 -44 -46 -195 -4 -22 -13 -89 -19 -150 -6 -60 -15 -141 -20 -180 -6 -38
                -12 -99 -15 -134 -7 -89 -40 -157 -102 -209 -28 -23 -57 -42 -65 -42 -8 0 -18
                -4 -24 -10 -5 -5 -55 -27 -110 -48 -86 -32 -108 -45 -151 -90 -43 -45 -51 -60
                -57 -105 -4 -28 -13 -65 -21 -82 -63 -141 -66 -644 -6 -899 6 -22 8 -43 5 -48
                -3 -4 0 -15 5 -25 6 -10 25 -103 42 -208 27 -158 32 -216 32 -345 0 -85 -5
                -166 -10 -180 -6 -15 -7 -53 -2 -95 4 -38 8 -110 9 -160 0 -79 3 -94 24 -120
                19 -24 26 -27 38 -17 13 10 14 5 6 -41 -6 -28 -11 -81 -13 -117 -2 -36 -10
                -96 -19 -135 -8 -38 -22 -116 -30 -172 -10 -63 -25 -121 -40 -150 -13 -27 -29
                -69 -36 -93 -7 -25 -29 -81 -50 -125 -58 -121 -100 -270 -93 -327 7 -62 -12
                -138 -49 -189 -47 -66 -59 -112 -69 -284 -16 -274 -36 -429 -84 -650 -14 -66
                -28 -131 -30 -145 -9 -55 -24 -157 -30 -198 l-5 -42 1274 0 1274 0 11 68 c13
                78 31 267 36 366 2 38 8 97 14 130 6 34 15 93 22 131 6 39 15 93 19 120 5 28
                9 89 9 137 1 48 6 99 11 114 6 15 13 78 16 138 3 61 7 117 10 125 14 42 27
                176 29 323 2 91 7 174 13 183 5 10 48 32 95 51 48 18 101 43 118 56 29 21 31
                26 26 68 -6 41 -82 285 -111 355 -24 56 -49 160 -53 221 -6 77 8 129 52 194
                19 29 35 57 35 63 0 5 10 24 23 41 69 92 106 224 90 321 -7 35 -7 71 -2 89 15
                53 10 451 -7 551 -9 50 -18 137 -20 195 -4 88 -1 120 19 199 25 97 23 165 -5
                198 -27 34 -77 207 -78 273 0 20 -7 46 -16 59 -9 13 -18 46 -20 75 -6 73 -14
                107 -34 136 -23 33 -75 138 -85 170 -17 57 -96 210 -130 250 -20 24 -48 64
                -61 89 -14 25 -38 66 -54 91 -66 99 -108 202 -119 290 -18 140 -20 147 -56
                190 -19 23 -35 52 -35 65 0 12 -7 28 -15 35 -8 7 -15 18 -15 24 0 30 -116 241
                -159 289 -26 29 -56 66 -66 83 -26 41 -152 153 -190 169 -108 46 -151 56 -195
                48z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(13)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9050 9559 c-97 -23 -256 -99 -304 -145 -18 -18 -40 -47 -49 -66 -9
                -19 -26 -43 -38 -54 -39 -35 -96 -166 -119 -274 -12 -56 -10 -121 9 -220 22
                -120 39 -154 86 -171 32 -12 35 -16 35 -54 0 -60 16 -75 80 -80 91 -7 154 -34
                192 -83 26 -34 38 -42 65 -42 46 0 134 -20 159 -37 46 -30 63 -98 67 -264 3
                -129 0 -163 -15 -208 -22 -67 -24 -120 -3 -127 39 -15 -3 -251 -51 -289 -7 -5
                -31 -45 -54 -89 -22 -43 -51 -92 -64 -110 -20 -25 -25 -48 -31 -127 -9 -115 1
                -150 53 -197 153 -138 244 -192 322 -192 30 0 52 6 60 15 8 9 13 64 15 162 3
                166 12 205 55 223 16 7 35 22 43 34 8 11 43 35 78 53 60 30 273 100 364 119
                42 10 41 8 62 113 2 13 21 40 41 60 55 53 72 82 72 121 0 40 -34 120 -50 120
                -6 0 -35 11 -64 24 -29 13 -95 38 -146 56 -52 17 -120 46 -151 66 -31 19 -76
                41 -99 49 -47 16 -213 104 -271 142 -35 23 -36 26 -47 116 -20 166 14 301 85
                335 29 14 42 31 69 89 18 39 38 98 45 130 7 32 19 72 28 88 12 24 15 67 15
                210 l1 180 -32 55 c-41 70 -85 116 -127 134 -18 7 -60 41 -93 75 -33 33 -72
                65 -87 71 -40 15 -110 11 -206 -11z"
								/>
								<path
									d="M8195 8005 c-47 -23 -112 -43 -195 -60 -143 -29 -248 -61 -280 -85
                l-22 -16 39 -38 c21 -21 63 -50 93 -65 52 -25 63 -26 219 -26 l164 0 11 45 c8
                33 18 48 39 58 27 13 27 13 27 118 0 77 -3 104 -12 104 -7 -1 -44 -16 -83 -35z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(14)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10305 7661 c-27 -4 -63 -15 -80 -26 -52 -34 -166 -138 -180 -165
                -13 -26 -29 -97 -45 -204 -5 -32 -16 -67 -26 -77 -13 -14 -19 -51 -27 -146
                l-10 -128 51 -101 c32 -64 63 -111 83 -127 25 -19 37 -41 52 -93 28 -101 32
                -191 10 -231 -61 -108 -107 -173 -138 -198 -43 -32 -42 -49 5 -118 40 -59 48
                -84 64 -191 15 -98 39 -155 115 -276 22 -36 48 -78 57 -94 9 -16 34 -52 55
                -79 44 -55 108 -177 150 -286 15 -40 46 -102 68 -138 30 -47 43 -79 47 -121
                11 -95 18 -105 62 -97 20 4 55 15 77 24 22 10 66 28 98 41 48 19 70 37 131
                106 94 108 102 133 87 286 -22 222 -19 236 73 473 20 50 35 100 36 112 0 24
                -55 93 -74 93 -7 0 -21 9 -31 20 -10 11 -23 20 -29 20 -47 2 -166 143 -166
                197 0 18 -5 52 -11 76 -17 61 10 178 55 241 18 26 41 76 51 112 15 54 21 64
                40 64 12 0 29 8 37 18 37 41 88 179 88 236 0 28 24 73 50 93 33 25 16 125 -51
                306 -16 42 -32 104 -36 137 -8 84 -43 120 -138 144 -38 9 -108 29 -155 43
                -199 60 -213 63 -305 62 -49 -1 -112 -5 -140 -8z"
								/>
							</g>

							{/*rachelle*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(15)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11660 6664 c-19 -9 -54 -26 -78 -37 -57 -27 -225 -209 -280 -302
                -45 -76 -135 -297 -146 -358 -10 -54 -51 -172 -106 -309 -73 -177 -75 -194
                -60 -344 17 -172 17 -233 -2 -269 -29 -53 -160 -179 -208 -199 -156 -67 -191
                -87 -201 -114 -13 -32 -5 -143 13 -174 7 -13 13 -34 14 -48 1 -14 7 -61 14
                -105 6 -44 10 -120 7 -170 -2 -49 0 -121 5 -160 5 -38 11 -86 13 -105 2 -19 8
                -53 13 -75 31 -123 42 -346 21 -446 -6 -30 -12 -133 -13 -229 l-1 -175 -47
                -97 c-27 -53 -48 -101 -48 -106 0 -5 -8 -16 -17 -23 -29 -24 -96 -178 -90
                -208 10 -52 60 -207 83 -261 35 -82 121 -330 129 -375 2 -11 11 -49 20 -85 14
                -56 15 -118 11 -470 -8 -656 -30 -841 -142 -1193 -19 -59 -37 -135 -41 -167
                l-6 -60 1213 0 1213 0 -7 53 c-8 56 -8 495 -1 507 3 4 7 95 11 201 3 107 10
                206 16 221 11 29 14 878 3 988 -3 36 -10 99 -14 140 -7 62 -5 86 10 135 10 33
                19 71 19 84 0 29 12 70 50 171 34 88 63 183 80 260 7 30 20 69 28 85 13 25 16
                72 16 270 1 161 -3 255 -12 285 -6 25 -14 68 -16 95 -8 95 -46 325 -56 345 -5
                10 -10 30 -10 44 0 38 -29 142 -56 199 -13 29 -24 62 -24 74 0 12 -4 25 -10
                28 -5 3 -10 27 -10 53 0 33 -9 65 -30 105 -16 32 -30 69 -30 82 0 13 -4 27
                -10 30 -5 3 -10 21 -10 38 0 18 -8 46 -19 63 -10 17 -22 41 -26 55 -13 42 -99
                181 -120 192 -11 6 -49 24 -84 39 -35 15 -70 36 -78 48 -8 11 -22 20 -31 20
                -20 0 -74 84 -75 115 0 11 5 67 11 125 12 108 19 533 9 560 -3 8 -10 52 -16
                97 -7 45 -23 119 -36 165 -14 46 -25 94 -25 107 0 13 -14 44 -31 70 -18 25
                -46 78 -64 116 -43 95 -94 172 -159 243 -105 112 -146 129 -411 168 -16 2 -46
                -3 -65 -12z"
								/>
							</g>

							{/*shub*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(16)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10715 8900 c-16 -11 -38 -20 -48 -20 -10 0 -40 -11 -67 -25 -27 -14
                -62 -25 -77 -25 -15 0 -60 -16 -99 -35 -74 -37 -73 -35 -124 -150 -27 -60 -30
                -189 -6 -245 8 -20 18 -68 21 -108 l8 -72 -37 -40 c-43 -47 -46 -77 -16 -168
                24 -74 54 -127 92 -166 26 -26 58 -107 58 -147 0 -31 48 -59 101 -59 36 0 66
                -10 125 -40 43 -22 91 -40 107 -40 43 0 90 -26 145 -81 50 -49 107 -79 121
                -63 5 5 17 32 27 59 10 28 43 78 75 115 37 43 66 89 84 134 27 70 65 272 70
                381 5 85 40 234 65 266 23 33 26 82 6 121 -32 62 -112 159 -136 165 -29 7
                -103 63 -194 144 -75 68 -89 76 -175 100 -82 24 -89 24 -126 -1z"
								/>
								<path
									d="M9920 7329 c-52 -21 -122 -45 -155 -55 -33 -10 -80 -26 -103 -36 -53
                -22 -148 -101 -168 -140 -19 -36 -38 -233 -30 -301 l7 -52 94 -58 c94 -58 154
                -115 203 -192 14 -22 39 -62 57 -90 17 -27 58 -94 90 -147 32 -54 60 -98 64
                -98 3 0 29 28 56 62 28 34 64 76 81 92 29 29 32 38 38 118 6 68 3 99 -10 140
                -26 82 -38 103 -62 106 -32 5 -98 110 -123 197 -12 40 10 293 27 322 12 19 39
                163 32 167 -2 1 -46 -15 -98 -35z"
								/>
								<path
									d="M11114 7203 c-8 -9 -12 -23 -9 -32 3 -8 9 -59 12 -113 l6 -98 -29 -6
                c-28 -5 -30 -8 -30 -57 0 -51 -28 -146 -62 -217 -12 -25 -25 -36 -43 -38 -22
                -3 -28 -10 -33 -40 -4 -20 -19 -60 -34 -88 -95 -180 -104 -202 -98 -246 3 -24
                9 -75 14 -115 13 -108 23 -119 222 -258 36 -25 70 -45 75 -45 17 0 55 86 55
                123 0 49 19 106 55 167 18 30 58 102 90 160 35 63 82 131 121 173 35 38 64 73
                64 77 0 14 111 92 166 116 78 34 89 64 63 164 -25 96 -42 117 -122 160 -36 19
                -70 44 -75 55 -9 20 -183 115 -210 115 -7 0 -31 9 -53 20 -60 31 -126 41 -145
                23z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(17)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M12463 8600 c-53 -4 -81 -13 -110 -32 -21 -14 -48 -29 -60 -33 -16
                -4 -40 -43 -90 -143 -37 -75 -80 -155 -95 -177 l-27 -40 14 -185 c7 -102 17
                -196 22 -210 14 -42 91 -136 147 -179 75 -56 101 -111 109 -228 6 -79 4 -97
                -12 -125 -10 -18 -26 -62 -35 -98 -14 -56 -22 -69 -54 -89 -59 -39 -111 -65
                -232 -117 -92 -38 -125 -58 -169 -101 -54 -52 -54 -53 -35 -74 10 -12 36 -30
                56 -40 24 -12 45 -34 58 -59 11 -22 25 -40 30 -40 6 0 44 -32 85 -71 77 -73
                175 -209 204 -283 9 -22 28 -61 41 -85 50 -88 54 -97 61 -136 4 -22 16 -74 27
                -115 44 -163 63 -510 42 -768 l-13 -161 34 -67 c19 -37 39 -69 46 -71 23 -8
                43 45 54 143 24 226 30 288 42 479 9 140 18 209 29 229 25 47 118 106 343 219
                116 58 226 112 245 121 19 9 67 43 105 77 39 33 87 69 108 80 41 22 49 36 72
                135 23 101 20 163 -11 205 -14 19 -34 53 -44 76 -10 23 -29 49 -42 57 -24 16
                -45 71 -114 299 -21 71 -31 90 -50 97 -33 13 -161 147 -174 184 -7 17 -18 46
                -26 64 -37 85 -1 331 59 414 17 23 19 37 13 97 -4 51 -2 81 8 108 23 60 38
                182 30 253 -4 39 -19 90 -36 127 -30 63 -32 64 -168 152 -22 14 -132 50 -225
                72 -44 11 -93 26 -108 34 -30 16 -39 16 -154 5z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(18)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11790 9099 c-19 -5 -66 -7 -105 -4 l-70 6 -145 -73 c-102 -51 -149
                -81 -160 -100 -8 -14 -27 -46 -42 -71 -31 -51 -47 -111 -48 -177 0 -42 6 -53
                65 -124 l64 -77 -4 -76 c-3 -56 0 -83 11 -105 9 -17 17 -45 19 -62 2 -17 13
                -68 24 -114 25 -100 29 -266 7 -297 -7 -11 -17 -31 -21 -45 -24 -82 -100 -139
                -186 -140 -41 0 -49 -5 -92 -49 -93 -97 -109 -186 -56 -302 34 -74 40 -78 156
                -114 45 -14 132 -52 194 -85 62 -33 117 -60 122 -60 15 0 115 -60 119 -70 2
                -6 13 -12 26 -15 36 -7 40 -13 35 -53 -5 -39 13 -148 25 -156 6 -4 145 82 163
                102 11 10 52 156 115 406 31 121 74 270 95 333 44 123 49 185 21 256 -12 31
                -13 67 -8 189 7 140 10 155 39 217 17 36 43 84 57 106 32 49 50 90 50 113 0
                10 9 35 21 57 32 60 23 129 -30 235 -24 47 -53 96 -66 110 -12 14 -40 51 -60
                84 -46 73 -100 133 -136 152 -31 16 -143 17 -199 3z"
								/>
							</g>

							{/*meghna*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(19)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14120 6901 c-41 -20 -93 -48 -115 -63 -52 -35 -145 -131 -145 -151
                0 -8 -13 -44 -30 -79 -16 -34 -30 -73 -30 -85 0 -13 -17 -49 -37 -80 -50 -79
                -75 -148 -77 -211 -1 -42 3 -53 17 -58 23 -7 22 -41 -4 -83 -16 -26 -20 -45
                -16 -75 3 -23 1 -63 -5 -90 -8 -36 -7 -54 2 -71 10 -19 9 -32 -4 -71 -9 -26
                -22 -54 -29 -63 -8 -9 -20 -45 -26 -81 -7 -36 -19 -83 -26 -105 -27 -76 -41
                -160 -35 -213 5 -46 3 -53 -15 -58 -11 -4 -51 -21 -90 -39 -38 -18 -78 -35
                -87 -38 -20 -7 -44 -57 -83 -172 -62 -184 -64 -199 -63 -444 0 -149 -3 -234
                -10 -248 -20 -37 -35 -327 -22 -428 14 -108 9 -577 -8 -709 -7 -49 -21 -141
                -33 -205 -11 -64 -25 -172 -30 -241 -4 -69 -13 -156 -20 -193 -15 -90 -6 -156
                42 -302 37 -115 60 -217 78 -350 5 -33 25 -124 45 -202 33 -131 35 -144 22
                -175 -39 -92 -49 -204 -52 -548 l-2 -335 -26 -59 c-40 -90 -66 -236 -66 -368
                0 -98 3 -120 23 -158 l22 -45 1143 -3 1143 -2 -6 161 c-4 129 -2 168 10 197 9
                19 27 90 41 156 l26 121 -2 480 c-1 263 -4 484 -8 490 -4 5 -10 172 -13 370
                -5 330 -8 368 -29 455 -12 52 -25 111 -27 130 -3 19 -9 40 -13 45 -11 15 -30
                110 -30 153 0 39 19 137 45 237 42 156 79 420 95 680 6 94 18 222 26 285 21
                162 30 605 15 755 -21 208 -39 293 -80 380 -22 44 -42 91 -46 105 -4 14 -29
                70 -55 126 -44 92 -53 105 -106 142 -33 23 -67 42 -77 42 -17 0 -113 25 -194
                51 -39 12 -133 101 -153 144 -9 20 -14 78 -16 170 -1 77 -6 158 -12 180 -6 22
                -11 71 -12 109 0 39 -4 74 -7 80 -4 5 -8 60 -9 120 -2 90 -7 119 -23 151 -12
                21 -21 52 -21 67 0 15 -6 45 -14 65 -8 21 -17 50 -20 64 -3 16 -29 46 -63 74
                -32 27 -65 56 -74 65 -8 10 -39 30 -67 44 -46 24 -59 26 -122 20 -55 -5 -74
                -4 -88 8 -11 10 -39 15 -82 15 -55 0 -77 -5 -140 -36z"
								/>
							</g>

							{/*caden*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(20)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14426 8959 c-21 -5 -50 -17 -65 -28 -14 -10 -41 -23 -60 -29 -31
                -11 -83 -54 -153 -127 -73 -76 -93 -193 -63 -370 9 -55 18 -134 20 -175 3 -78
                30 -167 61 -201 9 -11 30 -19 45 -19 25 0 30 -5 44 -52 19 -64 19 -143 1 -196
                -25 -71 -29 -141 -11 -242 15 -91 17 -97 60 -137 54 -51 56 -72 19 -194 -21
                -68 -25 -99 -21 -162 3 -69 7 -81 33 -108 26 -27 33 -30 69 -24 85 14 119 10
                186 -22 56 -26 73 -41 111 -94 25 -35 48 -77 51 -94 3 -16 10 -59 17 -95 6
                -36 18 -76 27 -89 8 -13 17 -49 19 -80 2 -31 9 -90 16 -131 6 -41 10 -95 10
                -120 -2 -50 24 -144 44 -161 10 -8 37 -8 100 1 90 11 133 27 171 62 16 15 29
                19 49 14 29 -8 66 14 155 87 45 37 46 40 53 108 3 39 13 83 21 99 28 54 9 133
                -68 289 -7 14 -25 32 -42 41 -60 33 -70 67 -71 241 -1 86 -4 161 -8 168 -30
                48 -3 264 44 347 28 49 28 53 11 68 -10 9 -46 28 -82 42 -151 61 -189 84 -221
                129 -18 25 -35 45 -39 45 -13 0 -39 93 -39 141 0 100 18 147 76 204 l54 52 -1
                94 c0 72 -5 101 -19 126 -13 22 -20 63 -25 135 -9 120 -32 191 -85 263 -57 76
                -88 101 -180 143 -131 61 -215 74 -314 51z"
								/>
							</g>

							{/*brandon*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(21)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M15670 7733 c-107 -18 -264 -111 -350 -206 -68 -76 -77 -92 -98 -191
                -14 -64 -16 -97 -9 -156 4 -41 10 -138 12 -215 3 -77 7 -155 10 -173 5 -29 65
                -103 91 -113 6 -2 30 -44 53 -93 39 -80 42 -94 38 -145 -7 -74 -34 -188 -53
                -220 -22 -38 -117 -101 -151 -101 -15 0 -42 -9 -59 -19 -18 -11 -42 -21 -55
                -23 -16 -2 -30 -15 -41 -38 -23 -47 -22 -83 2 -105 36 -33 62 -123 76 -269 7
                -77 18 -144 24 -150 5 -5 47 -29 92 -51 87 -44 130 -89 144 -150 4 -16 10 -37
                15 -47 5 -10 13 -26 17 -35 5 -10 24 -65 42 -123 18 -58 43 -118 55 -135 40
                -53 63 -203 70 -450 7 -241 -1 -373 -39 -652 -14 -98 -26 -218 -27 -268 -4
                -177 -23 -317 -81 -570 -69 -301 -69 -280 -8 -513 29 -110 31 -125 17 -140
                -40 -46 -50 -109 -53 -352 -3 -234 -13 -380 -33 -475 -5 -27 -15 -84 -21 -125
                -19 -122 -31 -181 -50 -255 -21 -80 -44 -209 -60 -340 -13 -104 -23 -527 -17
                -750 l2 -80 198 -3 198 -2 -7 37 c-4 21 -10 45 -15 54 -4 8 -11 39 -15 68 -7
                56 2 101 41 186 30 67 43 150 44 270 0 55 5 132 11 170 13 95 13 341 -1 390
                -16 55 -17 267 -2 340 7 33 19 98 27 145 9 47 26 139 40 204 14 66 30 165 36
                220 17 156 19 166 36 166 29 0 48 70 56 210 4 74 12 189 17 255 6 66 15 210
                22 320 6 110 14 265 19 345 4 80 13 246 20 370 11 221 29 411 49 520 6 30 13
                105 16 167 2 62 13 166 24 230 20 121 41 334 41 411 0 54 19 74 104 102 37 12
                70 28 73 36 3 8 10 14 17 14 6 0 37 16 68 35 32 19 79 41 105 49 92 29 184 65
                209 81 16 11 35 14 57 10 36 -7 139 22 162 46 8 8 26 61 41 119 14 58 30 113
                35 122 7 13 1 31 -25 70 -19 29 -49 91 -67 138 -17 47 -38 92 -46 101 -7 9
                -73 40 -146 69 -72 29 -139 59 -148 66 -8 8 -25 14 -37 14 -13 0 -62 20 -110
                44 -74 37 -92 51 -120 94 -17 27 -32 54 -32 59 0 6 -20 41 -45 79 -43 65 -55
                109 -36 129 11 13 31 97 31 132 0 17 8 33 20 41 14 8 20 23 20 48 0 39 15 104
                33 141 13 28 4 132 -16 168 -11 21 -12 38 -5 69 6 27 6 85 -2 166 -10 116 -14
                129 -45 176 -36 55 -133 134 -218 177 -81 41 -225 71 -287 60z"
								/>
							</g>

							{/*benny*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(22)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M17165 6940 c-22 -4 -53 -13 -70 -19 -16 -6 -60 -20 -97 -31 -51 -16
                -75 -31 -102 -61 -20 -21 -36 -45 -36 -51 0 -7 -25 -65 -56 -130 -53 -110 -56
                -122 -56 -192 0 -40 6 -93 12 -116 6 -23 10 -74 9 -114 -4 -145 72 -396 146
                -484 22 -27 24 -34 14 -53 -6 -12 -19 -50 -28 -83 -15 -57 -20 -63 -77 -102
                -34 -23 -76 -45 -95 -49 -19 -4 -46 -16 -61 -26 -14 -11 -31 -19 -37 -19 -6 0
                -19 -4 -29 -9 -29 -16 -105 -48 -157 -67 -27 -10 -68 -29 -89 -42 -22 -14 -55
                -31 -73 -38 -18 -8 -33 -18 -33 -23 0 -5 -31 -22 -70 -37 -116 -45 -111 -33
                -129 -299 -6 -83 -15 -164 -20 -180 -16 -55 -34 -190 -37 -285 -2 -90 -10
                -162 -33 -310 -18 -110 -31 -249 -36 -375 -8 -199 -17 -329 -23 -340 -4 -5
                -10 -100 -14 -210 -4 -110 -13 -281 -18 -380 -6 -99 -13 -250 -15 -335 -3 -85
                -10 -168 -15 -184 -6 -16 -10 -50 -10 -75 0 -47 39 -255 64 -345 36 -125 59
                -247 60 -321 3 -90 31 -245 54 -290 16 -33 35 -114 57 -255 13 -80 38 -171 96
                -354 5 -15 16 -85 25 -155 8 -69 27 -168 40 -219 14 -51 24 -109 23 -130 -1
                -20 -2 -63 -1 -95 l2 -57 1058 2 c705 2 1056 6 1055 13 -8 51 -28 258 -31 330
                -2 50 -6 146 -10 214 -4 68 -3 203 1 300 l8 176 32 28 c17 15 70 40 116 55 52
                16 93 37 107 52 13 14 37 40 54 58 l30 33 -4 132 c-3 93 -11 154 -26 207 -41
                146 -43 163 -19 183 12 9 27 17 35 17 21 0 34 34 34 92 0 71 28 362 41 418 6
                25 17 52 26 62 19 21 10 87 -17 120 -16 20 -16 26 -4 50 11 21 14 100 14 400
                0 205 -1 402 -2 438 0 36 0 119 1 185 2 107 -7 300 -26 515 -3 41 -12 84 -19
                95 -6 11 -15 45 -19 75 -20 173 -49 339 -76 445 -23 89 -32 156 -38 260 -9
                164 -23 206 -73 224 -18 7 -46 19 -61 27 -16 8 -33 14 -37 14 -5 0 -89 39
                -187 86 -166 80 -360 164 -380 164 -5 0 -40 33 -78 73 -61 63 -75 86 -108 170
                l-39 97 23 75 c19 67 26 77 56 92 47 22 68 52 92 133 27 88 21 167 -15 201
                -13 12 -24 32 -24 44 0 12 -7 64 -16 116 -17 100 -51 176 -126 276 -48 66
                -166 144 -248 165 -45 12 -111 28 -130 32 -8 2 -33 0 -55 -4z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(23)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M13730 7750 c-30 -32 -63 -59 -72 -59 -9 -1 -20 -5 -23 -11 -3 -5
                -20 -10 -36 -10 -16 0 -39 -8 -50 -19 -17 -15 -37 -19 -119 -19 l-99 -1 -56
                -55 -55 -56 0 -120 c0 -107 2 -123 20 -142 16 -17 20 -36 20 -90 0 -37 6 -85
                14 -105 14 -40 28 -113 47 -251 11 -81 12 -83 56 -119 25 -20 59 -57 76 -82
                30 -44 32 -52 35 -156 4 -98 1 -116 -18 -158 -44 -93 -286 -256 -346 -233 -10
                4 -26 -4 -44 -24 -15 -16 -32 -30 -36 -30 -4 0 -19 -11 -33 -24 -33 -30 -318
                -176 -393 -200 -20 -6 -24 -46 -19 -172 2 -44 -1 -74 -8 -78 -7 -5 -11 -44
                -11 -102 0 -53 -4 -103 -9 -112 -13 -25 -34 -240 -34 -358 -1 -108 2 -117 53
                -141 14 -6 40 -15 58 -18 22 -5 52 -26 88 -61 29 -30 58 -54 63 -54 5 0 33
                -24 62 -52 l54 -53 139 0 139 0 -2 90 c-1 50 3 113 9 140 6 28 15 85 20 128
                15 130 56 188 170 239 36 16 76 35 90 43 14 8 41 23 61 34 25 14 42 33 53 62
                25 61 46 184 46 265 0 56 6 84 26 128 25 54 25 60 20 213 -3 87 -8 196 -12
                243 -4 64 -2 87 8 95 7 5 28 40 47 78 19 37 37 67 40 67 9 0 27 48 42 110 7
                30 21 70 31 88 10 18 18 41 18 52 0 22 144 170 165 170 8 0 15 4 15 8 0 11
                117 72 137 72 8 0 32 18 53 40 21 22 44 40 50 40 27 0 40 30 40 89 0 33 5 63
                10 66 6 3 10 21 10 40 0 19 5 37 10 40 6 3 10 35 10 71 0 61 -2 66 -40 105
                -34 35 -40 48 -40 85 0 23 -4 46 -10 49 -5 3 -10 14 -10 24 0 21 -27 78 -41
                87 -5 3 -16 0 -24 -6 -17 -14 -29 -7 -77 43 -14 15 -35 27 -46 27 -11 0 -43
                23 -71 50 l-51 50 -83 -1 -82 0 -55 -59z"
								/>
								<path
									d="M14886 5982 c-3 -6 0 -30 9 -54 18 -52 18 -58 4 -58 -16 0 -33 -20
                -53 -64 -14 -30 -17 -54 -13 -102 4 -61 6 -63 72 -129 65 -65 69 -67 117 -67
                27 0 55 5 61 11 6 6 21 11 33 11 20 0 23 7 30 56 14 112 -9 284 -38 284 -4 0
                -14 14 -23 30 -9 17 -33 41 -54 55 -41 28 -134 45 -145 27z"
								/>
							</g>
						</svg>
					</SvgDesktop>

					<SvgTablet>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="50vw"
							viewBox="0 0 1911.000000 1147.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							{/*Andrew */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(1)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M1620 9131 c-128 -35 -204 -89 -297 -212 -64 -84 -76 -125 -68 -241
                4 -69 2 -104 -6 -120 -26 -47 -11 -208 25 -276 23 -43 63 -80 95 -87 29 -6 29
                -6 36 -100 8 -108 1 -178 -21 -196 -8 -7 -21 -27 -29 -45 -13 -32 -62 -83
                -151 -159 -26 -22 -56 -48 -66 -58 -26 -24 -122 -57 -168 -57 -20 0 -41 -5
                -46 -10 -6 -6 -48 -24 -95 -41 -87 -32 -112 -40 -189 -59 -87 -23 -213 -86
                -238 -119 -23 -32 -58 -129 -79 -218 -12 -54 -17 -150 -20 -463 -6 -512 9
                -716 77 -1027 43 -197 80 -250 246 -355 63 -39 120 -78 126 -86 9 -10 2 -32
                -30 -98 -26 -52 -42 -98 -42 -120 0 -60 59 -213 117 -301 74 -114 153 -271
                153 -303 0 -23 77 -190 124 -270 8 -14 55 -99 105 -190 91 -165 180 -280 219
                -280 8 0 23 -7 33 -16 30 -27 39 -9 33 69 -4 49 -1 101 10 160 9 49 16 112 15
                140 -1 29 1 77 5 107 7 62 -3 150 -34 295 -19 87 -21 120 -16 250 3 83 8 166
                11 185 3 19 10 96 15 170 11 141 22 243 39 345 32 193 76 414 86 440 12 29 55
                63 173 133 29 18 58 32 63 32 5 0 17 4 27 9 56 31 139 61 167 61 18 0 39 8 47
                18 30 33 92 167 110 237 9 38 29 113 43 165 17 61 30 143 36 230 5 74 19 178
                29 230 11 52 25 120 30 150 6 31 24 76 40 100 17 25 30 55 30 68 0 12 11 49
                25 82 14 33 25 68 25 79 0 22 -44 61 -69 61 -10 0 -21 4 -26 8 -6 5 -32 17
                -60 27 -27 10 -62 28 -77 41 -15 12 -31 24 -35 26 -4 1 -26 28 -49 58 -35 48
                -42 66 -53 143 -15 99 -15 98 65 192 46 55 114 172 114 198 0 9 11 52 25 94
                14 43 31 93 36 112 11 34 24 258 22 382 -2 126 -91 278 -183 314 -25 10 -61
                30 -80 45 -63 48 -123 63 -260 66 -95 2 -141 -2 -190 -15z"
								/>
								<path
									d="M692 4458 c-11 -24 -47 -92 -81 -153 l-62 -110 1 -100 c1 -55 0 -116
                -2 -135 -3 -34 -1 -36 72 -75 66 -35 76 -44 82 -75 25 -123 42 -224 49 -286 4
                -39 22 -134 40 -210 31 -134 32 -147 34 -369 1 -177 6 -255 21 -340 21 -124
                22 -148 5 -665 -7 -232 -19 -418 -31 -510 -10 -80 -21 -199 -25 -265 -4 -66
                -8 -138 -10 -160 -2 -22 -9 -187 -15 -367 -13 -367 -13 -371 62 -521 5 -10 12
                -41 15 -68 l6 -49 543 0 544 0 1 53 c1 28 3 212 4 407 2 195 7 630 11 965 5
                336 8 630 8 655 0 46 -53 162 -160 351 -24 42 -143 274 -265 515 -122 242
                -266 522 -319 624 -54 102 -170 328 -259 504 -163 320 -222 426 -240 426 -6 0
                -19 -19 -29 -42z"
								/>
							</g>

							{/*Kapil */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(2)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M4724 6955 c-12 -19 -27 -23 -100 -29 -52 -4 -91 -2 -98 3 -7 6 -22
                8 -34 4 -12 -3 -28 0 -35 6 -8 6 -17 8 -21 4 -3 -4 -35 -6 -71 -5 -69 2 -134
                -17 -171 -50 -11 -10 -24 -18 -30 -18 -16 -1 -194 -177 -194 -192 0 -8 -11
                -25 -25 -38 -14 -13 -25 -29 -25 -36 0 -6 -7 -18 -17 -25 -9 -8 -27 -36 -39
                -64 -13 -27 -33 -57 -46 -66 -21 -16 -22 -25 -23 -151 -1 -93 -6 -150 -18
                -188 -9 -30 -17 -82 -19 -114 -3 -58 -2 -60 31 -83 19 -13 46 -23 60 -23 19 0
                32 -9 43 -28 9 -15 44 -58 78 -95 56 -61 65 -67 101 -67 39 0 41 -2 64 -54 27
                -61 25 -114 -7 -155 -10 -13 -18 -27 -18 -32 0 -17 -88 -128 -140 -176 -8 -8
                -53 -37 -100 -65 -46 -27 -97 -60 -112 -73 -42 -35 -287 -152 -381 -182 -133
                -41 -173 -66 -201 -122 -39 -76 -53 -162 -60 -361 -4 -102 -9 -232 -11 -290
                -15 -337 -15 -520 -1 -735 13 -207 18 -239 46 -325 17 -52 42 -138 56 -190 13
                -52 37 -114 52 -138 15 -24 38 -64 52 -88 14 -24 49 -85 79 -135 l54 -92 -12
                -56 c-7 -31 -18 -97 -25 -146 -8 -50 -26 -138 -40 -195 -15 -58 -36 -168 -46
                -245 -11 -77 -29 -167 -40 -200 -11 -33 -45 -145 -76 -250 -57 -197 -65 -222
                -96 -292 -27 -63 -27 -82 3 -105 37 -28 149 -37 168 -14 17 20 37 21 45 1 3
                -8 12 -15 19 -15 11 0 16 -26 21 -112 9 -145 24 -341 33 -441 5 -43 4 -85 0
                -93 -4 -8 -12 -66 -17 -129 -8 -97 -7 -121 6 -155 l16 -40 912 0 912 0 18 118
                c17 120 35 211 62 317 29 115 35 140 45 194 5 30 12 57 14 61 2 3 9 46 15 95
                6 49 16 96 23 104 9 10 12 89 12 281 0 241 2 270 18 287 20 23 22 46 5 72 -15
                24 6 77 77 196 102 171 183 364 200 479 4 27 22 79 40 115 41 83 51 120 70
                255 9 60 20 117 25 127 22 39 1 231 -33 311 -19 46 -34 118 -47 233 -11 104
                -22 162 -46 260 -15 61 -16 80 -4 162 10 74 10 118 0 221 -9 95 -9 156 -1 237
                5 61 13 190 16 287 8 205 -2 277 -43 322 -42 45 -149 110 -357 216 -225 114
                -293 162 -335 234 -16 29 -38 60 -49 70 -11 10 -22 38 -26 67 -4 27 -15 60
                -26 73 -26 33 -25 99 1 136 11 16 27 46 34 68 13 36 43 101 52 111 2 2 10 -2
                18 -8 19 -16 26 -11 62 41 15 24 38 55 50 70 18 22 21 38 19 105 -2 106 32
                267 67 312 14 18 17 33 12 55 -4 17 -6 58 -6 90 2 57 -29 190 -49 211 -5 5 -9
                20 -9 33 0 13 -13 36 -28 50 -61 58 -102 91 -119 96 -10 3 -26 19 -35 36 -12
                21 -25 30 -42 30 -15 0 -27 7 -31 19 -3 10 -27 41 -53 68 -55 60 -95 73 -118
                38z"
								/>
							</g>

							{/* Ashley */}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(3)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6765 6543 c-103 -44 -210 -128 -265 -208 -44 -64 -109 -273 -121
                -390 -6 -55 -14 -118 -19 -141 -24 -105 -40 -468 -26 -575 l8 -66 -93 -45
                c-52 -25 -114 -53 -139 -64 -75 -31 -242 -124 -291 -161 -56 -42 -69 -68 -69
                -131 0 -26 -6 -57 -14 -68 -11 -15 -14 -45 -12 -115 2 -54 -4 -135 -13 -189
                -20 -122 -23 -922 -3 -942 7 -7 12 -24 12 -40 0 -15 7 -52 15 -84 8 -31 17
                -97 21 -148 4 -53 15 -112 27 -141 11 -27 23 -70 28 -95 4 -25 12 -70 17 -101
                6 -34 7 -70 2 -90 -40 -152 -50 -204 -50 -252 0 -50 -23 -134 -53 -192 -11
                -22 -33 -92 -49 -155 -29 -121 -79 -234 -174 -402 -31 -53 -64 -120 -75 -148
                -17 -46 -18 -53 -4 -79 13 -27 13 -31 -8 -57 -22 -28 -22 -33 -19 -288 2 -218
                0 -261 -12 -275 -9 -10 -19 -55 -26 -111 -6 -52 -17 -120 -25 -150 -32 -129
                -55 -236 -55 -252 0 -10 -9 -44 -19 -75 -19 -59 -37 -165 -44 -261 l-4 -52
                1287 0 1287 0 -3 108 c-2 66 3 141 12 197 9 50 20 128 25 175 5 47 14 121 19
                165 6 44 14 145 20 225 13 189 19 256 25 305 3 22 5 43 5 47 0 4 12 29 27 55
                61 110 70 138 77 239 7 98 28 182 70 284 15 36 40 99 56 140 15 41 38 102 50
                135 23 61 59 299 66 430 1 39 6 104 10 145 5 58 1 98 -15 175 -16 79 -22 147
                -25 325 -4 224 -22 376 -51 446 -7 17 -16 49 -19 71 -4 22 -27 68 -51 104 -55
                80 -115 197 -115 224 0 12 -4 25 -9 31 -14 14 -106 280 -126 364 -55 231 -77
                305 -113 376 -22 44 -51 112 -66 153 -24 67 -27 87 -26 205 3 254 -47 714 -97
                896 -14 52 -29 115 -32 140 -8 57 -66 161 -125 227 -52 57 -155 124 -236 151
                -37 13 -98 21 -185 25 -124 6 -133 5 -190 -20z"
								/>
							</g>

							{/*ragini*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(4)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M2758 7581 c-108 -26 -185 -76 -320 -206 -46 -45 -128 -227 -150
                -334 -10 -52 -22 -99 -25 -105 -4 -5 -10 -69 -14 -141 -12 -210 -26 -283 -103
                -538 -45 -153 -71 -201 -111 -205 -17 -2 -43 -9 -60 -16 -16 -8 -57 -26 -90
                -41 -166 -74 -262 -135 -300 -191 -11 -17 -26 -62 -34 -100 -7 -38 -21 -114
                -31 -169 -11 -55 -26 -152 -35 -215 -8 -63 -18 -128 -21 -145 -9 -49 -35 -400
                -41 -552 -5 -141 1 -197 38 -323 15 -49 14 -192 -1 -350 -7 -74 -14 -180 -15
                -235 l-3 -100 86 -175 c48 -96 96 -197 106 -223 21 -55 61 -107 82 -107 22 0
                84 -104 84 -141 0 -21 32 -94 92 -208 131 -253 146 -280 184 -338 19 -28 34
                -55 34 -60 0 -4 24 -45 54 -90 30 -46 72 -120 95 -165 23 -46 63 -119 90 -164
                55 -92 168 -301 292 -539 17 -33 46 -78 63 -100 47 -60 83 -117 91 -145 4 -14
                24 -56 45 -95 21 -38 57 -106 80 -150 85 -162 151 -281 170 -305 16 -21 22
                -23 46 -15 61 22 96 160 74 289 -10 61 -18 81 -37 94 -71 50 -73 52 -63 75 36
                90 77 208 102 297 33 120 36 131 78 260 17 52 35 131 41 175 14 114 37 236 64
                340 13 50 26 119 30 155 3 36 13 88 22 116 21 67 13 102 -43 199 -26 44 -57
                101 -69 126 -13 25 -34 59 -48 75 -29 34 -51 84 -61 135 -3 19 -26 98 -51 174
                -39 119 -47 158 -56 274 -12 164 -12 705 0 816 5 44 12 154 16 245 7 216 22
                317 54 382 31 62 64 83 190 123 105 34 320 134 375 176 61 46 179 119 191 119
                19 0 155 157 171 197 9 21 24 47 34 58 29 33 32 88 8 148 -31 77 -45 89 -89
                82 -34 -6 -39 -3 -82 45 -26 29 -61 74 -78 100 -27 42 -37 49 -74 55 -24 3
                -49 13 -56 21 -8 10 -21 13 -36 9 -27 -6 -101 23 -122 48 -18 23 -40 129 -41
                197 0 30 -11 100 -24 155 -13 55 -27 123 -31 150 -13 91 -54 326 -59 334 -3 4
                -16 57 -30 117 -14 60 -29 126 -34 146 -11 42 -134 273 -162 303 -10 11 -23
                32 -29 47 -7 18 -28 36 -59 52 -27 14 -64 38 -83 53 -18 15 -47 29 -63 30
                -158 12 -175 11 -248 -6z"
								/>
							</g>

							{/*lizzy*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(5)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M3590 8080 c-100 -8 -118 -13 -216 -61 -73 -36 -217 -173 -245 -233
                -10 -22 -34 -62 -53 -87 -42 -57 -54 -110 -33 -142 8 -13 47 -40 86 -61 39
                -20 71 -44 71 -51 0 -8 16 -36 37 -62 46 -61 125 -228 148 -313 10 -36 28
                -105 42 -155 22 -82 36 -159 78 -420 7 -49 21 -120 29 -156 9 -37 20 -109 26
                -160 5 -52 17 -116 26 -142 14 -40 24 -52 68 -77 28 -17 62 -30 76 -30 14 -1
                36 -7 50 -15 28 -16 86 -20 94 -6 14 21 8 179 -8 234 -24 79 -18 190 19 374 3
                11 32 53 65 93 33 39 60 76 60 81 0 25 189 199 216 199 3 0 18 9 34 20 40 28
                43 66 16 183 -31 130 -42 184 -56 277 -6 41 -20 98 -30 125 -70 185 -96 246
                -126 295 -18 30 -36 67 -40 83 -6 26 -56 77 -75 77 -5 0 -43 27 -84 60 -69 54
                -127 82 -165 78 -8 0 -58 -4 -110 -8z"
								/>
							</g>

							{/*anish*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(6)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M5186 7794 c-21 -8 -55 -27 -75 -42 -20 -15 -45 -33 -56 -40 -92 -58
                -114 -76 -125 -103 -7 -17 -34 -48 -59 -69 -72 -61 -84 -109 -77 -296 10 -256
                18 -319 44 -347 13 -13 26 -37 31 -52 5 -19 17 -32 37 -39 17 -6 61 -38 98
                -71 37 -33 79 -66 93 -73 17 -9 23 -20 20 -32 -3 -10 1 -27 8 -37 6 -10 23
                -49 38 -88 21 -57 25 -87 25 -165 -1 -52 -4 -100 -9 -106 -5 -6 -20 -44 -34
                -85 -20 -56 -27 -102 -32 -194 -6 -119 -6 -121 -45 -177 -25 -38 -46 -58 -58
                -58 -22 0 -73 -63 -96 -120 -8 -19 -22 -42 -31 -52 -8 -9 -19 -38 -24 -62 -7
                -40 -5 -52 21 -102 17 -31 30 -68 30 -83 1 -15 24 -58 58 -106 66 -92 156
                -165 272 -222 41 -20 104 -53 140 -74 36 -21 81 -44 100 -50 19 -7 71 -34 116
                -61 100 -59 126 -58 182 10 106 129 231 232 281 232 11 0 22 4 25 9 3 4 25 11
                48 15 26 4 58 20 84 41 23 19 49 35 57 35 8 0 26 11 39 24 24 21 26 31 32 142
                3 65 10 204 16 308 10 173 10 190 -6 207 -9 11 -22 19 -28 19 -22 0 -192 88
                -210 109 -11 12 -35 31 -53 42 -18 11 -54 47 -79 80 -44 57 -92 89 -135 89
                -12 0 -38 26 -70 70 -28 39 -55 70 -59 70 -11 0 -50 126 -50 162 0 17 9 45 19
                62 11 17 27 58 37 91 21 74 40 105 66 105 33 0 75 28 86 57 9 25 26 114 52
                291 5 29 16 64 24 77 9 13 16 33 16 43 0 11 9 31 21 45 26 34 18 86 -22 144
                -16 23 -29 44 -29 48 0 4 -14 26 -31 50 -18 24 -48 77 -68 117 -36 73 -37 73
                -121 116 -46 23 -99 57 -118 75 l-33 32 -172 2 c-128 1 -182 -2 -211 -13z"
								/>
							</g>

							{/*anthony*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(7)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M4285 9156 c-114 -40 -267 -105 -303 -129 -39 -26 -118 -148 -137
                -211 -7 -24 -23 -62 -34 -84 -28 -55 -27 -94 4 -130 17 -21 26 -47 31 -88 3
                -33 13 -70 22 -84 9 -14 19 -41 23 -60 9 -43 50 -143 68 -164 8 -9 25 -22 39
                -29 38 -18 54 -76 50 -178 -2 -66 -7 -92 -20 -106 -25 -27 -22 -51 10 -98 15
                -23 49 -97 76 -165 26 -69 55 -140 62 -158 8 -18 14 -44 14 -59 0 -14 4 -42 9
                -62 5 -20 15 -70 21 -111 20 -131 51 -254 71 -282 10 -15 19 -32 19 -37 0 -26
                48 -32 259 -32 152 -1 225 3 241 11 23 12 23 12 16 194 -9 223 -20 296 -52
                353 -21 35 -25 51 -19 80 4 22 1 63 -8 102 -9 36 -24 102 -34 146 -15 65 -17
                98 -10 175 9 119 50 244 88 271 58 41 114 269 113 465 -1 113 -3 126 -28 175
                -16 30 -45 74 -65 99 -20 25 -48 61 -61 80 -37 55 -60 70 -112 70 -38 0 -54 6
                -82 30 -31 28 -43 31 -118 36 -70 4 -94 1 -153 -20z"
								/>
							</g>

							{/*manan*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(8)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6115 8753 c-65 -14 -246 -77 -277 -96 -40 -24 -133 -124 -165 -178
                -32 -52 -51 -126 -57 -219 -4 -56 -13 -99 -26 -125 -24 -47 -26 -99 -4 -151
                19 -46 98 -150 123 -164 14 -7 20 -25 23 -70 4 -50 9 -65 35 -93 17 -17 47
                -66 68 -107 20 -41 44 -84 54 -95 36 -41 82 -125 88 -159 4 -28 -1 -51 -25
                -99 -32 -66 -69 -231 -79 -349 -7 -77 -25 -108 -66 -108 -35 0 -64 -26 -82
                -73 -19 -50 -8 -118 28 -177 12 -19 42 -82 67 -140 89 -204 172 -346 222 -381
                18 -12 44 -32 58 -45 30 -28 157 -98 223 -125 l48 -19 9 26 c6 14 15 72 21
                128 12 119 69 325 105 379 28 43 127 139 177 172 63 41 127 59 209 57 70 -2
                78 0 89 20 15 28 5 127 -20 182 -20 45 -70 90 -141 126 -60 30 -120 78 -120
                96 0 8 -32 49 -72 92 -39 42 -96 113 -125 157 -30 44 -70 103 -90 130 -34 49
                -35 52 -30 122 6 79 14 99 64 158 19 22 52 78 75 125 22 47 50 95 61 108 20
                21 22 33 20 125 -2 68 4 136 17 204 11 56 21 112 21 125 2 50 -22 130 -67 217
                -48 95 -95 147 -142 156 -15 3 -38 12 -52 20 -81 47 -106 55 -175 54 -38 -1
                -79 -3 -90 -6z"
								/>
							</g>

							{/*kiran*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(9)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7975 7711 c-11 -5 -36 -10 -56 -10 -69 -2 -99 -13 -156 -62 -32 -26
                -74 -62 -94 -78 -76 -65 -106 -133 -129 -301 -5 -36 -7 -84 -4 -107 5 -32 1
                -50 -15 -76 -24 -39 -27 -100 -7 -138 7 -14 16 -36 19 -50 4 -13 27 -47 52
                -76 25 -28 45 -56 45 -62 0 -5 9 -16 20 -24 31 -22 50 -80 50 -155 l0 -69 -42
                -12 c-23 -7 -76 -35 -116 -62 -41 -27 -92 -54 -113 -59 -22 -6 -39 -16 -39
                -23 0 -7 17 -37 37 -67 35 -52 53 -103 75 -215 5 -27 18 -86 29 -130 10 -44
                23 -111 28 -150 6 -38 17 -110 26 -160 8 -49 15 -130 15 -180 0 -49 7 -117 14
                -150 8 -33 17 -89 21 -125 4 -36 20 -98 36 -138 16 -40 29 -78 29 -84 0 -22
                49 -75 82 -88 34 -13 98 -67 98 -82 0 -5 13 -37 30 -72 32 -69 63 -96 110 -96
                56 0 90 69 127 259 6 33 68 92 125 120 27 12 50 27 54 32 3 5 12 9 20 9 8 0
                33 9 54 19 22 10 62 24 90 31 63 15 129 84 154 160 15 46 33 205 32 285 0 53
                24 214 64 420 53 277 53 279 31 299 -20 18 -141 56 -179 56 -27 0 -90 41 -143
                93 -50 48 -77 109 -85 190 -6 62 -4 73 26 140 18 39 43 83 56 97 72 76 87 105
                99 188 6 44 4 57 -11 74 -17 18 -19 35 -16 137 4 164 -6 206 -70 287 -29 37
                -70 84 -91 104 -53 51 -146 99 -188 98 -19 0 -65 2 -104 6 -38 3 -79 2 -90 -3z"
								/>
							</g>

							{/*zevik*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(10)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7068 9353 c-43 -4 -54 -10 -121 -76 -40 -40 -84 -90 -97 -112 -12
                -22 -33 -56 -46 -75 -32 -48 -55 -145 -57 -240 -2 -65 -5 -80 -19 -83 -49 -13
                -73 -121 -46 -210 16 -53 84 -125 126 -133 38 -8 47 -34 56 -161 5 -77 4 -83
                -18 -100 -13 -10 -31 -34 -41 -53 -9 -19 -75 -92 -146 -163 -109 -108 -134
                -138 -162 -200 -19 -39 -54 -97 -80 -128 -41 -51 -47 -63 -57 -137 l-12 -82
                53 -73 c30 -39 67 -92 83 -117 16 -25 37 -54 47 -65 10 -11 47 -52 83 -92 36
                -40 66 -80 66 -90 0 -20 71 -78 138 -112 55 -28 107 -75 121 -108 6 -16 17
                -64 24 -108 l13 -80 65 -6 c82 -7 168 -47 268 -122 41 -32 79 -57 85 -57 26 1
                65 49 85 105 21 61 20 93 -6 130 -7 11 -13 29 -13 40 0 12 -11 31 -24 44 -20
                19 -24 35 -29 112 -10 134 24 265 118 464 30 63 55 124 55 137 1 21 22 54 115
                175 16 21 52 54 80 74 31 22 51 43 53 58 4 27 -32 69 -95 109 -23 14 -52 44
                -65 65 -13 21 -37 61 -55 88 -17 26 -35 63 -38 81 -4 18 -13 42 -21 53 -9 15
                -10 45 -4 125 9 123 21 160 50 160 53 0 115 59 160 153 31 66 24 146 -17 189
                -26 27 -28 34 -26 106 1 42 3 94 4 114 2 25 -7 61 -28 105 -17 38 -37 88 -45
                113 -18 56 -74 97 -145 107 -26 3 -81 23 -121 44 -72 38 -76 39 -170 37 -54
                -1 -118 -3 -144 -5z"
								/>
							</g>

							{/*nakul*/}

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(11)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M8640 8521 c0 -5 -11 -11 -23 -15 -13 -3 -40 -19 -61 -35 -21 -17
                -52 -35 -69 -41 -50 -16 -146 -159 -147 -217 0 -29 -16 -123 -40 -228 -5 -23
                -5 -59 0 -85 5 -25 9 -48 10 -51 0 -4 -11 -10 -24 -13 -14 -3 -28 -16 -32 -29
                -4 -12 -10 -24 -14 -27 -4 -3 -10 -24 -13 -48 -4 -37 -2 -46 21 -68 15 -13 35
                -27 45 -30 9 -3 17 -9 17 -14 0 -5 40 -50 89 -100 100 -103 101 -106 106 -270
                2 -59 9 -113 20 -144 15 -41 16 -54 6 -82 -9 -25 -9 -39 -1 -55 16 -29 -3 -73
                -44 -101 -53 -38 -96 -84 -96 -103 0 -10 -12 -52 -26 -94 -43 -125 -22 -180
                115 -298 85 -74 143 -99 247 -110 51 -5 54 -5 64 21 5 15 10 39 10 54 0 42 69
                149 125 195 28 22 77 68 111 102 55 55 69 63 140 84 43 12 92 25 107 28 37 7
                30 22 -29 59 -66 43 -160 113 -196 147 l-30 27 4 135 c3 130 4 134 31 162 15
                16 27 32 27 36 0 4 8 16 17 27 10 11 25 39 34 62 13 34 33 57 56 64 6 1 45
                164 50 207 5 46 4 48 -26 60 -29 11 -31 14 -31 63 0 34 5 54 13 57 22 8 34
                103 33 242 -2 117 -4 136 -26 180 -33 66 -87 95 -176 95 -59 0 -64 2 -85 33
                -28 40 -38 47 -66 47 -12 0 -33 11 -47 25 -21 20 -35 25 -79 25 -31 0 -61 6
                -73 15 -21 16 -44 19 -44 6z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(12)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9360 6773 c-14 -3 -31 -9 -37 -15 -7 -6 -84 -46 -170 -90 -87 -44
                -164 -89 -172 -101 -9 -12 -36 -42 -61 -67 -52 -51 -109 -145 -121 -199 -4
                -20 -19 -67 -33 -106 -13 -38 -27 -94 -30 -124 -4 -29 -8 -57 -11 -61 -3 -6
                -13 -44 -46 -195 -4 -22 -13 -89 -19 -150 -6 -60 -15 -141 -20 -180 -6 -38
                -12 -99 -15 -134 -7 -89 -40 -157 -102 -209 -28 -23 -57 -42 -65 -42 -8 0 -18
                -4 -24 -10 -5 -5 -55 -27 -110 -48 -86 -32 -108 -45 -151 -90 -43 -45 -51 -60
                -57 -105 -4 -28 -13 -65 -21 -82 -63 -141 -66 -644 -6 -899 6 -22 8 -43 5 -48
                -3 -4 0 -15 5 -25 6 -10 25 -103 42 -208 27 -158 32 -216 32 -345 0 -85 -5
                -166 -10 -180 -6 -15 -7 -53 -2 -95 4 -38 8 -110 9 -160 0 -79 3 -94 24 -120
                19 -24 26 -27 38 -17 13 10 14 5 6 -41 -6 -28 -11 -81 -13 -117 -2 -36 -10
                -96 -19 -135 -8 -38 -22 -116 -30 -172 -10 -63 -25 -121 -40 -150 -13 -27 -29
                -69 -36 -93 -7 -25 -29 -81 -50 -125 -58 -121 -100 -270 -93 -327 7 -62 -12
                -138 -49 -189 -47 -66 -59 -112 -69 -284 -16 -274 -36 -429 -84 -650 -14 -66
                -28 -131 -30 -145 -9 -55 -24 -157 -30 -198 l-5 -42 1274 0 1274 0 11 68 c13
                78 31 267 36 366 2 38 8 97 14 130 6 34 15 93 22 131 6 39 15 93 19 120 5 28
                9 89 9 137 1 48 6 99 11 114 6 15 13 78 16 138 3 61 7 117 10 125 14 42 27
                176 29 323 2 91 7 174 13 183 5 10 48 32 95 51 48 18 101 43 118 56 29 21 31
                26 26 68 -6 41 -82 285 -111 355 -24 56 -49 160 -53 221 -6 77 8 129 52 194
                19 29 35 57 35 63 0 5 10 24 23 41 69 92 106 224 90 321 -7 35 -7 71 -2 89 15
                53 10 451 -7 551 -9 50 -18 137 -20 195 -4 88 -1 120 19 199 25 97 23 165 -5
                198 -27 34 -77 207 -78 273 0 20 -7 46 -16 59 -9 13 -18 46 -20 75 -6 73 -14
                107 -34 136 -23 33 -75 138 -85 170 -17 57 -96 210 -130 250 -20 24 -48 64
                -61 89 -14 25 -38 66 -54 91 -66 99 -108 202 -119 290 -18 140 -20 147 -56
                190 -19 23 -35 52 -35 65 0 12 -7 28 -15 35 -8 7 -15 18 -15 24 0 30 -116 241
                -159 289 -26 29 -56 66 -66 83 -26 41 -152 153 -190 169 -108 46 -151 56 -195
                48z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(13)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9050 9559 c-97 -23 -256 -99 -304 -145 -18 -18 -40 -47 -49 -66 -9
                -19 -26 -43 -38 -54 -39 -35 -96 -166 -119 -274 -12 -56 -10 -121 9 -220 22
                -120 39 -154 86 -171 32 -12 35 -16 35 -54 0 -60 16 -75 80 -80 91 -7 154 -34
                192 -83 26 -34 38 -42 65 -42 46 0 134 -20 159 -37 46 -30 63 -98 67 -264 3
                -129 0 -163 -15 -208 -22 -67 -24 -120 -3 -127 39 -15 -3 -251 -51 -289 -7 -5
                -31 -45 -54 -89 -22 -43 -51 -92 -64 -110 -20 -25 -25 -48 -31 -127 -9 -115 1
                -150 53 -197 153 -138 244 -192 322 -192 30 0 52 6 60 15 8 9 13 64 15 162 3
                166 12 205 55 223 16 7 35 22 43 34 8 11 43 35 78 53 60 30 273 100 364 119
                42 10 41 8 62 113 2 13 21 40 41 60 55 53 72 82 72 121 0 40 -34 120 -50 120
                -6 0 -35 11 -64 24 -29 13 -95 38 -146 56 -52 17 -120 46 -151 66 -31 19 -76
                41 -99 49 -47 16 -213 104 -271 142 -35 23 -36 26 -47 116 -20 166 14 301 85
                335 29 14 42 31 69 89 18 39 38 98 45 130 7 32 19 72 28 88 12 24 15 67 15
                210 l1 180 -32 55 c-41 70 -85 116 -127 134 -18 7 -60 41 -93 75 -33 33 -72
                65 -87 71 -40 15 -110 11 -206 -11z"
								/>
								<path
									d="M8195 8005 c-47 -23 -112 -43 -195 -60 -143 -29 -248 -61 -280 -85
                l-22 -16 39 -38 c21 -21 63 -50 93 -65 52 -25 63 -26 219 -26 l164 0 11 45 c8
                33 18 48 39 58 27 13 27 13 27 118 0 77 -3 104 -12 104 -7 -1 -44 -16 -83 -35z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(14)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10305 7661 c-27 -4 -63 -15 -80 -26 -52 -34 -166 -138 -180 -165
                -13 -26 -29 -97 -45 -204 -5 -32 -16 -67 -26 -77 -13 -14 -19 -51 -27 -146
                l-10 -128 51 -101 c32 -64 63 -111 83 -127 25 -19 37 -41 52 -93 28 -101 32
                -191 10 -231 -61 -108 -107 -173 -138 -198 -43 -32 -42 -49 5 -118 40 -59 48
                -84 64 -191 15 -98 39 -155 115 -276 22 -36 48 -78 57 -94 9 -16 34 -52 55
                -79 44 -55 108 -177 150 -286 15 -40 46 -102 68 -138 30 -47 43 -79 47 -121
                11 -95 18 -105 62 -97 20 4 55 15 77 24 22 10 66 28 98 41 48 19 70 37 131
                106 94 108 102 133 87 286 -22 222 -19 236 73 473 20 50 35 100 36 112 0 24
                -55 93 -74 93 -7 0 -21 9 -31 20 -10 11 -23 20 -29 20 -47 2 -166 143 -166
                197 0 18 -5 52 -11 76 -17 61 10 178 55 241 18 26 41 76 51 112 15 54 21 64
                40 64 12 0 29 8 37 18 37 41 88 179 88 236 0 28 24 73 50 93 33 25 16 125 -51
                306 -16 42 -32 104 -36 137 -8 84 -43 120 -138 144 -38 9 -108 29 -155 43
                -199 60 -213 63 -305 62 -49 -1 -112 -5 -140 -8z"
								/>
							</g>

							{/*rachelle*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(15)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11660 6664 c-19 -9 -54 -26 -78 -37 -57 -27 -225 -209 -280 -302
                -45 -76 -135 -297 -146 -358 -10 -54 -51 -172 -106 -309 -73 -177 -75 -194
                -60 -344 17 -172 17 -233 -2 -269 -29 -53 -160 -179 -208 -199 -156 -67 -191
                -87 -201 -114 -13 -32 -5 -143 13 -174 7 -13 13 -34 14 -48 1 -14 7 -61 14
                -105 6 -44 10 -120 7 -170 -2 -49 0 -121 5 -160 5 -38 11 -86 13 -105 2 -19 8
                -53 13 -75 31 -123 42 -346 21 -446 -6 -30 -12 -133 -13 -229 l-1 -175 -47
                -97 c-27 -53 -48 -101 -48 -106 0 -5 -8 -16 -17 -23 -29 -24 -96 -178 -90
                -208 10 -52 60 -207 83 -261 35 -82 121 -330 129 -375 2 -11 11 -49 20 -85 14
                -56 15 -118 11 -470 -8 -656 -30 -841 -142 -1193 -19 -59 -37 -135 -41 -167
                l-6 -60 1213 0 1213 0 -7 53 c-8 56 -8 495 -1 507 3 4 7 95 11 201 3 107 10
                206 16 221 11 29 14 878 3 988 -3 36 -10 99 -14 140 -7 62 -5 86 10 135 10 33
                19 71 19 84 0 29 12 70 50 171 34 88 63 183 80 260 7 30 20 69 28 85 13 25 16
                72 16 270 1 161 -3 255 -12 285 -6 25 -14 68 -16 95 -8 95 -46 325 -56 345 -5
                10 -10 30 -10 44 0 38 -29 142 -56 199 -13 29 -24 62 -24 74 0 12 -4 25 -10
                28 -5 3 -10 27 -10 53 0 33 -9 65 -30 105 -16 32 -30 69 -30 82 0 13 -4 27
                -10 30 -5 3 -10 21 -10 38 0 18 -8 46 -19 63 -10 17 -22 41 -26 55 -13 42 -99
                181 -120 192 -11 6 -49 24 -84 39 -35 15 -70 36 -78 48 -8 11 -22 20 -31 20
                -20 0 -74 84 -75 115 0 11 5 67 11 125 12 108 19 533 9 560 -3 8 -10 52 -16
                97 -7 45 -23 119 -36 165 -14 46 -25 94 -25 107 0 13 -14 44 -31 70 -18 25
                -46 78 -64 116 -43 95 -94 172 -159 243 -105 112 -146 129 -411 168 -16 2 -46
                -3 -65 -12z"
								/>
							</g>

							{/*shub*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(16)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10715 8900 c-16 -11 -38 -20 -48 -20 -10 0 -40 -11 -67 -25 -27 -14
                -62 -25 -77 -25 -15 0 -60 -16 -99 -35 -74 -37 -73 -35 -124 -150 -27 -60 -30
                -189 -6 -245 8 -20 18 -68 21 -108 l8 -72 -37 -40 c-43 -47 -46 -77 -16 -168
                24 -74 54 -127 92 -166 26 -26 58 -107 58 -147 0 -31 48 -59 101 -59 36 0 66
                -10 125 -40 43 -22 91 -40 107 -40 43 0 90 -26 145 -81 50 -49 107 -79 121
                -63 5 5 17 32 27 59 10 28 43 78 75 115 37 43 66 89 84 134 27 70 65 272 70
                381 5 85 40 234 65 266 23 33 26 82 6 121 -32 62 -112 159 -136 165 -29 7
                -103 63 -194 144 -75 68 -89 76 -175 100 -82 24 -89 24 -126 -1z"
								/>
								<path
									d="M9920 7329 c-52 -21 -122 -45 -155 -55 -33 -10 -80 -26 -103 -36 -53
                -22 -148 -101 -168 -140 -19 -36 -38 -233 -30 -301 l7 -52 94 -58 c94 -58 154
                -115 203 -192 14 -22 39 -62 57 -90 17 -27 58 -94 90 -147 32 -54 60 -98 64
                -98 3 0 29 28 56 62 28 34 64 76 81 92 29 29 32 38 38 118 6 68 3 99 -10 140
                -26 82 -38 103 -62 106 -32 5 -98 110 -123 197 -12 40 10 293 27 322 12 19 39
                163 32 167 -2 1 -46 -15 -98 -35z"
								/>
								<path
									d="M11114 7203 c-8 -9 -12 -23 -9 -32 3 -8 9 -59 12 -113 l6 -98 -29 -6
                c-28 -5 -30 -8 -30 -57 0 -51 -28 -146 -62 -217 -12 -25 -25 -36 -43 -38 -22
                -3 -28 -10 -33 -40 -4 -20 -19 -60 -34 -88 -95 -180 -104 -202 -98 -246 3 -24
                9 -75 14 -115 13 -108 23 -119 222 -258 36 -25 70 -45 75 -45 17 0 55 86 55
                123 0 49 19 106 55 167 18 30 58 102 90 160 35 63 82 131 121 173 35 38 64 73
                64 77 0 14 111 92 166 116 78 34 89 64 63 164 -25 96 -42 117 -122 160 -36 19
                -70 44 -75 55 -9 20 -183 115 -210 115 -7 0 -31 9 -53 20 -60 31 -126 41 -145
                23z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(17)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M12463 8600 c-53 -4 -81 -13 -110 -32 -21 -14 -48 -29 -60 -33 -16
                -4 -40 -43 -90 -143 -37 -75 -80 -155 -95 -177 l-27 -40 14 -185 c7 -102 17
                -196 22 -210 14 -42 91 -136 147 -179 75 -56 101 -111 109 -228 6 -79 4 -97
                -12 -125 -10 -18 -26 -62 -35 -98 -14 -56 -22 -69 -54 -89 -59 -39 -111 -65
                -232 -117 -92 -38 -125 -58 -169 -101 -54 -52 -54 -53 -35 -74 10 -12 36 -30
                56 -40 24 -12 45 -34 58 -59 11 -22 25 -40 30 -40 6 0 44 -32 85 -71 77 -73
                175 -209 204 -283 9 -22 28 -61 41 -85 50 -88 54 -97 61 -136 4 -22 16 -74 27
                -115 44 -163 63 -510 42 -768 l-13 -161 34 -67 c19 -37 39 -69 46 -71 23 -8
                43 45 54 143 24 226 30 288 42 479 9 140 18 209 29 229 25 47 118 106 343 219
                116 58 226 112 245 121 19 9 67 43 105 77 39 33 87 69 108 80 41 22 49 36 72
                135 23 101 20 163 -11 205 -14 19 -34 53 -44 76 -10 23 -29 49 -42 57 -24 16
                -45 71 -114 299 -21 71 -31 90 -50 97 -33 13 -161 147 -174 184 -7 17 -18 46
                -26 64 -37 85 -1 331 59 414 17 23 19 37 13 97 -4 51 -2 81 8 108 23 60 38
                182 30 253 -4 39 -19 90 -36 127 -30 63 -32 64 -168 152 -22 14 -132 50 -225
                72 -44 11 -93 26 -108 34 -30 16 -39 16 -154 5z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(18)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11790 9099 c-19 -5 -66 -7 -105 -4 l-70 6 -145 -73 c-102 -51 -149
                -81 -160 -100 -8 -14 -27 -46 -42 -71 -31 -51 -47 -111 -48 -177 0 -42 6 -53
                65 -124 l64 -77 -4 -76 c-3 -56 0 -83 11 -105 9 -17 17 -45 19 -62 2 -17 13
                -68 24 -114 25 -100 29 -266 7 -297 -7 -11 -17 -31 -21 -45 -24 -82 -100 -139
                -186 -140 -41 0 -49 -5 -92 -49 -93 -97 -109 -186 -56 -302 34 -74 40 -78 156
                -114 45 -14 132 -52 194 -85 62 -33 117 -60 122 -60 15 0 115 -60 119 -70 2
                -6 13 -12 26 -15 36 -7 40 -13 35 -53 -5 -39 13 -148 25 -156 6 -4 145 82 163
                102 11 10 52 156 115 406 31 121 74 270 95 333 44 123 49 185 21 256 -12 31
                -13 67 -8 189 7 140 10 155 39 217 17 36 43 84 57 106 32 49 50 90 50 113 0
                10 9 35 21 57 32 60 23 129 -30 235 -24 47 -53 96 -66 110 -12 14 -40 51 -60
                84 -46 73 -100 133 -136 152 -31 16 -143 17 -199 3z"
								/>
							</g>

							{/*meghna*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(19)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14120 6901 c-41 -20 -93 -48 -115 -63 -52 -35 -145 -131 -145 -151
                0 -8 -13 -44 -30 -79 -16 -34 -30 -73 -30 -85 0 -13 -17 -49 -37 -80 -50 -79
                -75 -148 -77 -211 -1 -42 3 -53 17 -58 23 -7 22 -41 -4 -83 -16 -26 -20 -45
                -16 -75 3 -23 1 -63 -5 -90 -8 -36 -7 -54 2 -71 10 -19 9 -32 -4 -71 -9 -26
                -22 -54 -29 -63 -8 -9 -20 -45 -26 -81 -7 -36 -19 -83 -26 -105 -27 -76 -41
                -160 -35 -213 5 -46 3 -53 -15 -58 -11 -4 -51 -21 -90 -39 -38 -18 -78 -35
                -87 -38 -20 -7 -44 -57 -83 -172 -62 -184 -64 -199 -63 -444 0 -149 -3 -234
                -10 -248 -20 -37 -35 -327 -22 -428 14 -108 9 -577 -8 -709 -7 -49 -21 -141
                -33 -205 -11 -64 -25 -172 -30 -241 -4 -69 -13 -156 -20 -193 -15 -90 -6 -156
                42 -302 37 -115 60 -217 78 -350 5 -33 25 -124 45 -202 33 -131 35 -144 22
                -175 -39 -92 -49 -204 -52 -548 l-2 -335 -26 -59 c-40 -90 -66 -236 -66 -368
                0 -98 3 -120 23 -158 l22 -45 1143 -3 1143 -2 -6 161 c-4 129 -2 168 10 197 9
                19 27 90 41 156 l26 121 -2 480 c-1 263 -4 484 -8 490 -4 5 -10 172 -13 370
                -5 330 -8 368 -29 455 -12 52 -25 111 -27 130 -3 19 -9 40 -13 45 -11 15 -30
                110 -30 153 0 39 19 137 45 237 42 156 79 420 95 680 6 94 18 222 26 285 21
                162 30 605 15 755 -21 208 -39 293 -80 380 -22 44 -42 91 -46 105 -4 14 -29
                70 -55 126 -44 92 -53 105 -106 142 -33 23 -67 42 -77 42 -17 0 -113 25 -194
                51 -39 12 -133 101 -153 144 -9 20 -14 78 -16 170 -1 77 -6 158 -12 180 -6 22
                -11 71 -12 109 0 39 -4 74 -7 80 -4 5 -8 60 -9 120 -2 90 -7 119 -23 151 -12
                21 -21 52 -21 67 0 15 -6 45 -14 65 -8 21 -17 50 -20 64 -3 16 -29 46 -63 74
                -32 27 -65 56 -74 65 -8 10 -39 30 -67 44 -46 24 -59 26 -122 20 -55 -5 -74
                -4 -88 8 -11 10 -39 15 -82 15 -55 0 -77 -5 -140 -36z"
								/>
							</g>

							{/*caden*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(20)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14426 8959 c-21 -5 -50 -17 -65 -28 -14 -10 -41 -23 -60 -29 -31
                -11 -83 -54 -153 -127 -73 -76 -93 -193 -63 -370 9 -55 18 -134 20 -175 3 -78
                30 -167 61 -201 9 -11 30 -19 45 -19 25 0 30 -5 44 -52 19 -64 19 -143 1 -196
                -25 -71 -29 -141 -11 -242 15 -91 17 -97 60 -137 54 -51 56 -72 19 -194 -21
                -68 -25 -99 -21 -162 3 -69 7 -81 33 -108 26 -27 33 -30 69 -24 85 14 119 10
                186 -22 56 -26 73 -41 111 -94 25 -35 48 -77 51 -94 3 -16 10 -59 17 -95 6
                -36 18 -76 27 -89 8 -13 17 -49 19 -80 2 -31 9 -90 16 -131 6 -41 10 -95 10
                -120 -2 -50 24 -144 44 -161 10 -8 37 -8 100 1 90 11 133 27 171 62 16 15 29
                19 49 14 29 -8 66 14 155 87 45 37 46 40 53 108 3 39 13 83 21 99 28 54 9 133
                -68 289 -7 14 -25 32 -42 41 -60 33 -70 67 -71 241 -1 86 -4 161 -8 168 -30
                48 -3 264 44 347 28 49 28 53 11 68 -10 9 -46 28 -82 42 -151 61 -189 84 -221
                129 -18 25 -35 45 -39 45 -13 0 -39 93 -39 141 0 100 18 147 76 204 l54 52 -1
                94 c0 72 -5 101 -19 126 -13 22 -20 63 -25 135 -9 120 -32 191 -85 263 -57 76
                -88 101 -180 143 -131 61 -215 74 -314 51z"
								/>
							</g>

							{/*brandon*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(21)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M15670 7733 c-107 -18 -264 -111 -350 -206 -68 -76 -77 -92 -98 -191
                -14 -64 -16 -97 -9 -156 4 -41 10 -138 12 -215 3 -77 7 -155 10 -173 5 -29 65
                -103 91 -113 6 -2 30 -44 53 -93 39 -80 42 -94 38 -145 -7 -74 -34 -188 -53
                -220 -22 -38 -117 -101 -151 -101 -15 0 -42 -9 -59 -19 -18 -11 -42 -21 -55
                -23 -16 -2 -30 -15 -41 -38 -23 -47 -22 -83 2 -105 36 -33 62 -123 76 -269 7
                -77 18 -144 24 -150 5 -5 47 -29 92 -51 87 -44 130 -89 144 -150 4 -16 10 -37
                15 -47 5 -10 13 -26 17 -35 5 -10 24 -65 42 -123 18 -58 43 -118 55 -135 40
                -53 63 -203 70 -450 7 -241 -1 -373 -39 -652 -14 -98 -26 -218 -27 -268 -4
                -177 -23 -317 -81 -570 -69 -301 -69 -280 -8 -513 29 -110 31 -125 17 -140
                -40 -46 -50 -109 -53 -352 -3 -234 -13 -380 -33 -475 -5 -27 -15 -84 -21 -125
                -19 -122 -31 -181 -50 -255 -21 -80 -44 -209 -60 -340 -13 -104 -23 -527 -17
                -750 l2 -80 198 -3 198 -2 -7 37 c-4 21 -10 45 -15 54 -4 8 -11 39 -15 68 -7
                56 2 101 41 186 30 67 43 150 44 270 0 55 5 132 11 170 13 95 13 341 -1 390
                -16 55 -17 267 -2 340 7 33 19 98 27 145 9 47 26 139 40 204 14 66 30 165 36
                220 17 156 19 166 36 166 29 0 48 70 56 210 4 74 12 189 17 255 6 66 15 210
                22 320 6 110 14 265 19 345 4 80 13 246 20 370 11 221 29 411 49 520 6 30 13
                105 16 167 2 62 13 166 24 230 20 121 41 334 41 411 0 54 19 74 104 102 37 12
                70 28 73 36 3 8 10 14 17 14 6 0 37 16 68 35 32 19 79 41 105 49 92 29 184 65
                209 81 16 11 35 14 57 10 36 -7 139 22 162 46 8 8 26 61 41 119 14 58 30 113
                35 122 7 13 1 31 -25 70 -19 29 -49 91 -67 138 -17 47 -38 92 -46 101 -7 9
                -73 40 -146 69 -72 29 -139 59 -148 66 -8 8 -25 14 -37 14 -13 0 -62 20 -110
                44 -74 37 -92 51 -120 94 -17 27 -32 54 -32 59 0 6 -20 41 -45 79 -43 65 -55
                109 -36 129 11 13 31 97 31 132 0 17 8 33 20 41 14 8 20 23 20 48 0 39 15 104
                33 141 13 28 4 132 -16 168 -11 21 -12 38 -5 69 6 27 6 85 -2 166 -10 116 -14
                129 -45 176 -36 55 -133 134 -218 177 -81 41 -225 71 -287 60z"
								/>
							</g>

							{/*benny*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(22)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M17165 6940 c-22 -4 -53 -13 -70 -19 -16 -6 -60 -20 -97 -31 -51 -16
                -75 -31 -102 -61 -20 -21 -36 -45 -36 -51 0 -7 -25 -65 -56 -130 -53 -110 -56
                -122 -56 -192 0 -40 6 -93 12 -116 6 -23 10 -74 9 -114 -4 -145 72 -396 146
                -484 22 -27 24 -34 14 -53 -6 -12 -19 -50 -28 -83 -15 -57 -20 -63 -77 -102
                -34 -23 -76 -45 -95 -49 -19 -4 -46 -16 -61 -26 -14 -11 -31 -19 -37 -19 -6 0
                -19 -4 -29 -9 -29 -16 -105 -48 -157 -67 -27 -10 -68 -29 -89 -42 -22 -14 -55
                -31 -73 -38 -18 -8 -33 -18 -33 -23 0 -5 -31 -22 -70 -37 -116 -45 -111 -33
                -129 -299 -6 -83 -15 -164 -20 -180 -16 -55 -34 -190 -37 -285 -2 -90 -10
                -162 -33 -310 -18 -110 -31 -249 -36 -375 -8 -199 -17 -329 -23 -340 -4 -5
                -10 -100 -14 -210 -4 -110 -13 -281 -18 -380 -6 -99 -13 -250 -15 -335 -3 -85
                -10 -168 -15 -184 -6 -16 -10 -50 -10 -75 0 -47 39 -255 64 -345 36 -125 59
                -247 60 -321 3 -90 31 -245 54 -290 16 -33 35 -114 57 -255 13 -80 38 -171 96
                -354 5 -15 16 -85 25 -155 8 -69 27 -168 40 -219 14 -51 24 -109 23 -130 -1
                -20 -2 -63 -1 -95 l2 -57 1058 2 c705 2 1056 6 1055 13 -8 51 -28 258 -31 330
                -2 50 -6 146 -10 214 -4 68 -3 203 1 300 l8 176 32 28 c17 15 70 40 116 55 52
                16 93 37 107 52 13 14 37 40 54 58 l30 33 -4 132 c-3 93 -11 154 -26 207 -41
                146 -43 163 -19 183 12 9 27 17 35 17 21 0 34 34 34 92 0 71 28 362 41 418 6
                25 17 52 26 62 19 21 10 87 -17 120 -16 20 -16 26 -4 50 11 21 14 100 14 400
                0 205 -1 402 -2 438 0 36 0 119 1 185 2 107 -7 300 -26 515 -3 41 -12 84 -19
                95 -6 11 -15 45 -19 75 -20 173 -49 339 -76 445 -23 89 -32 156 -38 260 -9
                164 -23 206 -73 224 -18 7 -46 19 -61 27 -16 8 -33 14 -37 14 -5 0 -89 39
                -187 86 -166 80 -360 164 -380 164 -5 0 -40 33 -78 73 -61 63 -75 86 -108 170
                l-39 97 23 75 c19 67 26 77 56 92 47 22 68 52 92 133 27 88 21 167 -15 201
                -13 12 -24 32 -24 44 0 12 -7 64 -16 116 -17 100 -51 176 -126 276 -48 66
                -166 144 -248 165 -45 12 -111 28 -130 32 -8 2 -33 0 -55 -4z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(23)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M13730 7750 c-30 -32 -63 -59 -72 -59 -9 -1 -20 -5 -23 -11 -3 -5
                -20 -10 -36 -10 -16 0 -39 -8 -50 -19 -17 -15 -37 -19 -119 -19 l-99 -1 -56
                -55 -55 -56 0 -120 c0 -107 2 -123 20 -142 16 -17 20 -36 20 -90 0 -37 6 -85
                14 -105 14 -40 28 -113 47 -251 11 -81 12 -83 56 -119 25 -20 59 -57 76 -82
                30 -44 32 -52 35 -156 4 -98 1 -116 -18 -158 -44 -93 -286 -256 -346 -233 -10
                4 -26 -4 -44 -24 -15 -16 -32 -30 -36 -30 -4 0 -19 -11 -33 -24 -33 -30 -318
                -176 -393 -200 -20 -6 -24 -46 -19 -172 2 -44 -1 -74 -8 -78 -7 -5 -11 -44
                -11 -102 0 -53 -4 -103 -9 -112 -13 -25 -34 -240 -34 -358 -1 -108 2 -117 53
                -141 14 -6 40 -15 58 -18 22 -5 52 -26 88 -61 29 -30 58 -54 63 -54 5 0 33
                -24 62 -52 l54 -53 139 0 139 0 -2 90 c-1 50 3 113 9 140 6 28 15 85 20 128
                15 130 56 188 170 239 36 16 76 35 90 43 14 8 41 23 61 34 25 14 42 33 53 62
                25 61 46 184 46 265 0 56 6 84 26 128 25 54 25 60 20 213 -3 87 -8 196 -12
                243 -4 64 -2 87 8 95 7 5 28 40 47 78 19 37 37 67 40 67 9 0 27 48 42 110 7
                30 21 70 31 88 10 18 18 41 18 52 0 22 144 170 165 170 8 0 15 4 15 8 0 11
                117 72 137 72 8 0 32 18 53 40 21 22 44 40 50 40 27 0 40 30 40 89 0 33 5 63
                10 66 6 3 10 21 10 40 0 19 5 37 10 40 6 3 10 35 10 71 0 61 -2 66 -40 105
                -34 35 -40 48 -40 85 0 23 -4 46 -10 49 -5 3 -10 14 -10 24 0 21 -27 78 -41
                87 -5 3 -16 0 -24 -6 -17 -14 -29 -7 -77 43 -14 15 -35 27 -46 27 -11 0 -43
                23 -71 50 l-51 50 -83 -1 -82 0 -55 -59z"
								/>
								<path
									d="M14886 5982 c-3 -6 0 -30 9 -54 18 -52 18 -58 4 -58 -16 0 -33 -20
                -53 -64 -14 -30 -17 -54 -13 -102 4 -61 6 -63 72 -129 65 -65 69 -67 117 -67
                27 0 55 5 61 11 6 6 21 11 33 11 20 0 23 7 30 56 14 112 -9 284 -38 284 -4 0
                -14 14 -23 30 -9 17 -33 41 -54 55 -41 28 -134 45 -145 27z"
								/>
							</g>
						</svg>
					</SvgTablet>

					<SvgPhone>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="80vw"
							viewBox="0 0 1911.000000 1147.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							{/*Andrew */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(1)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M1620 9131 c-128 -35 -204 -89 -297 -212 -64 -84 -76 -125 -68 -241
                4 -69 2 -104 -6 -120 -26 -47 -11 -208 25 -276 23 -43 63 -80 95 -87 29 -6 29
                -6 36 -100 8 -108 1 -178 -21 -196 -8 -7 -21 -27 -29 -45 -13 -32 -62 -83
                -151 -159 -26 -22 -56 -48 -66 -58 -26 -24 -122 -57 -168 -57 -20 0 -41 -5
                -46 -10 -6 -6 -48 -24 -95 -41 -87 -32 -112 -40 -189 -59 -87 -23 -213 -86
                -238 -119 -23 -32 -58 -129 -79 -218 -12 -54 -17 -150 -20 -463 -6 -512 9
                -716 77 -1027 43 -197 80 -250 246 -355 63 -39 120 -78 126 -86 9 -10 2 -32
                -30 -98 -26 -52 -42 -98 -42 -120 0 -60 59 -213 117 -301 74 -114 153 -271
                153 -303 0 -23 77 -190 124 -270 8 -14 55 -99 105 -190 91 -165 180 -280 219
                -280 8 0 23 -7 33 -16 30 -27 39 -9 33 69 -4 49 -1 101 10 160 9 49 16 112 15
                140 -1 29 1 77 5 107 7 62 -3 150 -34 295 -19 87 -21 120 -16 250 3 83 8 166
                11 185 3 19 10 96 15 170 11 141 22 243 39 345 32 193 76 414 86 440 12 29 55
                63 173 133 29 18 58 32 63 32 5 0 17 4 27 9 56 31 139 61 167 61 18 0 39 8 47
                18 30 33 92 167 110 237 9 38 29 113 43 165 17 61 30 143 36 230 5 74 19 178
                29 230 11 52 25 120 30 150 6 31 24 76 40 100 17 25 30 55 30 68 0 12 11 49
                25 82 14 33 25 68 25 79 0 22 -44 61 -69 61 -10 0 -21 4 -26 8 -6 5 -32 17
                -60 27 -27 10 -62 28 -77 41 -15 12 -31 24 -35 26 -4 1 -26 28 -49 58 -35 48
                -42 66 -53 143 -15 99 -15 98 65 192 46 55 114 172 114 198 0 9 11 52 25 94
                14 43 31 93 36 112 11 34 24 258 22 382 -2 126 -91 278 -183 314 -25 10 -61
                30 -80 45 -63 48 -123 63 -260 66 -95 2 -141 -2 -190 -15z"
								/>
								<path
									d="M692 4458 c-11 -24 -47 -92 -81 -153 l-62 -110 1 -100 c1 -55 0 -116
                -2 -135 -3 -34 -1 -36 72 -75 66 -35 76 -44 82 -75 25 -123 42 -224 49 -286 4
                -39 22 -134 40 -210 31 -134 32 -147 34 -369 1 -177 6 -255 21 -340 21 -124
                22 -148 5 -665 -7 -232 -19 -418 -31 -510 -10 -80 -21 -199 -25 -265 -4 -66
                -8 -138 -10 -160 -2 -22 -9 -187 -15 -367 -13 -367 -13 -371 62 -521 5 -10 12
                -41 15 -68 l6 -49 543 0 544 0 1 53 c1 28 3 212 4 407 2 195 7 630 11 965 5
                336 8 630 8 655 0 46 -53 162 -160 351 -24 42 -143 274 -265 515 -122 242
                -266 522 -319 624 -54 102 -170 328 -259 504 -163 320 -222 426 -240 426 -6 0
                -19 -19 -29 -42z"
								/>
							</g>

							{/*Kapil */}
							<g
								fillOpacity={0}
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(2)}
								onMouseOut={() => setHoverID(0)}
							>
								<path
									d="M4724 6955 c-12 -19 -27 -23 -100 -29 -52 -4 -91 -2 -98 3 -7 6 -22
                8 -34 4 -12 -3 -28 0 -35 6 -8 6 -17 8 -21 4 -3 -4 -35 -6 -71 -5 -69 2 -134
                -17 -171 -50 -11 -10 -24 -18 -30 -18 -16 -1 -194 -177 -194 -192 0 -8 -11
                -25 -25 -38 -14 -13 -25 -29 -25 -36 0 -6 -7 -18 -17 -25 -9 -8 -27 -36 -39
                -64 -13 -27 -33 -57 -46 -66 -21 -16 -22 -25 -23 -151 -1 -93 -6 -150 -18
                -188 -9 -30 -17 -82 -19 -114 -3 -58 -2 -60 31 -83 19 -13 46 -23 60 -23 19 0
                32 -9 43 -28 9 -15 44 -58 78 -95 56 -61 65 -67 101 -67 39 0 41 -2 64 -54 27
                -61 25 -114 -7 -155 -10 -13 -18 -27 -18 -32 0 -17 -88 -128 -140 -176 -8 -8
                -53 -37 -100 -65 -46 -27 -97 -60 -112 -73 -42 -35 -287 -152 -381 -182 -133
                -41 -173 -66 -201 -122 -39 -76 -53 -162 -60 -361 -4 -102 -9 -232 -11 -290
                -15 -337 -15 -520 -1 -735 13 -207 18 -239 46 -325 17 -52 42 -138 56 -190 13
                -52 37 -114 52 -138 15 -24 38 -64 52 -88 14 -24 49 -85 79 -135 l54 -92 -12
                -56 c-7 -31 -18 -97 -25 -146 -8 -50 -26 -138 -40 -195 -15 -58 -36 -168 -46
                -245 -11 -77 -29 -167 -40 -200 -11 -33 -45 -145 -76 -250 -57 -197 -65 -222
                -96 -292 -27 -63 -27 -82 3 -105 37 -28 149 -37 168 -14 17 20 37 21 45 1 3
                -8 12 -15 19 -15 11 0 16 -26 21 -112 9 -145 24 -341 33 -441 5 -43 4 -85 0
                -93 -4 -8 -12 -66 -17 -129 -8 -97 -7 -121 6 -155 l16 -40 912 0 912 0 18 118
                c17 120 35 211 62 317 29 115 35 140 45 194 5 30 12 57 14 61 2 3 9 46 15 95
                6 49 16 96 23 104 9 10 12 89 12 281 0 241 2 270 18 287 20 23 22 46 5 72 -15
                24 6 77 77 196 102 171 183 364 200 479 4 27 22 79 40 115 41 83 51 120 70
                255 9 60 20 117 25 127 22 39 1 231 -33 311 -19 46 -34 118 -47 233 -11 104
                -22 162 -46 260 -15 61 -16 80 -4 162 10 74 10 118 0 221 -9 95 -9 156 -1 237
                5 61 13 190 16 287 8 205 -2 277 -43 322 -42 45 -149 110 -357 216 -225 114
                -293 162 -335 234 -16 29 -38 60 -49 70 -11 10 -22 38 -26 67 -4 27 -15 60
                -26 73 -26 33 -25 99 1 136 11 16 27 46 34 68 13 36 43 101 52 111 2 2 10 -2
                18 -8 19 -16 26 -11 62 41 15 24 38 55 50 70 18 22 21 38 19 105 -2 106 32
                267 67 312 14 18 17 33 12 55 -4 17 -6 58 -6 90 2 57 -29 190 -49 211 -5 5 -9
                20 -9 33 0 13 -13 36 -28 50 -61 58 -102 91 -119 96 -10 3 -26 19 -35 36 -12
                21 -25 30 -42 30 -15 0 -27 7 -31 19 -3 10 -27 41 -53 68 -55 60 -95 73 -118
                38z"
								/>
							</g>

							{/* Ashley */}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(3)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6765 6543 c-103 -44 -210 -128 -265 -208 -44 -64 -109 -273 -121
                -390 -6 -55 -14 -118 -19 -141 -24 -105 -40 -468 -26 -575 l8 -66 -93 -45
                c-52 -25 -114 -53 -139 -64 -75 -31 -242 -124 -291 -161 -56 -42 -69 -68 -69
                -131 0 -26 -6 -57 -14 -68 -11 -15 -14 -45 -12 -115 2 -54 -4 -135 -13 -189
                -20 -122 -23 -922 -3 -942 7 -7 12 -24 12 -40 0 -15 7 -52 15 -84 8 -31 17
                -97 21 -148 4 -53 15 -112 27 -141 11 -27 23 -70 28 -95 4 -25 12 -70 17 -101
                6 -34 7 -70 2 -90 -40 -152 -50 -204 -50 -252 0 -50 -23 -134 -53 -192 -11
                -22 -33 -92 -49 -155 -29 -121 -79 -234 -174 -402 -31 -53 -64 -120 -75 -148
                -17 -46 -18 -53 -4 -79 13 -27 13 -31 -8 -57 -22 -28 -22 -33 -19 -288 2 -218
                0 -261 -12 -275 -9 -10 -19 -55 -26 -111 -6 -52 -17 -120 -25 -150 -32 -129
                -55 -236 -55 -252 0 -10 -9 -44 -19 -75 -19 -59 -37 -165 -44 -261 l-4 -52
                1287 0 1287 0 -3 108 c-2 66 3 141 12 197 9 50 20 128 25 175 5 47 14 121 19
                165 6 44 14 145 20 225 13 189 19 256 25 305 3 22 5 43 5 47 0 4 12 29 27 55
                61 110 70 138 77 239 7 98 28 182 70 284 15 36 40 99 56 140 15 41 38 102 50
                135 23 61 59 299 66 430 1 39 6 104 10 145 5 58 1 98 -15 175 -16 79 -22 147
                -25 325 -4 224 -22 376 -51 446 -7 17 -16 49 -19 71 -4 22 -27 68 -51 104 -55
                80 -115 197 -115 224 0 12 -4 25 -9 31 -14 14 -106 280 -126 364 -55 231 -77
                305 -113 376 -22 44 -51 112 -66 153 -24 67 -27 87 -26 205 3 254 -47 714 -97
                896 -14 52 -29 115 -32 140 -8 57 -66 161 -125 227 -52 57 -155 124 -236 151
                -37 13 -98 21 -185 25 -124 6 -133 5 -190 -20z"
								/>
							</g>

							{/*ragini*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(4)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M2758 7581 c-108 -26 -185 -76 -320 -206 -46 -45 -128 -227 -150
                -334 -10 -52 -22 -99 -25 -105 -4 -5 -10 -69 -14 -141 -12 -210 -26 -283 -103
                -538 -45 -153 -71 -201 -111 -205 -17 -2 -43 -9 -60 -16 -16 -8 -57 -26 -90
                -41 -166 -74 -262 -135 -300 -191 -11 -17 -26 -62 -34 -100 -7 -38 -21 -114
                -31 -169 -11 -55 -26 -152 -35 -215 -8 -63 -18 -128 -21 -145 -9 -49 -35 -400
                -41 -552 -5 -141 1 -197 38 -323 15 -49 14 -192 -1 -350 -7 -74 -14 -180 -15
                -235 l-3 -100 86 -175 c48 -96 96 -197 106 -223 21 -55 61 -107 82 -107 22 0
                84 -104 84 -141 0 -21 32 -94 92 -208 131 -253 146 -280 184 -338 19 -28 34
                -55 34 -60 0 -4 24 -45 54 -90 30 -46 72 -120 95 -165 23 -46 63 -119 90 -164
                55 -92 168 -301 292 -539 17 -33 46 -78 63 -100 47 -60 83 -117 91 -145 4 -14
                24 -56 45 -95 21 -38 57 -106 80 -150 85 -162 151 -281 170 -305 16 -21 22
                -23 46 -15 61 22 96 160 74 289 -10 61 -18 81 -37 94 -71 50 -73 52 -63 75 36
                90 77 208 102 297 33 120 36 131 78 260 17 52 35 131 41 175 14 114 37 236 64
                340 13 50 26 119 30 155 3 36 13 88 22 116 21 67 13 102 -43 199 -26 44 -57
                101 -69 126 -13 25 -34 59 -48 75 -29 34 -51 84 -61 135 -3 19 -26 98 -51 174
                -39 119 -47 158 -56 274 -12 164 -12 705 0 816 5 44 12 154 16 245 7 216 22
                317 54 382 31 62 64 83 190 123 105 34 320 134 375 176 61 46 179 119 191 119
                19 0 155 157 171 197 9 21 24 47 34 58 29 33 32 88 8 148 -31 77 -45 89 -89
                82 -34 -6 -39 -3 -82 45 -26 29 -61 74 -78 100 -27 42 -37 49 -74 55 -24 3
                -49 13 -56 21 -8 10 -21 13 -36 9 -27 -6 -101 23 -122 48 -18 23 -40 129 -41
                197 0 30 -11 100 -24 155 -13 55 -27 123 -31 150 -13 91 -54 326 -59 334 -3 4
                -16 57 -30 117 -14 60 -29 126 -34 146 -11 42 -134 273 -162 303 -10 11 -23
                32 -29 47 -7 18 -28 36 -59 52 -27 14 -64 38 -83 53 -18 15 -47 29 -63 30
                -158 12 -175 11 -248 -6z"
								/>
							</g>

							{/*lizzy*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(5)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M3590 8080 c-100 -8 -118 -13 -216 -61 -73 -36 -217 -173 -245 -233
                -10 -22 -34 -62 -53 -87 -42 -57 -54 -110 -33 -142 8 -13 47 -40 86 -61 39
                -20 71 -44 71 -51 0 -8 16 -36 37 -62 46 -61 125 -228 148 -313 10 -36 28
                -105 42 -155 22 -82 36 -159 78 -420 7 -49 21 -120 29 -156 9 -37 20 -109 26
                -160 5 -52 17 -116 26 -142 14 -40 24 -52 68 -77 28 -17 62 -30 76 -30 14 -1
                36 -7 50 -15 28 -16 86 -20 94 -6 14 21 8 179 -8 234 -24 79 -18 190 19 374 3
                11 32 53 65 93 33 39 60 76 60 81 0 25 189 199 216 199 3 0 18 9 34 20 40 28
                43 66 16 183 -31 130 -42 184 -56 277 -6 41 -20 98 -30 125 -70 185 -96 246
                -126 295 -18 30 -36 67 -40 83 -6 26 -56 77 -75 77 -5 0 -43 27 -84 60 -69 54
                -127 82 -165 78 -8 0 -58 -4 -110 -8z"
								/>
							</g>

							{/*anish*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(6)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M5186 7794 c-21 -8 -55 -27 -75 -42 -20 -15 -45 -33 -56 -40 -92 -58
                -114 -76 -125 -103 -7 -17 -34 -48 -59 -69 -72 -61 -84 -109 -77 -296 10 -256
                18 -319 44 -347 13 -13 26 -37 31 -52 5 -19 17 -32 37 -39 17 -6 61 -38 98
                -71 37 -33 79 -66 93 -73 17 -9 23 -20 20 -32 -3 -10 1 -27 8 -37 6 -10 23
                -49 38 -88 21 -57 25 -87 25 -165 -1 -52 -4 -100 -9 -106 -5 -6 -20 -44 -34
                -85 -20 -56 -27 -102 -32 -194 -6 -119 -6 -121 -45 -177 -25 -38 -46 -58 -58
                -58 -22 0 -73 -63 -96 -120 -8 -19 -22 -42 -31 -52 -8 -9 -19 -38 -24 -62 -7
                -40 -5 -52 21 -102 17 -31 30 -68 30 -83 1 -15 24 -58 58 -106 66 -92 156
                -165 272 -222 41 -20 104 -53 140 -74 36 -21 81 -44 100 -50 19 -7 71 -34 116
                -61 100 -59 126 -58 182 10 106 129 231 232 281 232 11 0 22 4 25 9 3 4 25 11
                48 15 26 4 58 20 84 41 23 19 49 35 57 35 8 0 26 11 39 24 24 21 26 31 32 142
                3 65 10 204 16 308 10 173 10 190 -6 207 -9 11 -22 19 -28 19 -22 0 -192 88
                -210 109 -11 12 -35 31 -53 42 -18 11 -54 47 -79 80 -44 57 -92 89 -135 89
                -12 0 -38 26 -70 70 -28 39 -55 70 -59 70 -11 0 -50 126 -50 162 0 17 9 45 19
                62 11 17 27 58 37 91 21 74 40 105 66 105 33 0 75 28 86 57 9 25 26 114 52
                291 5 29 16 64 24 77 9 13 16 33 16 43 0 11 9 31 21 45 26 34 18 86 -22 144
                -16 23 -29 44 -29 48 0 4 -14 26 -31 50 -18 24 -48 77 -68 117 -36 73 -37 73
                -121 116 -46 23 -99 57 -118 75 l-33 32 -172 2 c-128 1 -182 -2 -211 -13z"
								/>
							</g>

							{/*anthony*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(7)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M4285 9156 c-114 -40 -267 -105 -303 -129 -39 -26 -118 -148 -137
                -211 -7 -24 -23 -62 -34 -84 -28 -55 -27 -94 4 -130 17 -21 26 -47 31 -88 3
                -33 13 -70 22 -84 9 -14 19 -41 23 -60 9 -43 50 -143 68 -164 8 -9 25 -22 39
                -29 38 -18 54 -76 50 -178 -2 -66 -7 -92 -20 -106 -25 -27 -22 -51 10 -98 15
                -23 49 -97 76 -165 26 -69 55 -140 62 -158 8 -18 14 -44 14 -59 0 -14 4 -42 9
                -62 5 -20 15 -70 21 -111 20 -131 51 -254 71 -282 10 -15 19 -32 19 -37 0 -26
                48 -32 259 -32 152 -1 225 3 241 11 23 12 23 12 16 194 -9 223 -20 296 -52
                353 -21 35 -25 51 -19 80 4 22 1 63 -8 102 -9 36 -24 102 -34 146 -15 65 -17
                98 -10 175 9 119 50 244 88 271 58 41 114 269 113 465 -1 113 -3 126 -28 175
                -16 30 -45 74 -65 99 -20 25 -48 61 -61 80 -37 55 -60 70 -112 70 -38 0 -54 6
                -82 30 -31 28 -43 31 -118 36 -70 4 -94 1 -153 -20z"
								/>
							</g>

							{/*manan*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(8)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M6115 8753 c-65 -14 -246 -77 -277 -96 -40 -24 -133 -124 -165 -178
                -32 -52 -51 -126 -57 -219 -4 -56 -13 -99 -26 -125 -24 -47 -26 -99 -4 -151
                19 -46 98 -150 123 -164 14 -7 20 -25 23 -70 4 -50 9 -65 35 -93 17 -17 47
                -66 68 -107 20 -41 44 -84 54 -95 36 -41 82 -125 88 -159 4 -28 -1 -51 -25
                -99 -32 -66 -69 -231 -79 -349 -7 -77 -25 -108 -66 -108 -35 0 -64 -26 -82
                -73 -19 -50 -8 -118 28 -177 12 -19 42 -82 67 -140 89 -204 172 -346 222 -381
                18 -12 44 -32 58 -45 30 -28 157 -98 223 -125 l48 -19 9 26 c6 14 15 72 21
                128 12 119 69 325 105 379 28 43 127 139 177 172 63 41 127 59 209 57 70 -2
                78 0 89 20 15 28 5 127 -20 182 -20 45 -70 90 -141 126 -60 30 -120 78 -120
                96 0 8 -32 49 -72 92 -39 42 -96 113 -125 157 -30 44 -70 103 -90 130 -34 49
                -35 52 -30 122 6 79 14 99 64 158 19 22 52 78 75 125 22 47 50 95 61 108 20
                21 22 33 20 125 -2 68 4 136 17 204 11 56 21 112 21 125 2 50 -22 130 -67 217
                -48 95 -95 147 -142 156 -15 3 -38 12 -52 20 -81 47 -106 55 -175 54 -38 -1
                -79 -3 -90 -6z"
								/>
							</g>

							{/*kiran*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(9)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7975 7711 c-11 -5 -36 -10 -56 -10 -69 -2 -99 -13 -156 -62 -32 -26
                -74 -62 -94 -78 -76 -65 -106 -133 -129 -301 -5 -36 -7 -84 -4 -107 5 -32 1
                -50 -15 -76 -24 -39 -27 -100 -7 -138 7 -14 16 -36 19 -50 4 -13 27 -47 52
                -76 25 -28 45 -56 45 -62 0 -5 9 -16 20 -24 31 -22 50 -80 50 -155 l0 -69 -42
                -12 c-23 -7 -76 -35 -116 -62 -41 -27 -92 -54 -113 -59 -22 -6 -39 -16 -39
                -23 0 -7 17 -37 37 -67 35 -52 53 -103 75 -215 5 -27 18 -86 29 -130 10 -44
                23 -111 28 -150 6 -38 17 -110 26 -160 8 -49 15 -130 15 -180 0 -49 7 -117 14
                -150 8 -33 17 -89 21 -125 4 -36 20 -98 36 -138 16 -40 29 -78 29 -84 0 -22
                49 -75 82 -88 34 -13 98 -67 98 -82 0 -5 13 -37 30 -72 32 -69 63 -96 110 -96
                56 0 90 69 127 259 6 33 68 92 125 120 27 12 50 27 54 32 3 5 12 9 20 9 8 0
                33 9 54 19 22 10 62 24 90 31 63 15 129 84 154 160 15 46 33 205 32 285 0 53
                24 214 64 420 53 277 53 279 31 299 -20 18 -141 56 -179 56 -27 0 -90 41 -143
                93 -50 48 -77 109 -85 190 -6 62 -4 73 26 140 18 39 43 83 56 97 72 76 87 105
                99 188 6 44 4 57 -11 74 -17 18 -19 35 -16 137 4 164 -6 206 -70 287 -29 37
                -70 84 -91 104 -53 51 -146 99 -188 98 -19 0 -65 2 -104 6 -38 3 -79 2 -90 -3z"
								/>
							</g>

							{/*zevik*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(10)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M7068 9353 c-43 -4 -54 -10 -121 -76 -40 -40 -84 -90 -97 -112 -12
                -22 -33 -56 -46 -75 -32 -48 -55 -145 -57 -240 -2 -65 -5 -80 -19 -83 -49 -13
                -73 -121 -46 -210 16 -53 84 -125 126 -133 38 -8 47 -34 56 -161 5 -77 4 -83
                -18 -100 -13 -10 -31 -34 -41 -53 -9 -19 -75 -92 -146 -163 -109 -108 -134
                -138 -162 -200 -19 -39 -54 -97 -80 -128 -41 -51 -47 -63 -57 -137 l-12 -82
                53 -73 c30 -39 67 -92 83 -117 16 -25 37 -54 47 -65 10 -11 47 -52 83 -92 36
                -40 66 -80 66 -90 0 -20 71 -78 138 -112 55 -28 107 -75 121 -108 6 -16 17
                -64 24 -108 l13 -80 65 -6 c82 -7 168 -47 268 -122 41 -32 79 -57 85 -57 26 1
                65 49 85 105 21 61 20 93 -6 130 -7 11 -13 29 -13 40 0 12 -11 31 -24 44 -20
                19 -24 35 -29 112 -10 134 24 265 118 464 30 63 55 124 55 137 1 21 22 54 115
                175 16 21 52 54 80 74 31 22 51 43 53 58 4 27 -32 69 -95 109 -23 14 -52 44
                -65 65 -13 21 -37 61 -55 88 -17 26 -35 63 -38 81 -4 18 -13 42 -21 53 -9 15
                -10 45 -4 125 9 123 21 160 50 160 53 0 115 59 160 153 31 66 24 146 -17 189
                -26 27 -28 34 -26 106 1 42 3 94 4 114 2 25 -7 61 -28 105 -17 38 -37 88 -45
                113 -18 56 -74 97 -145 107 -26 3 -81 23 -121 44 -72 38 -76 39 -170 37 -54
                -1 -118 -3 -144 -5z"
								/>
							</g>

							{/*nakul*/}

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(11)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M8640 8521 c0 -5 -11 -11 -23 -15 -13 -3 -40 -19 -61 -35 -21 -17
                -52 -35 -69 -41 -50 -16 -146 -159 -147 -217 0 -29 -16 -123 -40 -228 -5 -23
                -5 -59 0 -85 5 -25 9 -48 10 -51 0 -4 -11 -10 -24 -13 -14 -3 -28 -16 -32 -29
                -4 -12 -10 -24 -14 -27 -4 -3 -10 -24 -13 -48 -4 -37 -2 -46 21 -68 15 -13 35
                -27 45 -30 9 -3 17 -9 17 -14 0 -5 40 -50 89 -100 100 -103 101 -106 106 -270
                2 -59 9 -113 20 -144 15 -41 16 -54 6 -82 -9 -25 -9 -39 -1 -55 16 -29 -3 -73
                -44 -101 -53 -38 -96 -84 -96 -103 0 -10 -12 -52 -26 -94 -43 -125 -22 -180
                115 -298 85 -74 143 -99 247 -110 51 -5 54 -5 64 21 5 15 10 39 10 54 0 42 69
                149 125 195 28 22 77 68 111 102 55 55 69 63 140 84 43 12 92 25 107 28 37 7
                30 22 -29 59 -66 43 -160 113 -196 147 l-30 27 4 135 c3 130 4 134 31 162 15
                16 27 32 27 36 0 4 8 16 17 27 10 11 25 39 34 62 13 34 33 57 56 64 6 1 45
                164 50 207 5 46 4 48 -26 60 -29 11 -31 14 -31 63 0 34 5 54 13 57 22 8 34
                103 33 242 -2 117 -4 136 -26 180 -33 66 -87 95 -176 95 -59 0 -64 2 -85 33
                -28 40 -38 47 -66 47 -12 0 -33 11 -47 25 -21 20 -35 25 -79 25 -31 0 -61 6
                -73 15 -21 16 -44 19 -44 6z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(12)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9360 6773 c-14 -3 -31 -9 -37 -15 -7 -6 -84 -46 -170 -90 -87 -44
                -164 -89 -172 -101 -9 -12 -36 -42 -61 -67 -52 -51 -109 -145 -121 -199 -4
                -20 -19 -67 -33 -106 -13 -38 -27 -94 -30 -124 -4 -29 -8 -57 -11 -61 -3 -6
                -13 -44 -46 -195 -4 -22 -13 -89 -19 -150 -6 -60 -15 -141 -20 -180 -6 -38
                -12 -99 -15 -134 -7 -89 -40 -157 -102 -209 -28 -23 -57 -42 -65 -42 -8 0 -18
                -4 -24 -10 -5 -5 -55 -27 -110 -48 -86 -32 -108 -45 -151 -90 -43 -45 -51 -60
                -57 -105 -4 -28 -13 -65 -21 -82 -63 -141 -66 -644 -6 -899 6 -22 8 -43 5 -48
                -3 -4 0 -15 5 -25 6 -10 25 -103 42 -208 27 -158 32 -216 32 -345 0 -85 -5
                -166 -10 -180 -6 -15 -7 -53 -2 -95 4 -38 8 -110 9 -160 0 -79 3 -94 24 -120
                19 -24 26 -27 38 -17 13 10 14 5 6 -41 -6 -28 -11 -81 -13 -117 -2 -36 -10
                -96 -19 -135 -8 -38 -22 -116 -30 -172 -10 -63 -25 -121 -40 -150 -13 -27 -29
                -69 -36 -93 -7 -25 -29 -81 -50 -125 -58 -121 -100 -270 -93 -327 7 -62 -12
                -138 -49 -189 -47 -66 -59 -112 -69 -284 -16 -274 -36 -429 -84 -650 -14 -66
                -28 -131 -30 -145 -9 -55 -24 -157 -30 -198 l-5 -42 1274 0 1274 0 11 68 c13
                78 31 267 36 366 2 38 8 97 14 130 6 34 15 93 22 131 6 39 15 93 19 120 5 28
                9 89 9 137 1 48 6 99 11 114 6 15 13 78 16 138 3 61 7 117 10 125 14 42 27
                176 29 323 2 91 7 174 13 183 5 10 48 32 95 51 48 18 101 43 118 56 29 21 31
                26 26 68 -6 41 -82 285 -111 355 -24 56 -49 160 -53 221 -6 77 8 129 52 194
                19 29 35 57 35 63 0 5 10 24 23 41 69 92 106 224 90 321 -7 35 -7 71 -2 89 15
                53 10 451 -7 551 -9 50 -18 137 -20 195 -4 88 -1 120 19 199 25 97 23 165 -5
                198 -27 34 -77 207 -78 273 0 20 -7 46 -16 59 -9 13 -18 46 -20 75 -6 73 -14
                107 -34 136 -23 33 -75 138 -85 170 -17 57 -96 210 -130 250 -20 24 -48 64
                -61 89 -14 25 -38 66 -54 91 -66 99 -108 202 -119 290 -18 140 -20 147 -56
                190 -19 23 -35 52 -35 65 0 12 -7 28 -15 35 -8 7 -15 18 -15 24 0 30 -116 241
                -159 289 -26 29 -56 66 -66 83 -26 41 -152 153 -190 169 -108 46 -151 56 -195
                48z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(13)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M9050 9559 c-97 -23 -256 -99 -304 -145 -18 -18 -40 -47 -49 -66 -9
                -19 -26 -43 -38 -54 -39 -35 -96 -166 -119 -274 -12 -56 -10 -121 9 -220 22
                -120 39 -154 86 -171 32 -12 35 -16 35 -54 0 -60 16 -75 80 -80 91 -7 154 -34
                192 -83 26 -34 38 -42 65 -42 46 0 134 -20 159 -37 46 -30 63 -98 67 -264 3
                -129 0 -163 -15 -208 -22 -67 -24 -120 -3 -127 39 -15 -3 -251 -51 -289 -7 -5
                -31 -45 -54 -89 -22 -43 -51 -92 -64 -110 -20 -25 -25 -48 -31 -127 -9 -115 1
                -150 53 -197 153 -138 244 -192 322 -192 30 0 52 6 60 15 8 9 13 64 15 162 3
                166 12 205 55 223 16 7 35 22 43 34 8 11 43 35 78 53 60 30 273 100 364 119
                42 10 41 8 62 113 2 13 21 40 41 60 55 53 72 82 72 121 0 40 -34 120 -50 120
                -6 0 -35 11 -64 24 -29 13 -95 38 -146 56 -52 17 -120 46 -151 66 -31 19 -76
                41 -99 49 -47 16 -213 104 -271 142 -35 23 -36 26 -47 116 -20 166 14 301 85
                335 29 14 42 31 69 89 18 39 38 98 45 130 7 32 19 72 28 88 12 24 15 67 15
                210 l1 180 -32 55 c-41 70 -85 116 -127 134 -18 7 -60 41 -93 75 -33 33 -72
                65 -87 71 -40 15 -110 11 -206 -11z"
								/>
								<path
									d="M8195 8005 c-47 -23 -112 -43 -195 -60 -143 -29 -248 -61 -280 -85
                l-22 -16 39 -38 c21 -21 63 -50 93 -65 52 -25 63 -26 219 -26 l164 0 11 45 c8
                33 18 48 39 58 27 13 27 13 27 118 0 77 -3 104 -12 104 -7 -1 -44 -16 -83 -35z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(14)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10305 7661 c-27 -4 -63 -15 -80 -26 -52 -34 -166 -138 -180 -165
                -13 -26 -29 -97 -45 -204 -5 -32 -16 -67 -26 -77 -13 -14 -19 -51 -27 -146
                l-10 -128 51 -101 c32 -64 63 -111 83 -127 25 -19 37 -41 52 -93 28 -101 32
                -191 10 -231 -61 -108 -107 -173 -138 -198 -43 -32 -42 -49 5 -118 40 -59 48
                -84 64 -191 15 -98 39 -155 115 -276 22 -36 48 -78 57 -94 9 -16 34 -52 55
                -79 44 -55 108 -177 150 -286 15 -40 46 -102 68 -138 30 -47 43 -79 47 -121
                11 -95 18 -105 62 -97 20 4 55 15 77 24 22 10 66 28 98 41 48 19 70 37 131
                106 94 108 102 133 87 286 -22 222 -19 236 73 473 20 50 35 100 36 112 0 24
                -55 93 -74 93 -7 0 -21 9 -31 20 -10 11 -23 20 -29 20 -47 2 -166 143 -166
                197 0 18 -5 52 -11 76 -17 61 10 178 55 241 18 26 41 76 51 112 15 54 21 64
                40 64 12 0 29 8 37 18 37 41 88 179 88 236 0 28 24 73 50 93 33 25 16 125 -51
                306 -16 42 -32 104 -36 137 -8 84 -43 120 -138 144 -38 9 -108 29 -155 43
                -199 60 -213 63 -305 62 -49 -1 -112 -5 -140 -8z"
								/>
							</g>

							{/*rachelle*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(15)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11660 6664 c-19 -9 -54 -26 -78 -37 -57 -27 -225 -209 -280 -302
                -45 -76 -135 -297 -146 -358 -10 -54 -51 -172 -106 -309 -73 -177 -75 -194
                -60 -344 17 -172 17 -233 -2 -269 -29 -53 -160 -179 -208 -199 -156 -67 -191
                -87 -201 -114 -13 -32 -5 -143 13 -174 7 -13 13 -34 14 -48 1 -14 7 -61 14
                -105 6 -44 10 -120 7 -170 -2 -49 0 -121 5 -160 5 -38 11 -86 13 -105 2 -19 8
                -53 13 -75 31 -123 42 -346 21 -446 -6 -30 -12 -133 -13 -229 l-1 -175 -47
                -97 c-27 -53 -48 -101 -48 -106 0 -5 -8 -16 -17 -23 -29 -24 -96 -178 -90
                -208 10 -52 60 -207 83 -261 35 -82 121 -330 129 -375 2 -11 11 -49 20 -85 14
                -56 15 -118 11 -470 -8 -656 -30 -841 -142 -1193 -19 -59 -37 -135 -41 -167
                l-6 -60 1213 0 1213 0 -7 53 c-8 56 -8 495 -1 507 3 4 7 95 11 201 3 107 10
                206 16 221 11 29 14 878 3 988 -3 36 -10 99 -14 140 -7 62 -5 86 10 135 10 33
                19 71 19 84 0 29 12 70 50 171 34 88 63 183 80 260 7 30 20 69 28 85 13 25 16
                72 16 270 1 161 -3 255 -12 285 -6 25 -14 68 -16 95 -8 95 -46 325 -56 345 -5
                10 -10 30 -10 44 0 38 -29 142 -56 199 -13 29 -24 62 -24 74 0 12 -4 25 -10
                28 -5 3 -10 27 -10 53 0 33 -9 65 -30 105 -16 32 -30 69 -30 82 0 13 -4 27
                -10 30 -5 3 -10 21 -10 38 0 18 -8 46 -19 63 -10 17 -22 41 -26 55 -13 42 -99
                181 -120 192 -11 6 -49 24 -84 39 -35 15 -70 36 -78 48 -8 11 -22 20 -31 20
                -20 0 -74 84 -75 115 0 11 5 67 11 125 12 108 19 533 9 560 -3 8 -10 52 -16
                97 -7 45 -23 119 -36 165 -14 46 -25 94 -25 107 0 13 -14 44 -31 70 -18 25
                -46 78 -64 116 -43 95 -94 172 -159 243 -105 112 -146 129 -411 168 -16 2 -46
                -3 -65 -12z"
								/>
							</g>

							{/*shub*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(16)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M10715 8900 c-16 -11 -38 -20 -48 -20 -10 0 -40 -11 -67 -25 -27 -14
                -62 -25 -77 -25 -15 0 -60 -16 -99 -35 -74 -37 -73 -35 -124 -150 -27 -60 -30
                -189 -6 -245 8 -20 18 -68 21 -108 l8 -72 -37 -40 c-43 -47 -46 -77 -16 -168
                24 -74 54 -127 92 -166 26 -26 58 -107 58 -147 0 -31 48 -59 101 -59 36 0 66
                -10 125 -40 43 -22 91 -40 107 -40 43 0 90 -26 145 -81 50 -49 107 -79 121
                -63 5 5 17 32 27 59 10 28 43 78 75 115 37 43 66 89 84 134 27 70 65 272 70
                381 5 85 40 234 65 266 23 33 26 82 6 121 -32 62 -112 159 -136 165 -29 7
                -103 63 -194 144 -75 68 -89 76 -175 100 -82 24 -89 24 -126 -1z"
								/>
								<path
									d="M9920 7329 c-52 -21 -122 -45 -155 -55 -33 -10 -80 -26 -103 -36 -53
                -22 -148 -101 -168 -140 -19 -36 -38 -233 -30 -301 l7 -52 94 -58 c94 -58 154
                -115 203 -192 14 -22 39 -62 57 -90 17 -27 58 -94 90 -147 32 -54 60 -98 64
                -98 3 0 29 28 56 62 28 34 64 76 81 92 29 29 32 38 38 118 6 68 3 99 -10 140
                -26 82 -38 103 -62 106 -32 5 -98 110 -123 197 -12 40 10 293 27 322 12 19 39
                163 32 167 -2 1 -46 -15 -98 -35z"
								/>
								<path
									d="M11114 7203 c-8 -9 -12 -23 -9 -32 3 -8 9 -59 12 -113 l6 -98 -29 -6
                c-28 -5 -30 -8 -30 -57 0 -51 -28 -146 -62 -217 -12 -25 -25 -36 -43 -38 -22
                -3 -28 -10 -33 -40 -4 -20 -19 -60 -34 -88 -95 -180 -104 -202 -98 -246 3 -24
                9 -75 14 -115 13 -108 23 -119 222 -258 36 -25 70 -45 75 -45 17 0 55 86 55
                123 0 49 19 106 55 167 18 30 58 102 90 160 35 63 82 131 121 173 35 38 64 73
                64 77 0 14 111 92 166 116 78 34 89 64 63 164 -25 96 -42 117 -122 160 -36 19
                -70 44 -75 55 -9 20 -183 115 -210 115 -7 0 -31 9 -53 20 -60 31 -126 41 -145
                23z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(17)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M12463 8600 c-53 -4 -81 -13 -110 -32 -21 -14 -48 -29 -60 -33 -16
                -4 -40 -43 -90 -143 -37 -75 -80 -155 -95 -177 l-27 -40 14 -185 c7 -102 17
                -196 22 -210 14 -42 91 -136 147 -179 75 -56 101 -111 109 -228 6 -79 4 -97
                -12 -125 -10 -18 -26 -62 -35 -98 -14 -56 -22 -69 -54 -89 -59 -39 -111 -65
                -232 -117 -92 -38 -125 -58 -169 -101 -54 -52 -54 -53 -35 -74 10 -12 36 -30
                56 -40 24 -12 45 -34 58 -59 11 -22 25 -40 30 -40 6 0 44 -32 85 -71 77 -73
                175 -209 204 -283 9 -22 28 -61 41 -85 50 -88 54 -97 61 -136 4 -22 16 -74 27
                -115 44 -163 63 -510 42 -768 l-13 -161 34 -67 c19 -37 39 -69 46 -71 23 -8
                43 45 54 143 24 226 30 288 42 479 9 140 18 209 29 229 25 47 118 106 343 219
                116 58 226 112 245 121 19 9 67 43 105 77 39 33 87 69 108 80 41 22 49 36 72
                135 23 101 20 163 -11 205 -14 19 -34 53 -44 76 -10 23 -29 49 -42 57 -24 16
                -45 71 -114 299 -21 71 -31 90 -50 97 -33 13 -161 147 -174 184 -7 17 -18 46
                -26 64 -37 85 -1 331 59 414 17 23 19 37 13 97 -4 51 -2 81 8 108 23 60 38
                182 30 253 -4 39 -19 90 -36 127 -30 63 -32 64 -168 152 -22 14 -132 50 -225
                72 -44 11 -93 26 -108 34 -30 16 -39 16 -154 5z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(18)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M11790 9099 c-19 -5 -66 -7 -105 -4 l-70 6 -145 -73 c-102 -51 -149
                -81 -160 -100 -8 -14 -27 -46 -42 -71 -31 -51 -47 -111 -48 -177 0 -42 6 -53
                65 -124 l64 -77 -4 -76 c-3 -56 0 -83 11 -105 9 -17 17 -45 19 -62 2 -17 13
                -68 24 -114 25 -100 29 -266 7 -297 -7 -11 -17 -31 -21 -45 -24 -82 -100 -139
                -186 -140 -41 0 -49 -5 -92 -49 -93 -97 -109 -186 -56 -302 34 -74 40 -78 156
                -114 45 -14 132 -52 194 -85 62 -33 117 -60 122 -60 15 0 115 -60 119 -70 2
                -6 13 -12 26 -15 36 -7 40 -13 35 -53 -5 -39 13 -148 25 -156 6 -4 145 82 163
                102 11 10 52 156 115 406 31 121 74 270 95 333 44 123 49 185 21 256 -12 31
                -13 67 -8 189 7 140 10 155 39 217 17 36 43 84 57 106 32 49 50 90 50 113 0
                10 9 35 21 57 32 60 23 129 -30 235 -24 47 -53 96 -66 110 -12 14 -40 51 -60
                84 -46 73 -100 133 -136 152 -31 16 -143 17 -199 3z"
								/>
							</g>

							{/*meghna*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(19)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14120 6901 c-41 -20 -93 -48 -115 -63 -52 -35 -145 -131 -145 -151
                0 -8 -13 -44 -30 -79 -16 -34 -30 -73 -30 -85 0 -13 -17 -49 -37 -80 -50 -79
                -75 -148 -77 -211 -1 -42 3 -53 17 -58 23 -7 22 -41 -4 -83 -16 -26 -20 -45
                -16 -75 3 -23 1 -63 -5 -90 -8 -36 -7 -54 2 -71 10 -19 9 -32 -4 -71 -9 -26
                -22 -54 -29 -63 -8 -9 -20 -45 -26 -81 -7 -36 -19 -83 -26 -105 -27 -76 -41
                -160 -35 -213 5 -46 3 -53 -15 -58 -11 -4 -51 -21 -90 -39 -38 -18 -78 -35
                -87 -38 -20 -7 -44 -57 -83 -172 -62 -184 -64 -199 -63 -444 0 -149 -3 -234
                -10 -248 -20 -37 -35 -327 -22 -428 14 -108 9 -577 -8 -709 -7 -49 -21 -141
                -33 -205 -11 -64 -25 -172 -30 -241 -4 -69 -13 -156 -20 -193 -15 -90 -6 -156
                42 -302 37 -115 60 -217 78 -350 5 -33 25 -124 45 -202 33 -131 35 -144 22
                -175 -39 -92 -49 -204 -52 -548 l-2 -335 -26 -59 c-40 -90 -66 -236 -66 -368
                0 -98 3 -120 23 -158 l22 -45 1143 -3 1143 -2 -6 161 c-4 129 -2 168 10 197 9
                19 27 90 41 156 l26 121 -2 480 c-1 263 -4 484 -8 490 -4 5 -10 172 -13 370
                -5 330 -8 368 -29 455 -12 52 -25 111 -27 130 -3 19 -9 40 -13 45 -11 15 -30
                110 -30 153 0 39 19 137 45 237 42 156 79 420 95 680 6 94 18 222 26 285 21
                162 30 605 15 755 -21 208 -39 293 -80 380 -22 44 -42 91 -46 105 -4 14 -29
                70 -55 126 -44 92 -53 105 -106 142 -33 23 -67 42 -77 42 -17 0 -113 25 -194
                51 -39 12 -133 101 -153 144 -9 20 -14 78 -16 170 -1 77 -6 158 -12 180 -6 22
                -11 71 -12 109 0 39 -4 74 -7 80 -4 5 -8 60 -9 120 -2 90 -7 119 -23 151 -12
                21 -21 52 -21 67 0 15 -6 45 -14 65 -8 21 -17 50 -20 64 -3 16 -29 46 -63 74
                -32 27 -65 56 -74 65 -8 10 -39 30 -67 44 -46 24 -59 26 -122 20 -55 -5 -74
                -4 -88 8 -11 10 -39 15 -82 15 -55 0 -77 -5 -140 -36z"
								/>
							</g>

							{/*caden*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(20)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M14426 8959 c-21 -5 -50 -17 -65 -28 -14 -10 -41 -23 -60 -29 -31
                -11 -83 -54 -153 -127 -73 -76 -93 -193 -63 -370 9 -55 18 -134 20 -175 3 -78
                30 -167 61 -201 9 -11 30 -19 45 -19 25 0 30 -5 44 -52 19 -64 19 -143 1 -196
                -25 -71 -29 -141 -11 -242 15 -91 17 -97 60 -137 54 -51 56 -72 19 -194 -21
                -68 -25 -99 -21 -162 3 -69 7 -81 33 -108 26 -27 33 -30 69 -24 85 14 119 10
                186 -22 56 -26 73 -41 111 -94 25 -35 48 -77 51 -94 3 -16 10 -59 17 -95 6
                -36 18 -76 27 -89 8 -13 17 -49 19 -80 2 -31 9 -90 16 -131 6 -41 10 -95 10
                -120 -2 -50 24 -144 44 -161 10 -8 37 -8 100 1 90 11 133 27 171 62 16 15 29
                19 49 14 29 -8 66 14 155 87 45 37 46 40 53 108 3 39 13 83 21 99 28 54 9 133
                -68 289 -7 14 -25 32 -42 41 -60 33 -70 67 -71 241 -1 86 -4 161 -8 168 -30
                48 -3 264 44 347 28 49 28 53 11 68 -10 9 -46 28 -82 42 -151 61 -189 84 -221
                129 -18 25 -35 45 -39 45 -13 0 -39 93 -39 141 0 100 18 147 76 204 l54 52 -1
                94 c0 72 -5 101 -19 126 -13 22 -20 63 -25 135 -9 120 -32 191 -85 263 -57 76
                -88 101 -180 143 -131 61 -215 74 -314 51z"
								/>
							</g>

							{/*brandon*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(21)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M15670 7733 c-107 -18 -264 -111 -350 -206 -68 -76 -77 -92 -98 -191
                -14 -64 -16 -97 -9 -156 4 -41 10 -138 12 -215 3 -77 7 -155 10 -173 5 -29 65
                -103 91 -113 6 -2 30 -44 53 -93 39 -80 42 -94 38 -145 -7 -74 -34 -188 -53
                -220 -22 -38 -117 -101 -151 -101 -15 0 -42 -9 -59 -19 -18 -11 -42 -21 -55
                -23 -16 -2 -30 -15 -41 -38 -23 -47 -22 -83 2 -105 36 -33 62 -123 76 -269 7
                -77 18 -144 24 -150 5 -5 47 -29 92 -51 87 -44 130 -89 144 -150 4 -16 10 -37
                15 -47 5 -10 13 -26 17 -35 5 -10 24 -65 42 -123 18 -58 43 -118 55 -135 40
                -53 63 -203 70 -450 7 -241 -1 -373 -39 -652 -14 -98 -26 -218 -27 -268 -4
                -177 -23 -317 -81 -570 -69 -301 -69 -280 -8 -513 29 -110 31 -125 17 -140
                -40 -46 -50 -109 -53 -352 -3 -234 -13 -380 -33 -475 -5 -27 -15 -84 -21 -125
                -19 -122 -31 -181 -50 -255 -21 -80 -44 -209 -60 -340 -13 -104 -23 -527 -17
                -750 l2 -80 198 -3 198 -2 -7 37 c-4 21 -10 45 -15 54 -4 8 -11 39 -15 68 -7
                56 2 101 41 186 30 67 43 150 44 270 0 55 5 132 11 170 13 95 13 341 -1 390
                -16 55 -17 267 -2 340 7 33 19 98 27 145 9 47 26 139 40 204 14 66 30 165 36
                220 17 156 19 166 36 166 29 0 48 70 56 210 4 74 12 189 17 255 6 66 15 210
                22 320 6 110 14 265 19 345 4 80 13 246 20 370 11 221 29 411 49 520 6 30 13
                105 16 167 2 62 13 166 24 230 20 121 41 334 41 411 0 54 19 74 104 102 37 12
                70 28 73 36 3 8 10 14 17 14 6 0 37 16 68 35 32 19 79 41 105 49 92 29 184 65
                209 81 16 11 35 14 57 10 36 -7 139 22 162 46 8 8 26 61 41 119 14 58 30 113
                35 122 7 13 1 31 -25 70 -19 29 -49 91 -67 138 -17 47 -38 92 -46 101 -7 9
                -73 40 -146 69 -72 29 -139 59 -148 66 -8 8 -25 14 -37 14 -13 0 -62 20 -110
                44 -74 37 -92 51 -120 94 -17 27 -32 54 -32 59 0 6 -20 41 -45 79 -43 65 -55
                109 -36 129 11 13 31 97 31 132 0 17 8 33 20 41 14 8 20 23 20 48 0 39 15 104
                33 141 13 28 4 132 -16 168 -11 21 -12 38 -5 69 6 27 6 85 -2 166 -10 116 -14
                129 -45 176 -36 55 -133 134 -218 177 -81 41 -225 71 -287 60z"
								/>
							</g>

							{/*benny*/}
							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(22)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M17165 6940 c-22 -4 -53 -13 -70 -19 -16 -6 -60 -20 -97 -31 -51 -16
                -75 -31 -102 -61 -20 -21 -36 -45 -36 -51 0 -7 -25 -65 -56 -130 -53 -110 -56
                -122 -56 -192 0 -40 6 -93 12 -116 6 -23 10 -74 9 -114 -4 -145 72 -396 146
                -484 22 -27 24 -34 14 -53 -6 -12 -19 -50 -28 -83 -15 -57 -20 -63 -77 -102
                -34 -23 -76 -45 -95 -49 -19 -4 -46 -16 -61 -26 -14 -11 -31 -19 -37 -19 -6 0
                -19 -4 -29 -9 -29 -16 -105 -48 -157 -67 -27 -10 -68 -29 -89 -42 -22 -14 -55
                -31 -73 -38 -18 -8 -33 -18 -33 -23 0 -5 -31 -22 -70 -37 -116 -45 -111 -33
                -129 -299 -6 -83 -15 -164 -20 -180 -16 -55 -34 -190 -37 -285 -2 -90 -10
                -162 -33 -310 -18 -110 -31 -249 -36 -375 -8 -199 -17 -329 -23 -340 -4 -5
                -10 -100 -14 -210 -4 -110 -13 -281 -18 -380 -6 -99 -13 -250 -15 -335 -3 -85
                -10 -168 -15 -184 -6 -16 -10 -50 -10 -75 0 -47 39 -255 64 -345 36 -125 59
                -247 60 -321 3 -90 31 -245 54 -290 16 -33 35 -114 57 -255 13 -80 38 -171 96
                -354 5 -15 16 -85 25 -155 8 -69 27 -168 40 -219 14 -51 24 -109 23 -130 -1
                -20 -2 -63 -1 -95 l2 -57 1058 2 c705 2 1056 6 1055 13 -8 51 -28 258 -31 330
                -2 50 -6 146 -10 214 -4 68 -3 203 1 300 l8 176 32 28 c17 15 70 40 116 55 52
                16 93 37 107 52 13 14 37 40 54 58 l30 33 -4 132 c-3 93 -11 154 -26 207 -41
                146 -43 163 -19 183 12 9 27 17 35 17 21 0 34 34 34 92 0 71 28 362 41 418 6
                25 17 52 26 62 19 21 10 87 -17 120 -16 20 -16 26 -4 50 11 21 14 100 14 400
                0 205 -1 402 -2 438 0 36 0 119 1 185 2 107 -7 300 -26 515 -3 41 -12 84 -19
                95 -6 11 -15 45 -19 75 -20 173 -49 339 -76 445 -23 89 -32 156 -38 260 -9
                164 -23 206 -73 224 -18 7 -46 19 -61 27 -16 8 -33 14 -37 14 -5 0 -89 39
                -187 86 -166 80 -360 164 -380 164 -5 0 -40 33 -78 73 -61 63 -75 86 -108 170
                l-39 97 23 75 c19 67 26 77 56 92 47 22 68 52 92 133 27 88 21 167 -15 201
                -13 12 -24 32 -24 44 0 12 -7 64 -16 116 -17 100 -51 176 -126 276 -48 66
                -166 144 -248 165 -45 12 -111 28 -130 32 -8 2 -33 0 -55 -4z"
								/>
							</g>

							<g
								transform="translate(0.000000,1147.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
								onMouseOver={() => setHoverID(23)}
								onMouseOut={() => setHoverID(0)}
								fillOpacity={0}
							>
								<path
									d="M13730 7750 c-30 -32 -63 -59 -72 -59 -9 -1 -20 -5 -23 -11 -3 -5
                -20 -10 -36 -10 -16 0 -39 -8 -50 -19 -17 -15 -37 -19 -119 -19 l-99 -1 -56
                -55 -55 -56 0 -120 c0 -107 2 -123 20 -142 16 -17 20 -36 20 -90 0 -37 6 -85
                14 -105 14 -40 28 -113 47 -251 11 -81 12 -83 56 -119 25 -20 59 -57 76 -82
                30 -44 32 -52 35 -156 4 -98 1 -116 -18 -158 -44 -93 -286 -256 -346 -233 -10
                4 -26 -4 -44 -24 -15 -16 -32 -30 -36 -30 -4 0 -19 -11 -33 -24 -33 -30 -318
                -176 -393 -200 -20 -6 -24 -46 -19 -172 2 -44 -1 -74 -8 -78 -7 -5 -11 -44
                -11 -102 0 -53 -4 -103 -9 -112 -13 -25 -34 -240 -34 -358 -1 -108 2 -117 53
                -141 14 -6 40 -15 58 -18 22 -5 52 -26 88 -61 29 -30 58 -54 63 -54 5 0 33
                -24 62 -52 l54 -53 139 0 139 0 -2 90 c-1 50 3 113 9 140 6 28 15 85 20 128
                15 130 56 188 170 239 36 16 76 35 90 43 14 8 41 23 61 34 25 14 42 33 53 62
                25 61 46 184 46 265 0 56 6 84 26 128 25 54 25 60 20 213 -3 87 -8 196 -12
                243 -4 64 -2 87 8 95 7 5 28 40 47 78 19 37 37 67 40 67 9 0 27 48 42 110 7
                30 21 70 31 88 10 18 18 41 18 52 0 22 144 170 165 170 8 0 15 4 15 8 0 11
                117 72 137 72 8 0 32 18 53 40 21 22 44 40 50 40 27 0 40 30 40 89 0 33 5 63
                10 66 6 3 10 21 10 40 0 19 5 37 10 40 6 3 10 35 10 71 0 61 -2 66 -40 105
                -34 35 -40 48 -40 85 0 23 -4 46 -10 49 -5 3 -10 14 -10 24 0 21 -27 78 -41
                87 -5 3 -16 0 -24 -6 -17 -14 -29 -7 -77 43 -14 15 -35 27 -46 27 -11 0 -43
                23 -71 50 l-51 50 -83 -1 -82 0 -55 -59z"
								/>
								<path
									d="M14886 5982 c-3 -6 0 -30 9 -54 18 -52 18 -58 4 -58 -16 0 -33 -20
                -53 -64 -14 -30 -17 -54 -13 -102 4 -61 6 -63 72 -129 65 -65 69 -67 117 -67
                27 0 55 5 61 11 6 6 21 11 33 11 20 0 23 7 30 56 14 112 -9 284 -38 284 -4 0
                -14 14 -23 30 -9 17 -33 41 -54 55 -41 28 -134 45 -145 27z"
								/>
							</g>
						</svg>
					</SvgPhone>
				</HoverContainer>
			</TeamContainer>

			<TextContainer style={{ display: hoverID === 0 ? "flex" : "none" }}>
				<TitleText>Meet The Team</TitleText>
				<SmallSpacer />
				<BodyText>
					At MEG we are proud of our members diverse interests and
					backgrounds. Each one of us has our own unique strengths and
					viewpoints that, when put together, can create extraordinary
					solutions. We'd love for you to get to know us better and
					join the team in the future.
				</BodyText>
				<SmallSpacer />
				<BodyText>
					<b>
						(Hover over or tap the picture to learn about one of
						us!)
					</b>{" "}
				</BodyText>
			</TextContainer>
			<TextContainer style={{ display: hoverID !== 0 ? "flex" : "none" }}>
				<TitleText>{names[hoverID]}</TitleText>
				<SmallSpacer />
				<BodyText>
					<b>Year:</b> {years[hoverID]}
				</BodyText>
				<BodyText>
					<b>Major:</b> {majors[hoverID]}
				</BodyText>
				<BodyText>
					<b>About Me:</b> {abouts[hoverID]}
				</BodyText>
				<BodyText>
					<b>Past Projects:</b> {projects[hoverID]}
				</BodyText>
				<SmallSpacer />
			</TextContainer>
		</SectionContainer>
	);
}

export default TeamSection;
