import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Icon, Rating, Image } from "semantic-ui-react";
import Highlighter from "react-highlighter";
import { pickHTMLProps } from "pick-react-known-prop";
import Details from "./ItemDetails";
import "./style/galleryItem.scss";

const semanticType = {
  MATLAB_TOOL: "Matlab Tool",
  CONCERTO_SCRIPT: "Concerto Script",
  EXCEL_MACRO: "Excel Macro",
  ATI_INCA_SCRIPT: "ATI/INCA Script",
};
const imageUrl = {
  MATLAB_TOOL: "http://tsgdoc.socsci.ru.nl/images/thumb/2/21/Matlab_Logo.png/267px-Matlab_Logo.png",
  CONCERTO_SCRIPT: "https://www.avl.com/teamsuite/CONCERTO_256x256.png",
  EXCEL_MACRO: "http://compertus.eu/uploaded/Excel-logo-2.png",
  ATI_INCA_SCRIPT: "https://www.etas.com/data/products_measurement_data_analysis/icon_mda.png",
};

const GalleryItem = ({
  name, type, description, author, addedOn, numOfDownloads, numOfComments,
  rating, textFilter, id, ...props
}) => // eslint-disable-line react/prefer-stateless-function
  (
    <Card {...pickHTMLProps(props)} className="gallery-item">
      <div className="image" style={{ textAlign: "center" }}>
        <Image
          src={imageUrl[type]}
          alt="Gallery item"
          style={{
   padding: "20px", width: "128px", height: "128px", display: "inline-block",
  }}
        />
      </div>
      <Card.Content>
        <Card.Header>
          <Highlighter search={textFilter} matchStyle={{ background: "yellow" }}>
            {name}
          </Highlighter>
        </Card.Header>
        <Card.Meta>{semanticType[type]}</Card.Meta>
        <Card.Description>
          <Highlighter search={textFilter} matchStyle={{ background: "yellow" }}>
            {description}
          </Highlighter>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <span>Author</span>
          <span className="right floated"><Icon name="user" />{author}</span>
        </div>
        <div>
          <span>Added on</span>
          <span className="right floated"><Icon name="calendar" />{addedOn}</span>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div>
          <span className="right floated"><Icon name="download" />{numOfDownloads.toString()} Downloads</span>
          <span>Rating:<Rating icon="star" defaultRating={rating} maxRating={5} disabled /></span>
        </div>
        <div>
          <span><i className="comment outline icon" />{numOfComments.toString()} Comments</span>
        </div>
      </Card.Content>
    </Card>
  );


GalleryItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string,
  author: propTypes.string.isRequired,
  addedOn: propTypes.string.isRequired,
  numOfDownloads: propTypes.number.isRequired,
  numOfComments: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  textFilter: propTypes.string,
};

GalleryItem.defaultProps = {
  description: "", textFilter: "",
};

class GalleryItemWithDetails extends React.Component {
  render() {
    return (<Details trigger={<GalleryItem {...this.props} />} {...this.props} />);
  }
}

export default GalleryItemWithDetails;
