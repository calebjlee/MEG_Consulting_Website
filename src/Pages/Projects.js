import Nav from "../Components/General/Nav";
import UmichFlatlay from "../Components/Projects/UmichFlatlay";
import ProjectHome from "../Components/Projects/ProjectHome";
import BuildingSection from "../Components/Projects/BuildingSection";
import BuildingSection1 from "../Components/Projects/BuildingSection1";
import SolutionSection from "../Components/Projects/SolutionSection";
import SummarySection from "../Components/Projects/SummarySection";
import ExploreSection from "../Components/Projects/ExploreSection";
import UmichSection from "../Components/Projects/UmichSection";
import ToTeamSection from "../Components/Projects/ToTeamSection";
import BusinessSection from "../Components/Projects/BusinessSection";
import BusinessFlatlay from "../Components/Projects/BusinessFlatlay";
import ResizeSection from "../Components/Projects/ResizeSection";


import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";
import rg4js from "raygun4js";
import FitSection from "../Components/Projects/FitSection";

function Projects() {
  
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
      <ProjectHome />
      <BuildingSection />
      <BuildingSection1 />
      <SolutionSection />
      {/*<SummarySection />
      <ExploreSection />*/}
      <BusinessSection/>
      <ResizeSection/>
      <BusinessFlatlay/>
      <UmichSection />
      <ResizeSection/>
      <UmichFlatlay />
      {/*<FitSection/>*/}
      <ToTeamSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default Projects;
