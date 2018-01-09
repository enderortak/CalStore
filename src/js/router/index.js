import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { ModalContainer, ModalRoute } from 'react-router-modal';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ListProductivityToolsPage from "../containers/productivityTools/ListView";
import ListScientificPapersPage from "../containers/scientificPapers/list";
import TechnicalPresentationsPage from "../containers/TechnicalPresentationsPage";

import ProductivityToolDetails from "../components/productivityTools/ItemDetails";
import "../../style/route-animations.scss";

const MainRouter = props => (
  <AnimatedSwitch
    {...props}
    atEnter={{ opacity: 0, left: 100 }}
    atLeave={{ opacity: 0, left: spring(-100, { stiffness: 150, damping: 14 }) }}
    atActive={{ opacity: 1, left: spring(3, { stiffness: 150, damping: 14 }) }}
    className="switch-wrapper"
  >
    <Redirect exact path="/ProductivityTools" to="/ProductivityTools/All" />
    <Route path="/ProductivityTools/:filter" component={ListProductivityToolsPage} />
    <Route path="/ScientificPapers" component={ListScientificPapersPage} />
    <Route path="/TechnicalPresentations" component={TechnicalPresentationsPage} />

  </AnimatedSwitch>

);


export { MainRouter };
