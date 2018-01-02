import React from "react";
import propTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const GalleryTabFilter = ({ filters, setTypeFilter, typeFilter }) => (
  <Menu secondary pointing>
    {filters.map(filter => (
      <Menu.Item
        onClick={() => setTypeFilter(filter.key)}
        key={filter.key}
        active={filter.key === typeFilter}
      >{filter.name}
      </Menu.Item>
    ))}
  </Menu>
);

GalleryTabFilter.propTypes = {
  filters: propTypes.arrayOf(propTypes.object).isRequired,
  setTypeFilter: propTypes.func.isRequired,
};

export default GalleryTabFilter;
