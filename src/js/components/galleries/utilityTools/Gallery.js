import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./GalleryItem";

const Gallery = ({ utilityTools }) => (
  <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {utilityTools.map(tool => <GalleryItem key={tool.name} {...tool} />)}
    </FlipMove>
  </div>
);

Gallery.propTypes = {
  utilityTools: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Gallery;
