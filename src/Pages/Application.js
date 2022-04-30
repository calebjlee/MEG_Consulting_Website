import ApplicationHome from "../Components/Application/ApplicationHome";
import LookingSection from "../Components/Application/LookingSection";
import MenuSection from "../Components/Application/MenuSection";
import ToHomeSection from "../Components/BDT/ToHomeSection";
import Nav from "../Components/General/Nav";

function Application (){
    return(
        <div>
            <ApplicationHome/>
            <LookingSection/>
            <MenuSection/>
            <Nav color={0} home={1} />
            <ToHomeSection/>
        </div>
    )
}

export default Application;