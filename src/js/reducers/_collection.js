import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import productivityToolsVisibilityFilter from "./productivityToolsVisibilityFilter";
import productivityTools from "./productivityTools";
import academicPapers from "./academicPapers";
import academicPapersVisibilityFilter from "./academicPapersVisibilityFilter";


const reducerCollection = combineReducers({
  productivityTools,
  productivityToolsVisibilityFilter,
  academicPapers,
  academicPapersVisibilityFilter,

  router: routerReducer,
});

export default reducerCollection;
