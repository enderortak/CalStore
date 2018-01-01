import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="item">
    <div className="logo" style={{ textAlign: "center", padding: "1em" }}>
      <div
        className="logo-placeholder"
        style={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            border: "2px dashed",
            borderRadius: "50px",
            lineHeight: "90px",
            fontSize: "1.5em",
        }}
      >Logo
      </div>
    </div>
  </div>
);
const Link = props => (<NavLink {...props} className="item" activeClassName="active" />);

const Navigation = () => (
  <div className="ui inverted left vertical menu">
    <Logo />
    <Link to="/ProductivityTools">Productivity Tools</Link>
    <Link to="/ScientificPapers">Scientific Papers</Link>
    <Link to="/SharedWebContent">Shared Web Content</Link>
    <Link to="/WorkPackages">Process Documents</Link>
    <Link to="/ProductivityTools/Add">Reading Materials</Link>
    <Link to="/ScientificPapers/qwe">Reading Materials</Link>
  </div>
);

export default Navigation;
