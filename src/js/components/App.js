import React from "react";
import Navigation from "./Navigation";
import { MainRouter } from "../router";
import RouteModal from "./RouteModal";
import "../../style/components/App.scss";

const App = () => (
  <div id="layout">
    <Navigation />
    <div className="main-content">
      <MainRouter />
    </div>
  </div>
);


export default App;

