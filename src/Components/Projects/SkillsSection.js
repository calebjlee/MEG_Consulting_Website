import React from "react";
import styled from "styled-components";
import SkillDropdown from "../General/SkillDropdown";
import NextSection from "../General/NextSection";
import { useState, useRef } from "react";

const SectionContainer = styled.div`
  padding-top: 20vh;
  width: 100vw;
  min-height: 100vh;
  background-color: #E0CFF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-anchor: none;
`;

const TextContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  flex-direction: column;
  display: flex;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: 'Futura PT', sans-serif;
  margin: 0 0 20px 0;
  font-weight: 900;
  text-align: left;
  color: #1e1e1e;
`;


const SkillsSection = () => {

  return (
    <SectionContainer>
        <TitleText>OUR CAPABILITIES</TitleText>
      <TextContainer>
        <SkillDropdown
          title="STRATEGY"
          location="Regional nonprofit bakery"
          scope="Operations digitalization and capacity modeling"
          description="Digitalized company operations through creating user-friendly supply tracking system and capacity projection model. Resolved multiple logistics issues, allowing owners to focus on expanding the organization while ensuring they had the resources to do so."
        />
        <SkillDropdown
          title="OPERATIONS"
          location="San Francisco, CA"
          scope="UI/UX for mobile applications"
          description="Redesigned core mobile app interfaces, increasing user engagement by 30%."
        />
        <SkillDropdown
          title="FINANCE"
          location="Remote"
          scope="Full-stack application development"
          description="Built scalable backend services and integrated APIs for e-commerce platform."
        />
        <SkillDropdown
          title="DATA ANALYTICS"
          location="Remote"
          scope="Full-stack application development"
          description="Built scalable backend services and integrated APIs for e-commerce platform."
        />
      </TextContainer>
    </SectionContainer>
  );
};

export default SkillsSection;
