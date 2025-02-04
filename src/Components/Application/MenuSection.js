import styled from "styled-components";
import TimelineComponent from "./TimelineComponent";
import coffee from "../../Images/Application/coffee.png";
import north from "../../Images/Application/north.png";
import central from "../../Images/Application/central.png";
import ross from "../../Images/Application/ross.png";
import mass from "../../Images/Application/mass.png";
import workshop from "../../Images/Application/workshop.png";
import dei from "../../Images/Application/dei.png";
import apply from "../../Images/Application/apply.png";
import league from "../../Images/Application/league.png";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
	width: 100vw;
	height: 150vh;
	background-color: #e0cff2;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-content: start;
	position: sticky;
	flex-wrap: wrap;
	top: -1px;
	max-width: 100%;
`;

const GridContainer = styled.div`
	margin: 10vh 15vw 15vh 15vw;
	height: 81vh;
	width: 82vw;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	transform: translateX(1.5vw);
	@media (max-aspect-ratio: 610/835) {
		height: 54vh;
		margin-top: 25vh;
	}
`;

const LogoContainer = styled.div`
	outline: solid 3px #1e1e1e;
	height: 27vh;
	width: 20vw;
	margin: 1.5px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-aspect-ratio: 1217/835) {
		display: none;
	}
`;

// const TimelineContainer = styled.div`
// 	height: 27vh;
// 	width: 57vw;
// 	outline: solid 3px #1e1e1e;
// 	margin: 1.5px;
// 	padding-right: 3px;
// 	background-image: url(${timeline});
// 	background-size: contain;
// 	background-position: center;
// 	background-repeat: no-repeat;
// 	position: relative;

// 	@media (max-aspect-ratio: 1217/835) {
// 		width: 79vw;
// 	}
// 	@media (max-aspect-ratio: 610/835) {
// 		padding-right: 1vw;
// 	}
// `;

const InfoContainer = styled.div`
	height: 54vh;
	width: 20vw;
	outline: solid 3px #1e1e1e;
	margin: 1.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	@media (max-aspect-ratio: 1217/835) {
		width: 26vw;
	}
	@media (max-aspect-ratio: 610/835) {
		display: none;
	}
`;

const FaqContainer = styled.div`
	height: 54vh;
	width: 20vw;
	outline: solid 3px #1e1e1e;
	margin: 1.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	@media (max-aspect-ratio: 1217/835) {
		display: none;
	}
`;

const NewLine = styled.div`
	height: 0;
	width: 100vw;
`;

const CenterContainer = styled.div`
	height: 54vh;
	width: 37vw;
	outline: solid 3px #1e1e1e;
	margin: 1.5px;
	display: flex;
	flex-direction: column;

	@media (max-aspect-ratio: 1217/835) {
		width: 53vw;
	}

	@media (max-aspect-ratio: 610/835) {
		height: 27vh;
		width: 80vw;
	}
`;

const ApplyContainer = styled.div`
	height: 27vh;
	outline: solid 3px #1e1e1e;
	margin-bottom: 0.75px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MoreContainer = styled.div`
	height: 27vh;
	outline: solid 3px #1e1e1e;
	margin-top: 0.75px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-aspect-ratio: 610/835) {
		display: none;
	}
`;

const TextContainer = styled.div`
	display: inline-block;
	margin-left: 2vw;
	margin-right: 2vw;
	display: flex;
	height: 80%;
	flex-direction: column;
	justify-content: space-evenly;
`;

const TitleText = styled.h1`
	font-size: 2.5vw;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 900;
	text-align: left;
	color: #1e1e1e;
	word-wrap: break-word;
`;

const HeaderText = styled.h1`
	font-size: 1.7vmax;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 900;
	text-align: left;
	color: #1e1e1e;
	word-wrap: break-word;
`;

const BodyText = styled.p`
	display: inline-block;
	font-size: calc(2.7vmin);
	font-family: futura-pt, Helvetica, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.6;
	word-wrap: break-word;
`;

const SmallSpacer = styled.div`
	height: 1vh;
	width: 100%;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 25vh;
	margin-top: 2vh;
	margin-bottom: 2vh;
	background-image: url(${north});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

const SoonContainer = styled.div`
	background-color: rgba(255, 176, 97, 0.9);
	width: 50%;
	height: 50%;
	transform: rotate(10deg);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 25%;
	left: 25%;
`;

function MenuSection() {
	const eventDates = [
		"1/14/2025, 4:00 PM",
		"1/16/2025, 5:30 PM",
		"1/19/2025 1:30 PM",
		"1/24/2025, 4:00 PM",
		"1/26/2025, 3:30 PM",
		"1/28/2025, 7:00 PM",
		"1/29/2025, 11:59 PM",
		
	];
	const eventImages = [
		central,
		ross,
		mass,
		coffee,
		workshop,
		dei,
		apply,
	];
	const eventName = [
		"Winterfest",
		"BBA Meet the Clubs",
		"Mass Meeting",
		"Coffee Chats",
		"Resume & Case Workshop",
		"DEI Event",
		"Application Due",
	];
	const eventLocation = [
		"Michigan Union",
		"Ross Winter Garden",
		"Blau Colloquium",
		"Various Locations",
		"R0210",
		"B1580",
		"Online",
	];
	const eventTime = [
		"1/14 at 4:00-7:00 P.M.",
		"1/16 at 5:30-7:30 P.M.",
		"1/19 at 1:30-2:30 P.M.",
		"1/24 at 4:00-6:00 P.M.",
		"1/26 at 3:30-5:00 P.M.",
		"1/28 at 7:00-8:30 P.M.",
		"1/29 at 11:59 P.M.",
	];

	function eventDateDetector() {
		const d = Date.parse(
			new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
		);
		//For debugging:
		//const d = Date.parse("9/20/2022")
		for (let i = 0; i < eventDates.length; i++) {
			if (d < Date.parse(eventDates[i])) {
				return i;
			}
		}
	}

	const eventID = eventDateDetector();

	return (
		<SectionContainer>
			<NextSection ScrollNext={150} ScrollAlready={300} />
			<GridContainer>
				<LogoContainer>
					<TextContainer>
						<TitleText style={{ width: "16vw" }}>
							Our Application Tracker
						</TitleText>
					</TextContainer>
				</LogoContainer>
				<TimelineComponent></TimelineComponent>
				<NewLine />
				<FaqContainer>
					<TextContainer>
						<HeaderText>FAQ's:</HeaderText>
						<BodyText>
							Q: I'm not in Ross, can I still apply? <br /> A:
							Yes, we accept all majors! <br />
							Q: Any advice to help me get in? <br /> A: There's a
							lot &#40;scroll down!&#41;, but being yourself and
							putting your best foot forward is the most important
							advice we have. <br />
						</BodyText>
					</TextContainer>
				</FaqContainer>
				<CenterContainer>
					<a
						href="https://forms.gle/VsHqtF2fPJLtRp4c9"
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<ApplyContainer>
							<TextContainer>
								<TitleText
									style={{
										width: "100%",
										textAlign: "center",
										textDecoration: "underline",
										fontSize: "4vw",
									}}
								>
									Apply Now
								</TitleText>
							</TextContainer>
						</ApplyContainer>
					</a>
					<MoreContainer>
						<TextContainer>
							<HeaderText style={{ textAlign: "center" }}>
								Never Miss an Event
							</HeaderText>
							<SmallSpacer />
							<BodyText>
								Want to stay up to date on the newest from MEG?
								Sign up on our{" "}
								<a
									href="https://forms.gle/r7yyJxQ77dyaQ7YQ8"
									target="_blank"
									style={{
										fontWeight: 700,
										color: "inherit",
									}}
								>
									interest form
								</a>{" "}
								to get notifications on important events, dates
								and much more!
							</BodyText>
						</TextContainer>
					</MoreContainer>
				</CenterContainer>
				<InfoContainer>
					<TextContainer>
						<TitleText style={{ textAlign: "center" }}>
							Next Event
						</TitleText>
						<ImageContainer
							style={{
								backgroundImage:
									"url(" + eventImages[eventID] + ")",
							}}
						/>
						<HeaderText
							style={{ textAlign: "center", width: "100%" }}
						>
							{eventName[eventID]}
						</HeaderText>
						<BodyText
							style={{ textAlign: "center", width: "100%" }}
						>
							{" "}
							{eventLocation[eventID]} <br /> {eventTime[eventID]}{" "}
						</BodyText>
					</TextContainer>
				</InfoContainer>
				<NewLine />
			</GridContainer>
		</SectionContainer>
	);
}

export default MenuSection;
