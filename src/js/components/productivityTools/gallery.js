import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./galleryItem";

const Gallery = ({ productivityTools, textFilter }) => (
  <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {
        productivityTools.map(tool =>
          (<GalleryItem
            key={tool.name}
            textFilter={textFilter}
            {...tool}
          />))
      }
    </FlipMove>
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
