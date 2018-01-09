import React from "react";
import propTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const GalleryTabFilter = ({ filters }) => (
  <Menu secondary pointing>
    {
      filters.map(filter => (
        <Menu.Item
          as={NavLink}
          to={`/ProductivityTools/${filter.key}`}
        // onClick={() => setTypeFilter(filter.key)}
          key={filter.key}
        >{filter.name}
        </Menu.Item>
    ))
  }
  </Menu>
);

GalleryTabFilter.propTypes = {
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};

export default GalleryTabFilter;
