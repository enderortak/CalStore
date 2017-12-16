import { connect } from "react-redux";
import UtilityToolsComponent from "../components/UtilityTools";
import { setUtilityToolsTypeFilter } from "../actions/utilityTools";

const getVisibleUtilityTools = (utilityTools, filter) => {
  switch (filter) {
    case "SHOW_MATLAB_TOOLS":
      return utilityTools.filter(t => t.toolType === "MATLAB_TOOL");
    case "SHOW_CONCERTO_SCRIPTS":
      return utilityTools.filter(t => t.toolType === "CONCERTO_SCRIPT");
    case "SHOW_EXCEL_MACROS":
      return utilityTools.filter(t => t.toolType === "EXCEL_MACRO");
    case "SHOW_ATI_INCA_SCRIPTS":
      return utilityTools.filter(t => t.toolType === "ATI_INCA_SCRIPT");
    case "SHOW_ALL":
    default:
      return utilityTools;
  }
};

const mapStateToProps = state => ({
  visibleUtilityTools: getVisibleUtilityTools(
    state.utilityTools,
    state.utilityToolsVisibilityFilter,
  ),
});

const mapDispatchToProps = dispatch => ({
  setUtilityToolsTypeFilter: (filter) => {
    dispatch(setUtilityToolsTypeFilter(filter));
  },
});

const VisibleUtilityToolList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UtilityToolsComponent);

export default VisibleUtilityToolList;
