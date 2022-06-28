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

function About() {
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
