import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import logo from "../../../../assets/images/CalStoreLogo.png";

// icon url: https://cdn6.aptoide.com/imgs/7/0/5/705d048076a299b3cde1fdcfc059d061_icon.png?w=240
// font: Ford Antenna Medium - 28px
// width: 178x45px
const Logo = () => (
  <div className="item">
    <div className="logo" style={{ textAlign: "center", padding: "1em 0em 3em 0em" }}>
      <img src={logo} alt="logo" />
    </div>
  </div>
);
const Link = props => (<NavLink {...props} className="item" activeClassName="active" />);

const Navigation = () => (
  <div className="ui inverted left vertical menu">
    <Logo />
    <Link to="/ProductivityTools"><Icon name="configure" style={menuItemIconStyle} />Productivity Tools</Link>
    <Link to="/ScientificPapers"><Icon name="file text outline" style={menuItemIconStyle} />Scientific Papers</Link>
  </div>
);

const menuItemIconStyle = {
  float: "left",
  margin: "0em 0.5em 0em 0em",
};
const placeholder = () => (
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
);
export default Navigation;
