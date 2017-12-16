import React from "react";
import propTypes from "prop-types";
import GenericGallery from "../Gallery";
import GalleryItem from "./GalleryItem";

const Gallery = ({ utilityTools }) => (
  <GenericGallery>
    {utilityTools.map(tool => <GalleryItem key={tool.name} {...tool} />)}
  </GenericGallery>
);

Gallery.propTypes = {
  utilityTools: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Gallery;
