import styled from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";

const NextContainer = styled.div`
  height: 20vh;
  width: 100vw;
  position: absolute;
  top: 85vh;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 100%;
  z-index: 5;
`;

const IconContainer = styled.div``;

function NextSection(props) {
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  function scrollAmount() {
    var scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    return vh(props.ScrollNext) - (scrollTop - vh(props.ScrollAlready));
  }

  const ScrollToNext = () => {
    window.scrollBy(0, scrollAmount());
  };

  return (
    <NextContainer onClick={ScrollToNext}>
      <IconContainer>
        <BsChevronDoubleDown size={40} color={props.color} />
      </IconContainer>
    </NextContainer>
  );
}

export default NextSection;
