import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Link = props => (<NavLink {...props} className="item" />);
const GalleryTabFilter = ({ filters }) => (
  <div className="ui secondary pointing menu">
    {filters.map(filter => (
      <Link to={filter.url} key={filter.url}>{filter.name}</Link>
    ))}
  </div>
);

GalleryTabFilter.propTypes = {
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};

export default GalleryTabFilter;
