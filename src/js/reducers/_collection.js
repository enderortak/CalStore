import { combineReducers } from "redux";
import productivityToolsVisibilityFilter from "./productivityToolsVisibilityFilter";
import productivityTools from "./productivityTools";
import scientificPapers from "./scientificPapers";
import scientificPapersVisibilityFilter from "./scientificPapersVisibilityFilter";
import scientificPapersKeywordList from "./scientificPapersKeywordList";


const reducerCollection = combineReducers({
  productivityTools,
  productivityToolsVisibilityFilter,
  scientificPapers,
  scientificPapersVisibilityFilter,
  scientificPapersKeywordList,
});

export default reducerCollection;
