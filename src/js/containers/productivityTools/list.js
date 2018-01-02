import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Gallery from "../../components/productivityTools/gallery";
import GalleryTabFilter from "../../components/productivityTools/galleryTabFilter";
import SearchInput from "../../components/SeachInput";
import { setProductivityToolsTypeFilter, setProductivityToolsTextFilter } from "../../actions/productivityTools";
import filters from "../../data/filters";


const getVisibleProductivityTools = (productivityTools, filter) => {
  let tools;
  switch (filter.typeFilter) {
    case "MatlabTools":
      tools = productivityTools.filter(t => t.type === "MATLAB_TOOL");
      break;
    case "ConcertoScripts":
      tools = productivityTools.filter(t => t.type === "CONCERTO_SCRIPT");
      break;
    case "ExcelMacros":
      tools = productivityTools.filter(t => t.type === "EXCEL_MACRO");
      break;
    case "AtiIncaScripts":
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
  typeFilter: state.productivityToolsVisibilityFilter.typeFilter,
});
const mapDispatchToProps = dispatch => ({
  setTypeFilter: (filter) => {
    dispatch(setProductivityToolsTypeFilter(filter));
  },
  setTextFilter: (filter) => {
    dispatch(setProductivityToolsTextFilter(filter));
  },
});

const List = connect(mapStateToProps, mapDispatchToProps)(({
  match, productivityTools, setTypeFilter, setTextFilter, textFilter, typeFilter,
}) =>
  (
    <div>
      <GalleryTabFilter filters={filters} setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
      <Route path={`${match.url}/:filter`} render={props => <div>{props.match.params.filter}</div>} />
      <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
      <Gallery
        productivityTools={productivityTools}
        setTextFilter={setTextFilter}
        textFilter={textFilter}
        match={match}
      />
    </div>
  ));

class SetTypeFilter extends React.Component {
  componentDidUpdate() {
    this.props.action();
  }
  render() {
    return null;
  }
}
export default List;
