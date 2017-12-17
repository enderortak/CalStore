import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Gallery from "../components/galleries/utilityTools/Gallery";
import GalleryTabFilter from "../components/galleries/utilityTools/GalleryTabFilter";
import SearchInput from "../components/SeachInput";
import { setUtilityToolsTypeFilter, setUtilityToolsTextFilter } from "../actions/utilityTools";
import filters from "../data/filters";


const getVisibleUtilityTools = (utilityTools, filter) => {
  let tools;
  switch (filter.typeFilter) {
    case "SHOW_MATLAB_TOOLS":
      tools = utilityTools.filter(t => t.type === "MATLAB_TOOL");
      break;
    case "SHOW_CONCERTO_SCRIPTS":
      tools = utilityTools.filter(t => t.type === "CONCERTO_SCRIPT");
      break;
    case "SHOW_EXCEL_MACROS":
      tools = utilityTools.filter(t => t.type === "EXCEL_MACRO");
      break;
    case "SHOW_ATI_INCA_SCRIPTS":
      tools = utilityTools.filter(t => t.type === "ATI_INCA_SCRIPT");
      break;
    default:
      tools = utilityTools;
  }
  if (filter.textFilter) {
    tools = tools.filter(t =>
      t.name.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()));
  }
  return tools;
};

const mapStateToProps = state => ({
  utilityTools: getVisibleUtilityTools(
    state.utilityTools,
    state.utilityToolsVisibilityFilter,
  ),
});
const mapDispatchToProps = dispatch => ({
  setTypeFilter: (filter) => {
    dispatch(setUtilityToolsTypeFilter(filter));
  },
  setTextFilter: (filter) => {
    dispatch(setUtilityToolsTextFilter(filter));
  },
});

const UtilityToolsPage = connect(mapStateToProps, mapDispatchToProps)(({
  utilityTools, history, setTypeFilter, setTextFilter,
}) => {
  history.listen((location) => {
    switch (location.pathname) {
      case "/UtilityTools/All": setTypeFilter("SHOW_ALL"); break;
      case "/UtilityTools/MatlabTools": setTypeFilter("SHOW_MATLAB_TOOLS"); break;
      case "/UtilityTools/ConcertoScripts": setTypeFilter("SHOW_CONCERTO_SCRIPTS"); break;
      case "/UtilityTools/ExcelMacros": setTypeFilter("SHOW_EXCEL_MACROS"); break;
      case "/UtilityTools/AtiIncaScripts": setTypeFilter("SHOW_ATI_INCA_SCRIPTS"); break;
      default: setTypeFilter("SHOW_ALL");
    }
  });
  return (
    <div>
      <GalleryTabFilter filters={filters} />
      <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
      <Gallery utilityTools={utilityTools} setTextFilter={setTextFilter} />
    </div>
  );
});

export default withRouter(UtilityToolsPage);
