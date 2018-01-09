import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./GalleryItem";

const Gallery = ({ productivityTools, textFilter, match }) => (
  <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>

    {
        productivityTools.map(tool =>
          (<GalleryItem
            key={tool.name}
            textFilter={textFilter}
            {...tool}
          />))
      }

  </div>
);

Gallery.propTypes = {
  productivityTools: propTypes.arrayOf(propTypes.object).isRequired,
  textFilter: propTypes.string,
};

Gallery.defaultProps = {
  textFilter: "",
};

export default Gallery;
