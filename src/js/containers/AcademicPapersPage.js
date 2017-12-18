import React from "react";
import { connect } from "react-redux";
import Gallery from "../components/galleries/papers/Gallery";
import SearchInput from "../components/SeachInput";
import { setAcademicPapersKeywordFilter, setAcademicPapersTextFilter } from "../actions/academicPapers";


const getVisiblePapers = (academicPapers, filter) => {
  let papers = academicPapers;
  if (filter.keywords.length > 0) {
    papers = papers.filter(p =>
      p.keywords.filter(n => filter.keywords.includes(n)).length > 0);
  }

  if (filter.textFilter) {
    papers = papers.filter(p =>
      p.title.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()));
  }

  return papers;
};

const mapStateToProps = state => ({
  academicPapers: getVisiblePapers(
    state.academicPapers,
    state.academicPapersVisibilityFilter,
  ),
});
const mapDispatchToProps = dispatch => ({
  setKeywordFilter: (filter) => {
    dispatch(setAcademicPapersKeywordFilter(filter));
  },
  setTextFilter: (filter) => {
    dispatch(setAcademicPapersTextFilter(filter));
  },
});

const AcademicPapersPage = connect(mapStateToProps, mapDispatchToProps)(({
  academicPapers, setKeywordFilter, setTextFilter,
}) => (
  <div>
    <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
    <Gallery academicPapers={academicPapers} setTextFilter={setTextFilter} />
  </div>
));

export default AcademicPapersPage;

