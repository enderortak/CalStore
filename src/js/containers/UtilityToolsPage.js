import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Gallery from "../components/gallery/utilityTools/Gallery";
import GalleryTabFilter from "../components/gallery/GalleryTabFilter";
import { setVisibilityFilter } from "../actions/utilityTools";
import filters from "../data/filters";

const getVisibleUtilityTools = (utilityTools, filter) => {
  switch (filter) {
    case "SHOW_MATLAB_TOOLS":
      return utilityTools.filter(t => t.type === "MATLAB_TOOL");
    case "SHOW_CONCERTO_SCRIPTS":
      return utilityTools.filter(t => t.type === "CONCERTO_SCRIPT");
    case "SHOW_EXCEL_MACROS":
      return utilityTools.filter(t => t.type === "EXCEL_MACRO");
    case "SHOW_ATI_INCA_SCRIPTS":
      return utilityTools.filter(t => t.type === "ATI_INCA_SCRIPT");
    case "SHOW_ALL":
    default:
      return utilityTools;
  }
};

const mapStateToProps = state => ({
  utilityTools: getVisibleUtilityTools(
    state.utilityTools,
    state.utilityToolsVisibilityFilter,
  ),
});
const mapDispatchToProps = dispatch => ({
  setFilter: (filter) => {
    dispatch(setVisibilityFilter(filter));
  },
});

const UtilityToolsPage = connect(mapStateToProps, mapDispatchToProps)(({ utilityTools, history, setFilter }) => {
  history.listen((location, action) => {
    switch (location.pathname) {
      case "/UtilityTools/All": setFilter("SHOW_ALL"); break;
      case "/UtilityTools/MatlabTools": setFilter("SHOW_MATLAB_TOOLS"); break;
      case "/UtilityTools/ConcertoScripts": setFilter("SHOW_CONCERTO_SCRIPTS"); break;
      case "/UtilityTools/ExcelMacros": setFilter("SHOW_EXCEL_MACROS"); break;
      case "/UtilityTools/AtiIncaScripts": setFilter("SHOW_ATI_INCA_SCRIPTS"); break;
      default: setFilter("SHOW_ALL");
    }
  });
  return (
    <div>
      <GalleryTabFilter filters={filters} />
      <Gallery utilityTools={utilityTools} />
    </div>
  );
});

export default withRouter(UtilityToolsPage);
