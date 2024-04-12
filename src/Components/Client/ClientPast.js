import styled from "styled-components";
import clients from "../../Images/Client/clients.jpg"

const SectionContainer = styled.div`
    width:100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    top: -1px;
`

const ContactContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vmin;
`

const PastClientImages = styled.img`
    margin: 5vmin;
    margin-top:0;
    margin-bottom:0;
    width: 70%;
`

const TitleText = styled.h2`
    font-size: 3vw;
    font-family: futura-pt, sans-serif;
    margin: 10vmin;
    padding: 0;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const MailLink = styled.a`
    color: Plum;
    &:visited{
        color: Plum;
    }
`

function ClientPast (){

    return(
        <SectionContainer>
            <TitleText style={{marginBottom: "0"}}>Who We've Worked With</TitleText>
            <PastClientImages src ={clients}/>
            <ContactContainer>
                <TitleText style={{color: "white", margin: "0", fontSize: "2vmax"}}>Let's Get Started: <MailLink href = "mailto: meg.eboard@umich.edu"> meg.eboard@umich.edu </MailLink></TitleText>
            </ContactContainer>
        </SectionContainer>
    )
}

export default ClientPast;