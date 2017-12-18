const academicPapersVisibilityFilter = (state = { keywords: [], textFilter: undefined }, action) => {
  switch (action.type) {
    case "SET_ACADEMIC_PAPERS_KEYWORD_FILTER":
      return { ...state, keywords: action.filter };
    case "SET_ACADEMIC_PAPERS_TEXT_FILTER":
      return { ...state, textFilter: action.filter };
    default:
      return state;
  }
};

export default academicPapersVisibilityFilter;
