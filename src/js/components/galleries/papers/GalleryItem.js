import React from "react";
import propTypes from "prop-types";
import { Item, Icon, Rating, Image } from "semantic-ui-react";

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
      <Item className="gallery-item">
        <div className="image">
          <Image
            src={imageUrl}
            alt="Gallery item"
            size="tiny"
          />
        </div>
        <Item.Content>
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Meta>{this.props.authors}</Item.Meta>
          <Item.Description>{this.props.abstract}</Item.Description>
        </Item.Content>

      </Item>
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
