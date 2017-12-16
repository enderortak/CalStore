import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import utilityToolsVisibilityFilter from "./utilityToolsVisibilityFilter";
import utilityTools from "./utilityTools";


const reducerCollection = combineReducers({
  utilityTools,
  utilityToolsVisibilityFilter,
  router: routerReducer,
});

export default reducerCollection;
