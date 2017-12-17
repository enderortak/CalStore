import React from "react";
import propTypes from "prop-types";
import { Item, Image } from "semantic-ui-react";
import "../../../style/components/GalleryItem.scss";

const GalleryItemAsCard = ({
  name, imageUrl, type, description, children,
}) => (
  <Item className="gallery-item">
    <div className="image" style={{ textAlign: "center" }}>
      <Image
        src={imageUrl}
        alt="Gallery item"
        size="tiny"
      />
    </div>
    <Item.Content>
      <Item.Header>{name}</Item.Header>
      <Item.Meta>{type}</Item.Meta>
      <Item.Description>{description}</Item.Description>
    </Item.Content>
    {children}
  </Item>

);

GalleryItemAsCard.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string,
  children: propTypes.node,
};

GalleryItemAsCard.defaultProps = {
  description: "",
  children: [],
};

export default GalleryItemAsCard;

