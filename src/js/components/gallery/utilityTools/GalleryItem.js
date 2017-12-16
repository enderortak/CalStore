import React from "react";
import propTypes from "prop-types";
import { Card, Icon, Rating } from "semantic-ui-react";
import GenericGalleryItem from "../GalleryItem";

const semanticType = {
  MATLAB_TOOL: "Matlab Tool",
  CONCERTO_SCRIPT: "Concerto Script",
  EXCEL_MACRO: "Excel Macro",
  ATI_INCA_SCRIPT: "ATI/INCA Script",
};
const imageUrl = {
  MATLAB_TOOL: "https://fr.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/24241/versions/5/screenshot.png",
  CONCERTO_SCRIPT: "https://www.avl.com/teamsuite/CONCERTO_256x256.png",
  EXCEL_MACRO: "http://compertus.eu/uploaded/Excel-logo-2.png",
  ATI_INCA_SCRIPT: "https://www.etas.com/data/products_measurement_data_analysis/icon_mda.png",
};

class GalleryItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <GenericGalleryItem
        name={this.props.name}
        imageUrl={imageUrl[this.props.type]}
        type={semanticType[this.props.type]}
        description={this.props.description}
      >
        <Card.Content extra>
          <div>
            <span>Author</span>
            <span className="right floated"><Icon name="user" />{this.props.author}</span>
          </div>
          <div>
            <span>Added on</span>
            <span className="right floated"><Icon name="calendar" />{this.props.addedOn}</span>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div>
            <span className="right floated"><Icon name="download" />{this.props.numOfDownloads.toString()} Downloads</span>
            <span>Rating:<Rating icon="star" defaultRating={this.props.rating} maxRating={5} disabled /></span>
          </div>
          <div>
            <span><i className="comment outline icon" />{this.props.numOfComments.toString()} Comments</span>
          </div>
        </Card.Content>
      </GenericGalleryItem>
    );
  }
}


GalleryItem.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string,
  author: propTypes.string.isRequired,
  addedOn: propTypes.string.isRequired,
  numOfDownloads: propTypes.number.isRequired,
  numOfComments: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};

GalleryItem.defaultProps = {
  description: "",
};

export default GalleryItem;
