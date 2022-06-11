import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from 'history';
import "./styles.css";

import App from "./Pages/App";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import ScrollToTop from "./Components/General/ScrollToTop";
import BDT from "./Pages/BDT";
import Team from "./Pages/Team";
import Application from "./Pages/Application";
import PageNotFound from "./Components/General/PageNotFound";
import ReactGA from "react-ga4";

const rootElement = document.getElementById("root");
const history = createBrowserHistory();

ReactGA.initialize("G-GC3DF08WD9");

history.listen(() => {
  ReactGA.set({ page: window.location.pathname }); // Update the user's current page
  ReactGA.send({ hitType: "pageview", page: window.location.pathname});
});





ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes history={history}>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/BDT" element={<BDT />} />
        <Route path="/team" element={<Team />} />
        <Route path="/application" element={<Application/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
