import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
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
  form: formReducer,
});

export default reducerCollection;
