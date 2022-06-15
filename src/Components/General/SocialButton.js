import styled from "styled-components";
import { BsInstagram, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const ButtonContainer = styled.div`
  & {
    z-index: 99;
    height: 2.5vmax;
    width: 2vmax;
    background-color: transparent;

    display: flex;
    padding-left: 0.45vmax;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 1.5vmax;
    overflow: hidden;
    cursor: pointer;
  }
`;


const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

function SocialButton(props) {

  const urls = ["https://www.instagram.com/meg_consulting/?hl=en", "https://www.linkedin.com/company/megconsultinggroup/", "mailto:meg.eboard@umich.edu"]

  return (
    <a href={urls[props.social]} target="_blank">
      <ButtonContainer
        style={{
          display: props.visible ? "none" : "flex",
          backgroundColor:"transparent"
        }}
      >
        <IconContainer>
          <BsInstagram color={"#1e1e1e"} style = {{display: props.social === 0 ? "inline-block":"none"}} />
          <BsLinkedin color={"#1e1e1e"} style = {{display: props.social === 1 ? "inline-block":"none"}} />
          <BsEnvelope color={"#1e1e1e"} style = {{display: props.social === 2 ? "inline-block":"none"}} />
        </IconContainer>
      </ButtonContainer>
    </a>
  );
}

export default SocialButton;
