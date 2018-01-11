import React from "react";
import { ToastContainer } from 'react-toastify';
import Navigation from "./shared/navigation";
import { MainRouter } from "../router.js";
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

