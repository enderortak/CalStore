const utilityToolsVisibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_UTILITY_TOOLS_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default utilityToolsVisibilityFilter;
