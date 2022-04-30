import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const ButtonContainer = styled.div`
  & {
    z-index: 99;
    height: 5vmax;
    width: 5vmax;
    border-radius: 999px;
    background-color: transparent;
    position: absolute;
    bottom: 4.5vmax;
    left: 4.5vmax;
    display: flex;
    padding-left: 0.835vmax;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 3vmax;
    overflow: hidden;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: solid 0.05em #1e1e1e;
    cursor: pointer;
  }
  transition: width 1s 0.25s, background-color 0.25s;
  &:before {
    content: "";
    position: absolute;
    top: -25%;
    left: -25%;
    width: 150%;
    height: 150%;
  }
  &:hover {
    width: 19vmax;
  }
`;

const TextContaier = styled.div`
  margin-left: 1vmax;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 0.9vmax;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  width: 14vmax;
  text-align: left;
  color: #1e1e1e;
`;

function WebButton(props) {
  const [hover, setHover] = useState(false);

  return (
    <Link to="/BDT">
      <ButtonContainer
        style={{
          display: props.visible ? "none" : "flex",
          backgroundColor: hover ? "#1e1e1e" : "transparent"
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <IconContainer>
          <BsGlobe color={hover ? "#DBBDD3" : "#1e1e1e"} />
        </IconContainer>
        <TextContaier>
          <TitleText style={{ color: hover ? "#DBBDD3" : "#1e1e1e" }}>
            This Website is Member Made Learn More
          </TitleText>
        </TextContaier>
      </ButtonContainer>
    </Link>
  );
}

export default WebButton;
