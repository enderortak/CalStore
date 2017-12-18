import React from "react";
import propTypes from "prop-types";
import { Item, Icon, Label, Image, Popup } from "semantic-ui-react";
import "../../../../style/components/galleries/papers/ellipsis.scss";

const featuredDisplay = isFeatured => (
  isFeatured ?
    // <Popup
    //   trigger={
    <Label corner="left" color="red" ><Icon name="star" /></Label>
    //   }
    //   content={<div><Icon name="star" />Featured Content</div>}
    // />
    : ""
);

class GalleryItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Item className="gallery-item" style={{ position: "relative" }}>
        {featuredDisplay(this.props.isFeatured)}
        <div className="ui tiny image">

          <Image
            src="http://acecrc.org.au/wp-content/uploads/2014/05/icon-journal-generic.png"
            alt="Gallery item"
          />
        </div>
        <Item.Content>
          <Item.Header>{this.props.title}
          </Item.Header>
          <Item.Meta>{`${this.props.authors.join(", ")} - ${this.props.affiliation}`}</Item.Meta>
          <Item.Description>{this.props.abstract}</Item.Description>
          <Item.Extra>
            <span><Icon name="download" />{this.props.numOfDownloads} downloads</span>

            <span className="right floated"><Icon name="calendar" />Published on {this.props.publishDate}
              {this.props.publishedIn ? ` in ${this.props.publishedIn}` : ""}
            </span>
          </Item.Extra>
        </Item.Content>

      </Item>
    );
  }
}


GalleryItem.propTypes = {
  title: propTypes.string.isRequired,
  authors: propTypes.arrayOf(propTypes.string).isRequired,
  abstract: propTypes.string,
  affiliation: propTypes.string,
  publishDate: propTypes.string.isRequired,
  publishedIn: propTypes.string,
  numOfDownloads: propTypes.number.isRequired,
  isFeatured: propTypes.bool.isRequired,
  // numOfComments: propTypes.number.isRequired,
  // rating: propTypes.number.isRequired,
};

GalleryItem.defaultProps = {
  abstract: "", affiliation: "", publishedIn: "",
};

export default GalleryItem;
