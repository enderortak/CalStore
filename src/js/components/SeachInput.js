import React from "react";
import propTypes from "prop-types";
import { Input } from "semantic-ui-react";

const SearchInput = ({ onChange, placeholder }) => (
  <div style={{ padding: "1em 0" }}>
    <Input
      fluid
      icon="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

SearchInput.propTypes = {
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
};

export default SearchInput;
