import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
	height: 27vh;
	width: 57vw;
	outline: solid 3px #1e1e1e;
	margin: 0.15vh;
	padding-right: 0.3vw;
	background-color: transparent; /* Transparent background */
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-aspect-ratio: 1217/835) {
		width: 79vw;
	}
	@media (max-aspect-ratio: 610/835) {
		padding-right: 1vw;
	}
`;

const Timeline = styled.div`
	width: 90%;
	height: 0.3vh; /* Thickness of the timeline */
	background-color: #000; /* Color of the timeline */
	position: relative;
	display: flex;
	align-items: center;
`;

const TimelineDot = styled.div`
	width: 1.5vw; /* 1.5 times bigger than the original 12px */
	height: 1.5vw; /* 1.5 times bigger than the original 12px */
	background-color: ${({ invisible }) => (invisible ? 'transparent' : '#000')}; /* Make the last dot invisible */
	border-radius: 50%;
	position: absolute;
	left: ${({ position }) => position}%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TimelineTextGroup = styled.div`
  position: absolute;
  width: 10vw; /* Adjust width to fit the content */
  transform: ${({ position }) => (position === 7 ? 'translate(-52.5%)' : 'translateX(-67%)')};
  text-align: center;
  font-size: 1vw;
  ${({ position }) => (position % 2 === 0 ? 'top: 5vh;' : 'top: -9vh;')} /* Alternating top/bottom positioning */
`;

const TimelineComponent = () => {
	const events = [
		{
			title: "",
			location: "",
			date: "",
			time: ""
		},
		{
			title: "Winterfest",
			location: "Michigan Union",
			date: "1/14",
			time: "4:00-7:00 pm"
		},
		{
			title: "BBA Meet The Clubs",
			location: "Ross Winter Garden",
			date: "1/16",
			time: "5:30-7:30 pm"
		},
		{
			title: "Mass Meeting",
			location: "Blau Colloquium",
			date: "1/19",
			time: "1:30-2:30 pm"
		},
		{
			title: "Coffee Chats",
			location: "Various Locations",
			date: "1/24",
			time: "4:00-6:00 pm"
		},
		{
			title: "Resume & Case Workshop",
			location: "R0210",
			date: "1/26",
			time: "3:30-5:00 pm"
		},
		{
			title: "DEI Event",
			location: "B1580",
			date: "1/28",
			time: "8:00-9:00 pm"
		},
		{
			title: "Application Due",
			location: "Online",
			date: "1/29",
			time: "11:59 pm"
		},
	];

	const dotCount = events.length - 2;

	return (
		<TimelineContainer>
			<Timeline>
				{events.map((event, index) => (
					<TimelineDot
						key={index}
						position={index === events.length - 1 ? 100 : 10 + index * (80 / dotCount)} 
						invisible={index === events.length - 1} /* Make the last dot invisible */
					>
						<TimelineTextGroup position={index}>
							<div><strong>{event.title}</strong></div>
							<div>{event.location}</div>
							<div>{event.date} {event.time}</div>
						</TimelineTextGroup>
					</TimelineDot>
				))}
			</Timeline>
		</TimelineContainer>
	);
};

export default TimelineComponent;
