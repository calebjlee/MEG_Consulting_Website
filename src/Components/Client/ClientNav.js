import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import clientLogo from "../../Images/Client/clientLogo.png";


const NavContainer = styled.div`
    height: 7.5vh;
    width: 100vw;
    position:fixed;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:100;
`

const LogoImage = styled.img`
  height: auto;
  width: 30vw;
  max-width: 700px;
  max-height: 100px;
  min-width: 250px;
  margin: 0;
  padding: 0;
`;

const LogoContainer = styled.div`
  color: #1e1e1e;
  display: flex;
  align-items: center;
  margin-left: 10vw;
`;

const NavTextContainer = styled.div`
  margin-right: 10vw;
  height:100%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-aspect-ratio: 1/1) {
    display:none;
  }
`;

const NavText = styled.div`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 3vmin;
  font-weight: 400;
  color: white;
  margin-left:3vw;
  text-decoration: none;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  @media (min-aspect-ratio: 1/1) {
    display:none;
  }
`

const DropdownLink = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color:rgba(0,0,0,0.9);

  &:hover {
    background-color: rgba(0,0,0,0.25);
    cursor: pointer;
  }
`

const DropdownButton = styled.button`
  padding-right: 7.5vw;
  font-size: 3vh;
  border: none;
  background-color: transparent;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right:0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  font-family: futura-pt, sans-serif;
  background-color:rgba(0,0,0,0.9);

  ${DropdownContainer}:hover & {
    display: block;
  }
`

function ClientNav (){
    return(
        <NavContainer>
        <Link to ="/clients">
            <LogoContainer>
                <LogoImage src={clientLogo}/>
            </LogoContainer>
        </Link>
        <NavTextContainer>
            <Link to = "/clients" style = {{textDecoration: "none"}}>
                <NavText>
                    Client Home
                </NavText>
            </Link>
            <Link to = "/client-projects" style = {{textDecoration: "none"}}>
                <NavText>
                    Project Showcase
                </NavText>
            </Link>
            <Link to = "/" style = {{textDecoration: "none"}}>
                <NavText>
                    Back to Main Page
                </NavText>
            </Link>
        </NavTextContainer>

        <DropdownContainer>
            <DropdownButton>
                <BsList color="white" size={20}/>
            </DropdownButton>
            <DropdownContent>
            <Link to="/clients" style={{ textDecoration: "none", color: "#1e1e1e" }}> 
                <DropdownLink>Client Home</DropdownLink>
            </Link>
            <Link to="/client-projects" style={{ textDecoration: "none", color: "#1e1e1e" }}> 
                <DropdownLink>Project Showcase</DropdownLink>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#1e1e1e" }}> 
                <DropdownLink>Back to Main Page</DropdownLink>
            </Link>
            </DropdownContent>
        </DropdownContainer>


        </NavContainer>
    )
}

export default ClientNav;