import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import utilityToolsVisibilityFilter from "./utilityToolsVisibilityFilter";
import utilityTools from "./utilityTools";
import academicPapers from "./academicPapers";
import academicPapersVisibilityFilter from "./academicPapersVisibilityFilter";


const reducerCollection = combineReducers({
  utilityTools,
  utilityToolsVisibilityFilter,
  academicPapers,
  academicPapersVisibilityFilter,

  router: routerReducer,
});

export default reducerCollection;
