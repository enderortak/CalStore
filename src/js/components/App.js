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
      <RouteModal route="/ScientificPapers/qwe">
        <div>Hello route modal!</div>
      </RouteModal>
    </div>
  </div>
);

export const Asd = () => (
  <RouteModal route="/asd">
    <div>Hello route modal!</div>
  </RouteModal>
);

export default App;

