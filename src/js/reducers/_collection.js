import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import productivityToolsVisibilityFilter from "./productivityToolsVisibilityFilter";
import productivityTools from "./productivityTools";
import academicPapers from "./academicPapers";
import academicPapersVisibilityFilter from "./academicPapersVisibilityFilter";
import academicPapersKeywordList from "./academicPapersKeywordList";


const reducerCollection = combineReducers({
  productivityTools,
  productivityToolsVisibilityFilter,
  academicPapers,
  academicPapersVisibilityFilter,
  academicPapersKeywordList,
  router: routerReducer,
});

export default reducerCollection;
