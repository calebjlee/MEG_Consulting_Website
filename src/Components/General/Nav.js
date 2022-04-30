import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Images/Home/logo1.png";
import logo1 from "../../Images/Home/logo2.png";
import { useState, useEffect } from "react";

const api = {
  key: "496b8228423df44de2d6d782eb53fb6d",
  base: "https://api.openweathermap.org/data/2.5"
};

const LogoContainer = styled.div`
  color: #1e1e1e;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: auto;
  width: 30vw;
  max-width: 700px;
  max-height: 100px;
  min-width: 250px;
  margin: 0;
  padding: 0;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 4vw;
  left: 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93vw;
`;

const NavSelectionContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  color: #1e1e1e;
`;

const NavTextContainer = styled.div`
  margin-right: 2vw;
`;

const NavText = styled.div`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 3vmin;
  font-weight: 400;
`;

function Nav(props) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    // call an API and in the success or failure fill the data buy using setData function
    // it could be like below
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=42.2808&lon=-83.7430&exclude=hourly,daily,alerts,minutely&units=imperial&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(Math.round(result.current.temp));
        console.log(result.current.temp);
      })
      .catch((err) => setError(err));
  }, []);

  const logos = [logo, logo1];

  const getCurrentDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };

  return (
    <NavContainer>
      <Link to="/">
        <LogoContainer>
          <LogoImage src={logos[props.color]} />
        </LogoContainer>
      </Link>
      <NavSelectionContainer
        style={{
          color: props.color ? "white" : "#1e1e1e",
          display: props.home ? "felx" : "none"
        }}
      >
        <Link to="/about" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>About Us</NavText>
          </NavTextContainer>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "#1e1e1e" }}
        >
          <NavTextContainer>
            <NavText>Projects</NavText>
          </NavTextContainer>
        </Link>
        <Link to="/team" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>Our Team</NavText>
          </NavTextContainer>
        </Link>
        <Link to="/application" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>Application</NavText>
          </NavTextContainer>
        </Link>
      </NavSelectionContainer>

      <NavSelectionContainer
        style={{
          color: props.color ? "#DBBDD3" : "#1e1e1e",
          display: props.home ? "none" : "flex"
        }}
      >
        <NavTextContainer>
          <NavText>Ann Arbor MI</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>|</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>{data}&#176;F</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>|</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>{getCurrentDate(new Date())}</NavText>
        </NavTextContainer>
      </NavSelectionContainer>
    </NavContainer>
  );
}

export default Nav;
