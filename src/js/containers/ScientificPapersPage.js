import React from "react";
import { connect } from "react-redux";
import { Divider } from "semantic-ui-react";
import Gallery from "../components/galleries/papers/Gallery";
import SearchInput from "../components/SeachInput";
import GalleryKeywordFilter from "../components/galleries/papers/GalleryKeywordFilter";
import { setScientificPapersKeywordFilter, setScientificPapersTextFilter } from "../actions/scientificPapers";


const getVisiblePapers = (scientificPapers, filter) => {
  let papers = scientificPapers;
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
  scientificPapers: getVisiblePapers(
    state.scientificPapers,
    state.scientificPapersVisibilityFilter,
  ),
  textFilter: state.scientificPapersVisibilityFilter.textFilter,
  keywords: state.scientificPapersKeywordList,
});
const mapDispatchToProps = dispatch => ({
  setKeywordFilter: (filter) => {
    dispatch(setScientificPapersKeywordFilter(filter));
  },
  setTextFilter: (filter) => {
    dispatch(setScientificPapersTextFilter(filter));
  },
});

const ScientificPapersPage = connect(mapStateToProps, mapDispatchToProps)(({
  scientificPapers, setKeywordFilter, setTextFilter, textFilter, keywords,
}) => (
  <div>
    <GalleryKeywordFilter keywords={keywords} setKeywordFilter={setKeywordFilter} />
    <Divider horizontal content="OR" style={{ marginBottom: "0" }} />
    <SearchInput onChange={event => setTextFilter(event.target.value)} placeholder="Search..." />
    <Gallery scientificPapers={scientificPapers} setTextFilter={setTextFilter} textFilter={textFilter} />
  </div>
));

export default ScientificPapersPage;

