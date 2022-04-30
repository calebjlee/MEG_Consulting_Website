import Nav from "../Components/General/Nav";
import TeamHome from "../Components/Team/TeamHome";
import TeamIntro from "../Components/Team/TeamIntro";
import TeamIntro1 from "../Components/Team/TeamIntro1";
import ToProjectSection from "../Components/About/ToProjectSection";

function Team() {
  return (
    <div>
      <TeamHome />
      <TeamIntro />
      <TeamIntro1 />
      <ToProjectSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default Team;
