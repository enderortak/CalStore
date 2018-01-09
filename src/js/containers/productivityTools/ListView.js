import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Gallery from "../../components/productivityTools/Gallery";
import GalleryTabFilter from "../../components/productivityTools/GalleryTabFilter";
import SearchInput from "../../components/SeachInput";
// import AddToolButton from "../../containers/productivityTools/AddView";
import AddProductivityToolPage from "./AddView";
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

class List extends React.Component {
  static propTypes ={
    match: propTypes.object.isRequired,
    setTypeFilter: propTypes.func.isRequired,
    setTextFilter: propTypes.func.isRequired,
    productivityTools: propTypes.arrayOf(propTypes.object).isRequired,
    textFilter: propTypes.string,
  }
  static defaultProps = {
    textFilter: "",
  }
  shouldComponentUpdate(nextProps) {
    const {
      match, setTypeFilter, productivityTools, textFilter,
    } = this.props;
    if (nextProps.match.params.filter !== match.params.filter && nextProps.match.params.filter !== "Add") {
      setTypeFilter(nextProps.match.params.filter);
    }
    return (productivityTools !== nextProps.productivityTools ||
      textFilter !== nextProps.textFilter || nextProps.match.params.filter !== match.params.filter);
  }
  render() {
    const {
      productivityTools, setTextFilter, textFilter,
    } = this.props;
    return (
      <div>
        <Button as={Link} to="/ProductivityTools/Add"> Add</Button>
        <Route path="/ProductivityTools/Add" component={AddProductivityToolPage} />
        <GalleryTabFilter filters={filters} />
        <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />

        <Gallery
          productivityTools={productivityTools}
          textFilter={textFilter}
        />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
