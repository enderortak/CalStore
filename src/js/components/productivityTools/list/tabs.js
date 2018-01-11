import React from "react";
import propTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Tabs = ({ filters }) => (
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

Tabs.propTypes = {
  filters: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Tabs;
