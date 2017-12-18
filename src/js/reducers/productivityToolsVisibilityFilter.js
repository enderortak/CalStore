const productivityToolsVisibilityFilter = (state = { typeFilter: "SHOW_ALL", textFilter: undefined }, action) => {
  switch (action.type) {
    case "SET_UTILITY_TOOLS_TYPE_FILTER":
      return { ...state, typeFilter: action.filter };
    case "SET_UTILITY_TOOLS_TEXT_FILTER":
      return { ...state, textFilter: action.filter };
    default:
      return state;
  }
};

export default productivityToolsVisibilityFilter;
