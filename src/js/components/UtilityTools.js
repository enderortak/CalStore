import React from "react";
import { NavLink, Route, Redirect, withRouter } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import FlipMove from "react-flip-move";
import { Rating } from "semantic-ui-react";


const Link = props => (<NavLink {...props} className="item" />);
const Nav = () => (
  <div className="ui secondary pointing menu">
    <Link to="/UtilityTools/All">All</Link>
    <Link to="/UtilityTools/MatlabTools">Matlab Tools</Link>
    <Link to="/UtilityTools/ConcertoScripts">Concerto Scripts</Link>
    <Link to="/UtilityTools/ExcelMacros">Excel Macros</Link>
    <Link to="/UtilityTools/AtiIncaScripts">ATI/INCA Scripts</Link>
  </div>
);
const All = () => (<div>All here</div>);
const MatlabTools = () => (<div>Matlab Tools here</div>);
const ConcertoScripts = () => (<div>Concerto Scripts here</div>);
const ExcelMacros = () => (<div>Excel Macros here</div>);
const AtiIncaScripts = () => (<div>ATI/INCA Scripts here</div>);

const Content2 = () => (
  <div>
    <AnimatedSwitch
      atEnter={{ opacity: 0, left: 100 }}
      atLeave={{ opacity: 0, left: spring(-100, { stiffness: 150, damping: 14 }) }}
      atActive={{ opacity: 1, left: spring(0, { stiffness: 150, damping: 14 }) }}
      className="main-content switch-wrapper"
    >
      <Redirect from="/UtilityTools" exact to="/UtilityTools/All" />
      <Route path="/UtilityTools/All" component={All} />
      <Route path="/UtilityTools/MatlabTools" component={MatlabTools} />
      <Route path="/UtilityTools/ConcertoScripts" component={ConcertoScripts} />
      <Route path="/UtilityTools/ExcelMacros" component={ExcelMacros} />
      <Route path="/UtilityTools/AtiIncaScripts" component={AtiIncaScripts} />
    </AnimatedSwitch>
  </div>
);
const Tool = ({ name, type }) => (
  [
    <div className="image" style={{ padding: "3em" }}>
      <img
        src={
        type === "MATLAB_TOOL" ? "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
        : "https://www.avl.com/teamsuite/CONCERTO_256x256.png"
      }

      />
    </div>,
    <div className="content">
      <div className="header">{ name.toString() }</div>
      <div className="meta">
        {type === "MATLAB_TOOL" ? "Matlab Tool" : "Concerto Script"}
      </div>
      <div className="description">
        {`This is the brief description of this ${type === "MATLAB_TOOL" ? "Matlab tool" : "Concerto script"}`}
      </div>
    </div>,
    <div className="extra content">
      <div>
        <span>Author</span>
        <span className="right floated"><i className="user icon" />{type === "MATLAB_TOOL" ? "Metin Yılmaz" : "Ender Ortak"}</span>
      </div>
      <div>
        <span>Added on</span>
        <span className="right floated"><i className="calendar icon" />01.01.2017</span>
      </div>
    </div>,
    <div className="extra content">
      <div>
        <span className="right floated">
          <i className="download icon" />
        75 Downloads
        </span>
        <span>
      Rating:
          <Rating icon="star" defaultRating={3} maxRating={5} disabled />
        </span>
      </div>
      <div>
        <span><i className="comment outline icon" />8 Comments</span>
      </div>
    </div>,
  ]
);
const Content = ({ visibleUtilityTools }) => (
  <FlipMove duration={500} easing="ease-out" className="ui link cards">
    {visibleUtilityTools.map(tool => (
      <div key={tool.name.toString()} className="card">
        <Tool name={tool.name.toString()} type={tool.toolType} />
      </div>
      ))}
  </FlipMove>
);

const UtilityTools = ({ history, setVisibilityFilter, visibleUtilityTools }) => {
  history.listen((location, action) => {
    switch (location.pathname) {
      case "/UtilityTools/All": setVisibilityFilter("SHOW_ALL"); break;
      case "/UtilityTools/MatlabTools": setVisibilityFilter("SHOW_MATLAB_TOOLS"); break;
      case "/UtilityTools/ConcertoScripts": setVisibilityFilter("SHOW_CONCERTO_SCRIPTS"); break;
      case "/UtilityTools/ExcelMacros": setVisibilityFilter("SHOW_EXCEL_MACROS"); break;
      case "/UtilityTools/AtiIncaScripts": setVisibilityFilter("SHOW_ATI_INCA_SCRIPTS"); break;
      default: setVisibilityFilter("SHOW_ALL");
    }

    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
  });
  return (
    <div>
      <Nav />
      <Content visibleUtilityTools={visibleUtilityTools} />
    </div>
  );
};

export default withRouter(UtilityTools);

