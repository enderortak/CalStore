import React from "react";
import propTypes from "prop-types";
import { Item, Icon, Label, Image, Popup } from "semantic-ui-react";
import Highlighter from "react-highlighter";
import { pickHTMLProps } from "pick-react-known-prop";
import ScientificPaperDetails from "./details";
import "./style/galleryItem.scss";


const featuredDisplay = isFeatured => (
  isFeatured ?
    <Popup
      trigger={
        <Label corner="left" color="red" ><Icon name="star" /></Label>
      }
      content={<div><Icon name="star" />Featured Content</div>}
    />
    : ""
);

const GalleryItem = ({
  title, authors, abstract, affiliation, publishDate,
  publishedIn, numOfDownloads, isFeatured, textFilter, keywords,
  ...props
}) =>
  (
    <Item {...pickHTMLProps(props)} className="gallery-item" style={{ position: "relative" }}>
      {featuredDisplay(isFeatured)}
      <div className="ui tiny image">
        <Image
          src="http://acecrc.org.au/wp-content/uploads/2014/05/icon-journal-generic.png"
          alt="Gallery item"
        />
      </div>
      <Item.Content>
        <Item.Header>
          <Highlighter search={textFilter} matchStyle={{ background: "yellow" }}>{title}</Highlighter>
        </Item.Header>
        <Item.Meta>{`${authors.join(", ")} - ${affiliation}`}</Item.Meta>
        <Item.Description>
          <Highlighter search={textFilter} matchStyle={{ background: "yellow" }}>{abstract}</Highlighter>
        </Item.Description>
        <Item.Description>
          <span>Tags:</span>
          {keywords.map((k, i) => <Label color="blue" tag content={k} key={i} style={{ opacity: "0.7", marginLeft: "2em" }} />)}
        </Item.Description>
        <Item.Extra>
          <span><Icon name="download" />{numOfDownloads} downloads</span>
          <span className="right floated"><Icon name="calendar" />Published on {publishDate}
            {publishedIn ? ` in ${publishedIn}` : ""}
          </span>
        </Item.Extra>
      </Item.Content>

    </Item>
  );


GalleryItem.propTypes = {
  title: propTypes.string.isRequired,
  authors: propTypes.arrayOf(propTypes.string).isRequired,
  abstract: propTypes.string,
  affiliation: propTypes.string,
  publishDate: propTypes.string.isRequired,
  publishedIn: propTypes.string,
  numOfDownloads: propTypes.number.isRequired,
  isFeatured: propTypes.bool.isRequired,
  textFilter: propTypes.string,
  keywords: propTypes.arrayOf(propTypes.string).isRequired,
  // numOfComments: propTypes.number.isRequired,
  // rating: propTypes.number.isRequired,
};

GalleryItem.defaultProps = {
  abstract: "", affiliation: "", publishedIn: "", textFilter: "",
};

class GalleryItemWithDetails extends React.Component {
  render() {
    return (<ScientificPaperDetails {...this.props} trigger={<GalleryItem {...this.props} />} />);
  }
}

export default GalleryItemWithDetails;
