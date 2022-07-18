import ClientNav from "../Components/Client/ClientNav";
import ClientProjectHome from "../Components/Client/ClientProjectHome"
import ClientProjectSection from "../Components/Client/ClientProjectSection";

function ClientProjects (){
    return(
        <div>
            <ClientNav/>
            <ClientProjectHome/>
            <ClientProjectSection/>
        </div>
    )
}

export default ClientProjects;