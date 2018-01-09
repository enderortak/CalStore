import React from "react";
import propTypes from "prop-types";
import FlipMove from "react-flip-move";
import GalleryItem from "./GalleryItem";


class Gallery extends React.Component {
  state = {
    animating: false,
  }
  handleAnimationStart() {}
  render() {
    const { productivityTools, textFilter } = this.props;
    return (
      <div className="ui link cards gallery" style={{ position: "relative", padding: "0" }}>
        <FlipMove duration={500} easing="ease-out" typeName={null} >
          {
            productivityTools.map((tool, index) =>
              (<GalleryItem
                key={index}
                textFilter={textFilter}
                {...tool}
              />))
          }
        </FlipMove>
      </div>
    );
  }
}

Gallery.propTypes = {
  productivityTools: propTypes.arrayOf(propTypes.object).isRequired,
  textFilter: propTypes.string,
};

Gallery.defaultProps = {
  textFilter: "",
};

export default Gallery;
