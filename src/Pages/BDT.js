import BdtHome from "../Components/BDT/BdtHome";
import BdtInfo from "../Components/BDT/BdtInfo";
import ToHomeSection from "../Components/BDT/ToHomeSection";
import Nav from "../Components/General/Nav";

function BDT() {
  return (
    <div>
      <BdtHome />
      <BdtInfo />
      <ToHomeSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default BDT;
