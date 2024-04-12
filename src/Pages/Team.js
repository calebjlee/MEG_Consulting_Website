import Nav from "../Components/General/Nav";
import TeamHome from "../Components/Team/TeamHome";
import TeamIntro from "../Components/Team/TeamIntro";
import TeamIntro1 from "../Components/Team/TeamIntro1";
import TeamSection from "../Components/Team/TeamSection";
import ToApplicationSection from "../Components/Team/ToApplicationSection";

import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";
import rg4js from "raygun4js";
import RosterSection from "../Components/Team/RosterSection";

function Team() {

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
      <TeamHome />
      <TeamIntro />
      <TeamIntro1 />
      <TeamSection/>
      <RosterSection/>
      <ToApplicationSection/>
      <Nav color={0} home={1} />
    </div>
  );
}

export default Team;
