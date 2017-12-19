import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./GalleryItem";

const Gallery = ({ scientificPapers, textFilter }) => (
  <div className="ui link divided items gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {scientificPapers.map(paper => <GalleryItem key={paper.title} {...paper} textFilter={textFilter} />)}
    </FlipMove>
  </div>
);

Gallery.propTypes = {
  scientificPapers: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Gallery;
