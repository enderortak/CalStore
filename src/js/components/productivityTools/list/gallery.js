import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";

import Item from "./item";


class Gallery extends React.Component {
  state = {
    animating: false,
  }
  handleAnimationStart() {}
  render() {
    const {
      productivityTools, textFilter, typeFilters, setTextFilter,
    } = this.props;
    return (
      <div>


        <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>
          <FlipMove duration={500} easing="ease-out" typeName={null} >
            {
            productivityTools.map((tool, index) =>
              (<Item
                key={index}
                textFilter={textFilter}
                {...tool}
              />))
          }
          </FlipMove>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  productivityTools: propTypes.arrayOf(propTypes.object).isRequired,
  textFilter: propTypes.string,
  // typeFilters: propTypes.arrayOf(propTypes.obj).isRequired,
  setTextFilter: propTypes.func.isRequired,
};

Gallery.defaultProps = {
  textFilter: "",
};


export default Gallery;
