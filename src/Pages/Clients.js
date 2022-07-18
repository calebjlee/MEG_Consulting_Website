import ClientHome from "../Components/Client/ClientHome";
import ClientProjectHome from "../Components/Client/ClientProjectHome";
import TestimonialSection from "../Components/Client/TestimonialSection";
import WhatWeDoSection from "../Components/Client/WhatWeDoSection";
import background from "../Images/Client/background.jpg"
import styled from "styled-components";
import ClientNav from "../Components/Client/ClientNav";
import FrameworkSection from "../Components/Client/FrameworkSection";

const BackgroundImage = styled.div`
    position: fixed;
    height:100vh;
    width: 100vw;
    background-image: url(${background});
    background-position: 0 50%;
    z-index:-1;
`

function Clients (){
    return(
        <div>
            <ClientNav/>
            <BackgroundImage/>
            <ClientHome/>
            <WhatWeDoSection/>
            <TestimonialSection/>
            <FrameworkSection/>

        </div>
    )
}

export default Clients;