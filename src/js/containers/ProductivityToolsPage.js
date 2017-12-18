import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Gallery from "../components/galleries/productivityTools/Gallery";
import GalleryTabFilter from "../components/galleries/productivityTools/GalleryTabFilter";
import SearchInput from "../components/SeachInput";
import { setProductivityToolsTypeFilter, setProductivityToolsTextFilter } from "../actions/productivityTools";
import filters from "../data/filters";


const getVisibleProductivityTools = (productivityTools, filter) => {
  let tools;
  switch (filter.typeFilter) {
    case "SHOW_MATLAB_TOOLS":
      tools = productivityTools.filter(t => t.type === "MATLAB_TOOL");
      break;
    case "SHOW_CONCERTO_SCRIPTS":
      tools = productivityTools.filter(t => t.type === "CONCERTO_SCRIPT");
      break;
    case "SHOW_EXCEL_MACROS":
      tools = productivityTools.filter(t => t.type === "EXCEL_MACRO");
      break;
    case "SHOW_ATI_INCA_SCRIPTS":
      tools = productivityTools.filter(t => t.type === "ATI_INCA_SCRIPT");
      break;
    default:
      tools = productivityTools;
  }
  if (filter.textFilter) {
    tools = tools.filter(t =>
      t.name.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()) ||
      t.description.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()));
  }
  return tools;
};

const mapStateToProps = state => ({
  productivityTools: getVisibleProductivityTools(
    state.productivityTools,
    state.productivityToolsVisibilityFilter,
  ),
  textFilter: state.productivityToolsVisibilityFilter.textFilter,
});
const mapDispatchToProps = dispatch => ({
  setTypeFilter: (filter) => {
    dispatch(setProductivityToolsTypeFilter(filter));
  },
  setTextFilter: (filter) => {
    dispatch(setProductivityToolsTextFilter(filter));
  },
});

const ProductivityToolsPage = connect(mapStateToProps, mapDispatchToProps)(({
  productivityTools, history, setTypeFilter, setTextFilter, textFilter,
}) => {
  history.listen((location) => {
    switch (location.pathname) {
      case "/ProductivityTools/All": setTypeFilter("SHOW_ALL"); break;
      case "/ProductivityTools/MatlabTools": setTypeFilter("SHOW_MATLAB_TOOLS"); break;
      case "/ProductivityTools/ConcertoScripts": setTypeFilter("SHOW_CONCERTO_SCRIPTS"); break;
      case "/ProductivityTools/ExcelMacros": setTypeFilter("SHOW_EXCEL_MACROS"); break;
      case "/ProductivityTools/AtiIncaScripts": setTypeFilter("SHOW_ATI_INCA_SCRIPTS"); break;
      default: setTypeFilter("SHOW_ALL");
    }
  });
  return (
    <div>
      <GalleryTabFilter filters={filters} />
      <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
      <Gallery productivityTools={productivityTools} setTextFilter={setTextFilter} textFilter={textFilter} />
    </div>
  );
});

export default withRouter(ProductivityToolsPage);
