import styled from "styled-components";
import NextSection from "../General/NextSection";
import employers from "../../Images/About/employers.jpg";

{/*Section to show the companies our members have gotten into*/}
{/*To update: Update the "employers" image (see employers import above )  */}
{/*TODO: Make a transparent employers image (Not sure, but I think if the image had a transparent background then we could
continue the color scheme*/}

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const VisibleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-around;
  position: sticky;
`;

const ImageContainer = styled.div`
  width: 70vw;
  height: 70vh;
  background-image: url(${employers});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function EmplyerSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={1400} color="black" />
      <VisibleContainer>
        <ImageContainer />
      </VisibleContainer>
    </SectionContainer>
  );
}

export default EmplyerSection;
