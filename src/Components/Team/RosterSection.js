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
import vivek0 from "../../Images/Team/headshots/vivek0.png";
import debangi0 from "../../Images/Team/headshots/debangi0.png";
import chris0 from "../../Images/Team/headshots/chris0.png";
import prah0 from "../../Images/Team/headshots/prah0.png";
import siri0 from "../../Images/Team/headshots/siri0.png";
import ilakiya0 from "../../Images/Team/headshots/ilakiya0.png";
import patrick0 from "../../Images/Team/headshots/patrick0.png";
import amory0 from "../../Images/Team/headshots/amory0.png";
import vivek1 from "../../Images/Team/headshots/vivek1.png";
import debangi1 from "../../Images/Team/headshots/debangi1.png";
import chris1 from "../../Images/Team/headshots/chris1.png";
import prah1 from "../../Images/Team/headshots/prah1.png";
import siri1 from "../../Images/Team/headshots/siri1.png";
import ilakiya1 from "../../Images/Team/headshots/ilakiya1.png";
import patrick1 from "../../Images/Team/headshots/patrick1.png";
import amory1 from "../../Images/Team/headshots/amory1.png";
import shubh0 from "../../Images/Team/headshots/shubh0.png";
import shubh1 from "../../Images/Team/headshots/shubh1.png";


import aditivadakath0 from "../../Images/Team/headshots/aditivadakath0.png";
import aditivadakath1 from "../../Images/Team/headshots/aditivadakath1.png";
import amorytin0 from "../../Images/Team/headshots/amorytin0.png";
import amorytin1 from "../../Images/Team/headshots/amorytin1.png";
import anishthatiparthi0 from "../../Images/Team/headshots/anishthatiparthi0.png";
import anishthatiparthi1 from "../../Images/Team/headshots/anishthatiparthi1.png";
import aravrajesh0 from "../../Images/Team/headshots/aravrajesh0.png";
import aravrajesh1 from "../../Images/Team/headshots/aravrajesh1.png";
import azratokovic0 from "../../Images/Team/headshots/azratokovic0.png";
import azratokovic1 from "../../Images/Team/headshots/azratokovic1.png";
import caleblee0 from "../../Images/Team/headshots/caleblee0.png";
import caleblee1 from "../../Images/Team/headshots/caleblee1.png";
import cynthiali0 from "../../Images/Team/headshots/cynthiali0.png";
import cynthiali1 from "../../Images/Team/headshots/cynthiali1.png";
import debangimohanta0 from "../../Images/Team/headshots/debangimohanta0.png";
import debangimohanta1 from "../../Images/Team/headshots/debangimohanta1.png";
import evakumer0 from "../../Images/Team/headshots/evakumer0.png";
import evakumer1 from "../../Images/Team/headshots/evakumer1.png";
import ilakiyarajaguru0 from "../../Images/Team/headshots/ilakiyarajaguru0.png";
import ilakiyarajaguru1 from "../../Images/Team/headshots/ilakiyarajaguru1.png";
import isabellaxu0 from "../../Images/Team/headshots/isabellaxu0.png";
import isabellaxu1 from "../../Images/Team/headshots/isabellaxu1.png";
import isseihata0 from "../../Images/Team/headshots/isseihata0.png";
import isseihata1 from "../../Images/Team/headshots/isseihata1.png";
import jessicatran0 from "../../Images/Team/headshots/jessicatran0.png";
import jessicatran1 from "../../Images/Team/headshots/jessicatran1.png";
import johnlee0 from "../../Images/Team/headshots/johnlee0.png";
import johnlee1 from "../../Images/Team/headshots/johnlee1.png";
import joyren0 from "../../Images/Team/headshots/joyren0.png";
import joyren1 from "../../Images/Team/headshots/joyren1.png";
import juliazhang0 from "../../Images/Team/headshots/juliazhang0.png";
import juliazhang1 from "../../Images/Team/headshots/juliazhang1.png";
import kaitlynko0 from "../../Images/Team/headshots/kaitlynko0.png";
import kaitlynko1 from "../../Images/Team/headshots/kaitlynko1.png";
import leoleone0 from "../../Images/Team/headshots/leoleone0.png";
import leoleone1 from "../../Images/Team/headshots/leoleone1.png";
import minseokkim0 from "../../Images/Team/headshots/minseokkim0.png";
import minseokkim1 from "../../Images/Team/headshots/minseokkim1.png";
import natashashimon0 from "../../Images/Team/headshots/natashashimon0.png";
import natashashimon1 from "../../Images/Team/headshots/natashashimon1.png";
import niyatikashyap0 from "../../Images/Team/headshots/niyatikashyap0.png";
import niyatikashyap1 from "../../Images/Team/headshots/niyatikashyap1.png";
import patrickli0 from "../../Images/Team/headshots/patrickli0.png";
import patrickli1 from "../../Images/Team/headshots/patrickli1.png";
import prahpant0 from "../../Images/Team/headshots/prahpant0.png";
import prahpant1 from "../../Images/Team/headshots/prahpant1.png";
import rheamisra0 from "../../Images/Team/headshots/rheamisra0.png";
import rheamisra1 from "../../Images/Team/headshots/rheamisra1.png";
import saathvikhari0 from "../../Images/Team/headshots/saathvikhari0.png";
import saathvikhari1 from "../../Images/Team/headshots/saathvikhari1.png";
import shivarajan0 from "../../Images/Team/headshots/shivarajan0.png";
import shivarajan1 from "../../Images/Team/headshots/shivarajan1.png";
import siripattipati0 from "../../Images/Team/headshots/siripattipati0.png";
import siripattipati1 from "../../Images/Team/headshots/siripattipati1.png";
import sophierichards0 from "../../Images/Team/headshots/sophierichards0.png";
import sophierichards1 from "../../Images/Team/headshots/sophierichards1.png";
import sriyanmadugula0 from "../../Images/Team/headshots/sriyanmadugula0.png";
import sriyanmadugula1 from "../../Images/Team/headshots/sriyanmadugula1.png";
import sydneygaynor0 from "../../Images/Team/headshots/sydneygaynor0.png";
import sydneygaynor1 from "../../Images/Team/headshots/sydneygaynor1.png";
import sydneygoad0 from "../../Images/Team/headshots/sydneygoad0.png";
import sydneygoad1 from "../../Images/Team/headshots/sydneygoad1.png";
import varuntalluri0 from "../../Images/Team/headshots/varuntalluri0.png";
import varuntalluri1 from "../../Images/Team/headshots/varuntalluri1.png";
import viveknukala0 from "../../Images/Team/headshots/viveknukala0.png";
import viveknukala1 from "../../Images/Team/headshots/viveknukala1.png";
import yaseenmetwally0 from "../../Images/Team/headshots/yaseenmetwally0.png";
import yaseenmetwally1 from "../../Images/Team/headshots/yaseenmetwally1.png";
import zafirmakeragha0 from "../../Images/Team/headshots/zafirmakeragha0.png";
import zafirmakeragha1 from "../../Images/Team/headshots/zafirmakeragha1.png";

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

const CardHeaderHover = styled.div`
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
			name: "Vivek Nukala",
			image0: viveknukala0,
			image1: viveknukala1,
			position: "President",
			major: "BBA 2025",
			ID: 101,
			url: "https://www.linkedin.com/in/vivek-r-nukala/",
		},
		{
			name: "Patrick Li",
			image0: patrickli0,
			image1: patrickli1,
			position: "VP Recruitment",
			major: "BBA & Political Science 2026",
			ID: 102,
			url: "https://www.linkedin.com/in/patrick-li-6a9296247/",
		},
		{
			name: "Debangi Mohanta",
			image0: debangimohanta0,
			image1: debangimohanta1,
			position: "VP Operations & Finance",
			major: "CS 2025",
			ID: 103,
			url: "https://www.linkedin.com/in/debangi-mohanta-777057218/",
		},
		{
			name: "Prah Pant",
			image0: prahpant0,
			image1: prahpant1,
			position: "VP Client Acquisition",
			major: "BBA 2026",
			ID: 104,
			url: "https://www.linkedin.com/in/prahlad-pant-a41919252/",
		},
		{
			name: "Amory Tin",
			image0: amorytin0,
			image1: amorytin1,
			position: "VP External",
			major: "BBA 2026",
			ID: 105,
			url: "https://www.linkedin.com/in/amory-tin/",
		},
		{
			name: "Leo Leone",
			image0: leoleone0,
			image1: leoleone1,
			position: "VP Internal",
			major: "BBA & Information Analytics 2026",
			ID: 106,
			url: "https://www.linkedin.com/in/leo-leone-792515223/",
		},
		{
			name: "Min-Seok Kim",
			image0: minseokkim0,
			image1: minseokkim1,
			position: "VP Community Engagement",
			major: "BBA 2026",
			ID: 107,
			url: "https://www.linkedin.com/in/min-seok-kim-6a7245252/",
		},
	
	];
	const managerData = [
		{
			name: "Julia Zhang",
			image0: juliazhang0,
			image1: juliazhang1,
			position: "Project Manager",
			major: "BBA 2026",
			ID: 108,
			url: "https://www.linkedin.com/in/julia-m-zhang/",
		},
		{
			name: "Sophie Richards",
			image0: sophierichards0,
			image1: sophierichards1,
			position: "Project Manager",
			major: "BBA 2026",
			ID: 109,
			url: "https://www.linkedin.com/in/sophrich/",
		},
		{
			name: "Eva Kumer",
			image0: evakumer0,
			image1: evakumer1,
			position: "Project Manager",
			major: "BBA 2026",
			ID: 110,
			url: "https://www.linkedin.com/in/evakumer/",
		},
		{
			name: "Ilakiya Rajaguru",
			image0: ilakiyarajaguru0,
			image1: ilakiyarajaguru1,
			position: "Project Manager",
			major: "BBA 2026",
			ID: 111,
			url: "https://www.linkedin.com/in/ilakiya-rajaguru-9a9530232/",
		},
		{
			name: "Yaseen Metwally",
			image0: yaseenmetwally0,
			image1: yaseenmetwally1,
			position: "Project Manager",
			major: "BBA & Chemical Engineering 2026",
			ID: 112,
			url: "hhttps://www.linkedin.com/in/yaseen-metwally-745067216/",
		},
		{
			name: "Saathvik Hari",
			image0: saathvikhari0,
			image1: saathvikhari1,
			position: "Project Manager",
			major: "Economics & DS 2026",
			ID: 113,
			url: "https://www.linkedin.com/in/saathvik-hari/",
		},
		{
			name: "Jessica Tran",
			image0: jessicatran0,
			image1: jessicatran1,
			position: "Project Manager",
			major: "BBA 2026",
			ID: 114,
			url: "https://www.linkedin.com/in/jessica-tran-39582a205/",
		},
		
	];

	const analystData = [
		{
			name: "Sydney Gaynor",
			image0: sydneygaynor0,
			image1: sydneygaynor1,
			position: "Analyst",
			major: "BBA 2026",
			ID: 115,
			url: "https://www.linkedin.com/in/sydney-gaynor/",
		},
		{
			name: "Kaitlyn Ko",
			image0: kaitlynko0,
			image1: kaitlynko1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 116,
			url: "https://www.linkedin.com/in/kaitlyn-ko-a59a17255//",
		},
		{
			name: "Sydney Goad",
			image0: sydneygoad0,
			image1: sydneygoad1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 117,
			url: "https://www.linkedin.com/in/sydney-goad13/",
		},
		{
			name: "Caleb Lee",
			image0: caleblee0,
			image1: caleblee1,
			position: "Analyst",
			major: "DS 2027",
			ID: 118,
			url: "https://www.linkedin.com/in/calebjl/",
		},
		{
			name: "Arav Rajesh",
			image0: aravrajesh0,
			image1: aravrajesh1,
			position: "Analyst",
			major: "Economics & Statistics 2027",
			ID: 119,
			url: "https://www.linkedin.com/in/arav-rajesh/",
		},
		{
			name: "Zafir Maker-Agha",
			image0: zafirmakeragha0,
			image1: zafirmakeragha1,
			position: "Analyst",
			major: "BBA & Sustainability 2026",
			ID: 120,
			url: "https://www.linkedin.com/in/zafir-maker-agha/",
		},
		{
			name: "John Lee",
			image0: johnlee0,
			image1: johnlee1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 121,
			url: "https://www.linkedin.com/in/john-y-lee/",
		},
		{
			name: "Isabella Xu",
			image0: isabellaxu0,
			image1: isabellaxu1,
			position: "Analyst",
			major: "Economics 2027",
			ID: 122,
			url: "https://www.linkedin.com/in/isabellaaxu/",
		},
		{
			name: "Joy Ren",
			image0: joyren0,
			image1: joyren1,
			position: "Analyst",
			major: "CS & Pre-Law 2027",
			ID: 123,
			url: "https://www.linkedin.com/in/joyxren/",
		},
		{
			name: "Anish Thatiparthi",
			image0: anishthatiparthi0,
			image1: anishthatiparthi1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 124,
			url: "https://www.linkedin.com/in/anish-thatiparthi/",
		},
		{
			name: "Niyati Kashyap",
			image0: niyatikashyap0,
			image1: niyatikashyap1,
			position: "Analyst",
			major: "DS 2026",
			ID: 125,
			url: "https://www.linkedin.com/in/niyati-kashyap/",
		},
		{
			name: "Cynthia Lia",
			image0: cynthiali0,
			image1: cynthiali1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 126,
			url: "https://www.linkedin.com/in/cynthiajli100/",
		},
		{
			name: "Rhea Misra",
			image0: rheamisra0,
			image1: rheamisra1,
			position: "Analyst",
			major: "IOE & CS 2027",
			ID: 127,
			url: "https://www.linkedin.com/in/rhea-misra-b15401245/",
		},
		{
			name: "Varun Talluri",
			image0: varuntalluri0,
			image1: varuntalluri1,
			position: "Analyst",
			major: "BBA & CS 2027",
			ID: 128,
			url: "https://www.linkedin.com/in/varun-talluri/",
		},
		{
			name: "Sriyan Madugula",
			image0: sriyanmadugula0,
			image1: sriyanmadugula1,
			position: "Analyst",
			major: "BBA & CS 2027",
			ID: 129,
			url: "https://www.linkedin.com/in/sriyanm/",
		},
		{
			name: "Natasha Shimon",
			image0: natashashimon0,
			image1: natashashimon1,
			position: "Analyst",
			major: "LSA Undecided 2027",
			ID: 130,
			url: "https://www.linkedin.com/in/natasha-shimon-10676b249/",
		},
		{
			name: "Issei Hata",
			image0: isseihata0,
			image1: isseihata1,
			position: "Analyst",
			major: "Economics & Math 2027",
			ID: 131,
			url: "https://www.linkedin.com/in/isseihata/",
		},
		{
			name: "Shiva Rajan",
			image0: shivarajan0,
			image1: shivarajan1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 132,
			url: "https://www.linkedin.com/in/shiva-rajan78/",
		},
		{
			name: "Aditi Vadakath",
			image0: aditivadakath0,
			image1: aditivadakath1,
			position: "Analyst",
			major: "BBA 2027",
			ID: 133,
			url: "https://www.linkedin.com/in/aditi-vadakath/",
		},

		{
			name: "Siri Pattipati",
			image0: siripattipati0,
			image1: siripattipati1,
			position: "Member",
			major: "BBA 2026",
			ID: 134,
			url: "https://www.linkedin.com/in/siri-pattipati-87a155216/",
		},
		{
			name: "Azra Tokovic",
			image0: azratokovic0,
			image1: azratokovic1,
			position: "Member",
			major: "BBA 2026",
			ID: 135,
			url: "https://www.linkedin.com/in/azra-tokovic/",
		},
		
	];


	const seniorData = [
		{
			name: "Charlie Schuetze",
			image0: charlie0,
			image1: charlie1,
			position: "Senior Advisor",
			major: "BBA 2024",
			ID: 1,
			url: "https://linkedin.com/in/charlie-schuetze",
		},
		{
			name: "Priyanka Madhavan",
			image0: pri0,
			image1: pri1,
			position: "Senior Advisor",
			major: "BBA & Mechanical Engineering 2024",
			ID: 2,
			url: "https://www.linkedin.com/in/primadhavan/",
		},
		{
			name: "Lawder Desantis",
			image0: lawder0,
			image1: lawder1,
			position: "Senior Advisor",
			major: "Economics 2025",
			ID: 3,
			url: "https://www.linkedin.com/in/lawder-desantis-50a733232",
		},
		{
			name: "Kapil Pownikar",
			image0: kapil0,
			image1: kapil1,
			position: "Senior Advisor",
			major: "Math & DS 2025",
			ID: 4,
			url: "https://www.linkedin.com/in/kapil-pownikar/",
		},
		{
			name: "Anish Vankayalapati",
			image0: anish0,
			image1: anish1,
			position: "Senior Advisor",
			major: "BBA & CS 2025",
			ID: 5,
			url: "https://linkedin.com/in/anish-vankayalapati-6b4914223",
		},

		{
			name: "Rachelle Deng",
			image0: rachelle0,
			image1: rachelle1,
			position: "Senior Advisor",
			major: "BBA 2024",
			ID: 6,
			url: "https://www.linkedin.com/in/rachelle-deng-4a7203202/",
		},
		
	];

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
								<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>

			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Project Managers
					</TitleText>
				</TextContainer>
				<NewLine />
				{managerData.map((data) => (
					<CardContainer>
						<CardImage
							style={{ backgroundImage: `url(${data.image0})` }}
						/>
						<CardImageHover
							onMouseEnter={() => setHoverID2(data.ID)}
							onMouseLeave={() => setHoverID2(0)}
							style={{
								opacity: hoverID2 === data.ID ? "100%" : "0%",
								backgroundImage: `url(${data.image1})`,
							}}
						/>
						<NewLine />
						<TextContainer>
							<CardTitle>{data.name}</CardTitle>
							<TinySpacer />
							<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
						</TextContainer>
					</CardContainer>
				))}
			</PositionContainer>
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
								<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
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
								<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
		</SectionContainer>
	);
}

export default RosterSection;
