import styled  from "styled-components";
import banner from "../../Images/Client/banner.jpg"

const SectionContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  background-image: url(${banner});
  background-size:cover;
  background-position:0 99%;
  background-color: white;
  padding-top: 7.5vh;
`;

const TitleText = styled.h2`
  display: inline-block;
  font-size: 4vmax;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  color: white;
`;

function ClientHome (){
    return(
      <SectionContainer>
        <TitleText>
          Our Services
        </TitleText>
      </SectionContainer>
    )
}

export default ClientHome;