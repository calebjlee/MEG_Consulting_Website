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

function Team() {

  let location = useLocation();
  ReactGA.initialize("G-GC3DF08WD9");

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    rg4js('trackEvent', {
      type: 'pageView',
      path: '/' + window.location.pathname // Or perhaps window.location.hash
    });
    console.log(`You changed the page to: ${location.pathname}`) 
  },[location]) 

  return (
    <div>
      <TeamHome />
      <TeamIntro />
      <TeamIntro1 />
      <TeamSection/>
      <ToApplicationSection/>
      <Nav color={0} home={1} />
    </div>
  );
}

export default Team;
