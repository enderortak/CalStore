import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./GalleryItem";

const Gallery = ({ academicPapers }) => (
  <div className="ui link divided items gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {academicPapers.map(paper => <GalleryItem key={paper.title} {...paper} />)}
    </FlipMove>
  </div>
);

Gallery.propTypes = {
  academicPapers: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Gallery;
