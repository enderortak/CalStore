import React from "react";
import { Route, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import Navigation from "./Navigation";
import ProductivityToolsPage from "../containers/ProductivityToolsPage";
import AcademicPapersPage from "../containers/AcademicPapersPage";
import TechnicalPresentationsPage from "../containers/TechnicalPresentationsPage";
import "../../style/components/App.scss";
import "../../style/route-animations.scss";

const Hello = () => (
  <img src="https://www.w3schools.com/bootstrap/la.jpg" width="500" alt="1" />
);
const Hello2 = () => (
  <img src="https://www.w3schools.com/bootstrap/chicago.jpg" width="500" alt="2" />
);


const Content = () => (
  <div className="main-content">
    <AnimatedSwitch
      atEnter={{ opacity: 0, left: 100 }}
      atLeave={{ opacity: 0, left: spring(-100, { stiffness: 150, damping: 14 }) }}
      atActive={{ opacity: 1, left: spring(3, { stiffness: 150, damping: 14 }) }}
      className="switch-wrapper"
    >
      <Redirect from="/ProductivityTools" exact to="/ProductivityTools/All" />
      <Route path="/ProductivityTools" component={ProductivityToolsPage} />
      <Route path="/AcademicPapers" component={AcademicPapersPage} />
      <Route path="/TechnicalPresentations" component={TechnicalPresentationsPage} />
      <Route path="/1" component={Hello} />
      <Route path="/2" component={Hello2} />
    </AnimatedSwitch>
  </div>
);
const App = () => (
  <div id="layout">
    <Navigation />
    <Content />
  </div>
);

export default App;
