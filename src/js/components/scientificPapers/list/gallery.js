import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./item";

const Gallery = ({ scientificPapers, textFilter }) => (
  <div className="ui link divided items gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {
        scientificPapers.map((paper, index) => (
          <GalleryItem
            key={index}
            textFilter={textFilter}
            {...paper}
          />
        ))
      }
    </FlipMove>
  </div>
);


Gallery.propTypes = {
  scientificPapers: propTypes.arrayOf(propTypes.object).isRequired,
  textFilter: propTypes.string,
};
Gallery.defaultProps = {
  textFilter: "",
};

export default Gallery;
