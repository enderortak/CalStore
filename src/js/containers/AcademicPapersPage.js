import React from "react";
import { connect } from "react-redux";
import { Divider } from "semantic-ui-react";
import Gallery from "../components/galleries/papers/Gallery";
import SearchInput from "../components/SeachInput";
import GalleryKeywordFilter from "../components/galleries/papers/GalleryKeywordFilter";
import { setAcademicPapersKeywordFilter, setAcademicPapersTextFilter } from "../actions/academicPapers";


const getVisiblePapers = (academicPapers, filter) => {
  let papers = academicPapers;
  if (filter.keywords.length > 0) {
    papers = papers.filter(p =>
      p.keywords.filter(n => filter.keywords.includes(n)).length > 0);
  }

  if (filter.textFilter) {
    papers = papers.filter(p =>
      p.title.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()) ||
      p.abstract.toLocaleLowerCase().includes(filter.textFilter.toLocaleLowerCase()));
  }

  return papers;
};

const mapStateToProps = state => ({
  academicPapers: getVisiblePapers(
    state.academicPapers,
    state.academicPapersVisibilityFilter,
  ),
  textFilter: state.academicPapersVisibilityFilter.textFilter,
  keywords: state.academicPapersKeywordList,
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
  academicPapers, setKeywordFilter, setTextFilter, textFilter, keywords,
}) => (
  <div>
    <GalleryKeywordFilter keywords={keywords} setKeywordFilter={setKeywordFilter} />
    <Divider horizontal content="OR" style={{ marginBottom: "0" }} />
    <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
    <Gallery academicPapers={academicPapers} setTextFilter={setTextFilter} textFilter={textFilter} />
  </div>
));

export default AcademicPapersPage;

