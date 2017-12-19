import React from "react";
import propTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const GalleryKeywordFilter = ({ keywords, setKeywordFilter }) => (
  <Dropdown
    placeholder="Filter tags"
    fluid
    multiple
    selection
    search
    icon={null}
    onChange={(event, data) => setKeywordFilter(data.value)}
    options={keywords.map(k => ({
        key: k, value: k, text: k, icon: "tag",
    }))}
  />
);

GalleryKeywordFilter.propTypes = {
  keywords: propTypes.arrayOf(propTypes.string).isRequired,
  setKeywordFilter: propTypes.func.isRequired,
};

export default GalleryKeywordFilter;
