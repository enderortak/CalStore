import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ListProductivityToolsPage from "../containers/productivityTools/list";
import ListScientificPapersPage from "../containers/scientificPapers/list";
import TechnicalPresentationsPage from "../containers/TechnicalPresentationsPage";
import AddProductivityToolPage from "../containers/productivityTools/add";
import ProductivityToolDetails from "../components/productivityTools/details";
import "../../style/route-animations.scss";

const MainRouter = props => (
  <AnimatedSwitch
    {...props}
    atEnter={{ opacity: 0, left: 100 }}
    atLeave={{ opacity: 0, left: spring(-100, { stiffness: 150, damping: 14 }) }}
    atActive={{ opacity: 1, left: spring(3, { stiffness: 150, damping: 14 }) }}
    className="switch-wrapper"
  >
    <Redirect from="/ProductivityTools" exact to="/ProductivityTools/All" />
    <Route path="/ProductivityTools" component={ListProductivityToolsPage} />
    <ModalRoute component={ProductivityToolDetails} path="/ProductivityTools/Details" className="ui modal" />
    <Route path="/ScientificPapers" component={ListScientificPapersPage} />
    <Route path="/TechnicalPresentations" component={TechnicalPresentationsPage} />
    <Route path="/ProductivityTools/Add" component={AddProductivityToolPage} />
    <ModalContainer />
  </AnimatedSwitch>
);

const a = "";

export { MainRouter, a };
