import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 6vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: #1e1e1e;
`;

const ArrowDown = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-bottom: 4px solid black;
  border-right: 4px solid black;
  transform: ${({ isOpen }) => (isOpen ? "rotate(225deg)" : "rotate(45deg)")};
  margin: 20px;
  margin-left: auto;
  transition: transform 0.3s;
  cursor: pointer;
`;

const SmallSpacer = styled.div`
  width: 80vw;
  height: 1px;
  background-color: #000000;
`;

const DropdownContent = styled.div`
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight}px;
  transition: max-height 0.5s ease-in-out;
  margin-top: 10px;
`;

const DetailLine = styled.div`
  font-size: 3.2vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  color: #1e1e1e;
  margin: 5px 0;
  line-height: 1.6;
`;

const SkillDropdown = ({ title, client, scope }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      setMaxHeight(dropdownRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isDropdownOpen]);

  return (
    <div onClick={toggleDropdown}>
      <SkillContainer  >
        <TitleText>{title}</TitleText>
        
        <ArrowDown isOpen={isDropdownOpen} />
      </SkillContainer>
      <SmallSpacer />
      <DropdownContent ref={dropdownRef} maxHeight={maxHeight}>
        <DetailLine><strong>Client:</strong> {client}</DetailLine>
        <DetailLine><strong>Project Scope:</strong> {scope}</DetailLine>
      </DropdownContent>
    </div>
  );
};

export default SkillDropdown;