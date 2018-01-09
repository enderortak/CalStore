import React from "react";
import { ToastContainer } from 'react-toastify';
import Navigation from "./Navigation";
import { MainRouter } from "../router";
import "../../style/components/App.scss";

const App = () => (
  <div id="layout">
    <Navigation />
    <div className="main-content">
      <MainRouter />
    </div>
    <ToastContainer />
  </div>
);


export default App;

