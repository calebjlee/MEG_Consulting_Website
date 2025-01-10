import React, { useState } from 'react';
import styled from 'styled-components';
import lazboycard from '../../Images/Projects/Cards/lazboycard.png';

const SectionContainer = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #E0CFF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0 0 20px 0;
  font-weight: 900;
  text-align: left;
  color: #1e1e1e;
`;

const CardContainer = styled.div`
  width: 60vw;
  max-width: 40vw;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2em;
  position: relative;
  display: flex;
  flex-direction: row; /* Arrange items horizontally */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #ddd;
  font-size: 1.5em;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }
`;

const LeftButton = styled(Button)`
  left: -50px;

  @media (max-width: 768px) {
    left: 10px;
    top: calc(100% + 10px);
    transform: none;
  }
`;

const RightButton = styled(Button)`
  right: -50px;

  @media (max-width: 768px) {
    right: 10px;
    top: calc(100% + 10px);
    transform: none;
  }
`;

const ClientImage = styled.img`
  width: 40%;
  max-width: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 2em;

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
    margin-bottom: 1em;
  }
`;

const Quotes = styled.img`
  width: 5vw;
  height: 5vw;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  font-family: futura-pt, sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #333333;
  margin-bottom: 1em;
  font-family: futura-pt, sans-serif;
`;

const ClientName = styled.h3`
  font-size: 1.5em;
  font-family: futura-pt, sans-serif;
  margin: 0;
  color: #1e1e1e;
`;

const DateText = styled.p`
  font-size: 0.9em;
  color: gray;
  font-family: futura-pt, sans-serif;
`;

const DotsContainer = styled.div`
  display: flex;
  margin-top: 1em;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? '#1e1e1e' : '#bbb')};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: lazboycard,
      description: '“It was between MEG and a consulting firm...”',
      name: 'La-Z-Boy',
      date: 'Jan 1, 2023',
    },
    {
      image: lazboycard,
      description: '“It was between MEG and a consulting firm...”',
      name: 'La-Z-Boy',
      date: 'Jan 2, 2023',
    },
    {
      image: lazboycard,
      description: '“It was between MEG and a consulting firm...”',
      name: 'La-Z-Boy',
      date: 'Jan 3, 2023',
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <SectionContainer>
      <TextContainer>
        <TitleText>CLIENT TESTIMONIALS</TitleText>
      </TextContainer>
      <CardContainer>
        <LeftButton onClick={goToPrevious}>&#8249;</LeftButton>
        <RightButton onClick={goToNext}>&#8250;</RightButton>
        <ClientImage
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
        />
        <TextContent>
          <Quotes src="quotes.png" alt="quotes" />
          <Description>{testimonials[currentIndex].description}</Description>
          <ClientName>{testimonials[currentIndex].name}</ClientName>
          <DateText>{testimonials[currentIndex].date}</DateText>
        </TextContent>
      </CardContainer>
      <DotsContainer>
        {testimonials.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </DotsContainer>
    </SectionContainer>
  );
};

export default TestimonialsSection;
