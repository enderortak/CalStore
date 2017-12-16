import React from "react";
import propTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";
import "../../../style/components/GalleryItem.scss";

const GalleryItem = ({
  name, imageUrl, type, description, children,
}) => (
  <Card className="gallery-item">
    <div className="image" style={{ textAlign: "center" }}>
      <Image
        src={imageUrl}
        alt="Gallery item"
        style={{
 padding: "20px", width: "128px", height: "128px", display: "inline-block",
}}
      />
    </div>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{type}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    {children}
  </Card>

);
const test = () => (<div style={{
 width: "300px", height: "150px", background: "red", margin: "10px",
}}
/>);

GalleryItem.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string,
  children: propTypes.node,
};

GalleryItem.defaultProps = {
  description: "",
  children: [],
};

export default GalleryItem;

