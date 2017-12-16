import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";

const Gallery = ({ children }) => (
  <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>
    <FlipMove duration={500} easing="ease-out" typeName={null} >
      {children}
    </FlipMove>
  </div>
);

Gallery.propTypes = {
  children: propTypes.node.isRequired,
};

export default Gallery;
