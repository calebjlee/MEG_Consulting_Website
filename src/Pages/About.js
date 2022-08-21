import styled from "styled-components";
import Nav from "../Components/General/Nav";
import AboutHome from "../Components/About/AboutHome.js";
import AboutIntro from "../Components/About/AboutIntro";
import SpaceSection from "../Components/About/SpaceSection";
import DifferentSection from "../Components/About/DifferentSection";
import EmployerSection from "../Components/About/EmployerSection";
import JourneySection from "../Components/About/JourneySection";
import ProfessionalSection from "../Components/About/ProfessionalSection";
import DoorSection from "../Components/About/DoorScetion";
import ToProjectSection from "../Components/About/ToProjectSection";

import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";
import rg4js from "raygun4js";



function About() {

  let location = useLocation();
  ReactGA.initialize("G-GC3DF08WD9");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: '/' + window.location.pathname });
    rg4js('trackEvent', {
      type: 'pageView',
      path: '/' + window.location.hash // Or perhaps window.location.hash
    });
  },[location]) 

  return (
    <div>
      <AboutHome />
      <AboutIntro />
      <DifferentSection />
      <SpaceSection />
      <DoorSection />
      <EmployerSection />
      <JourneySection />
      <ProfessionalSection />
      <ToProjectSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default About;
