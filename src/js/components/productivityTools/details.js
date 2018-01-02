import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label, Button, Table, Rating, Segment } from "semantic-ui-react";
import ControlledModal from "../ControlledModal";
import Comments from "./comments";


const ProductivityToolDetails = ({
  trigger, isFeatured, name, version, type, author, addedOn,
  lastUpdatedOn, description, numOfDownloads, rating,
}) =>

  (
    <ControlledModal trigger={trigger}>
      {featuredDisplay(isFeatured)}
      <Modal.Content image scrolling style={{ alignItems: "flex-start" }}>
        <Image
          src={imageUrl[type]}
          alt="Productivity tool"
          style={{ maxWidth: "200px" }}
        />
        <Modal.Description>
          <Header content={name} />
          <DefinitionTable definitions={[
            { key: "Tool type", value: semanticType[type] },
            { key: "Description", value: description },
            { key: "Version", value: version },
            { key: "Author", value: author },
            { key: "Added on", value: addedOn },
            { key: "Last updated on", value: lastUpdatedOn },
            { key: "Downloads", value: numOfDownloads },
            { key: "Rating", value: <Rating icon="star" defaultRating={rating} maxRating={5} disabled /> },
            { key: "How to use", value: <HowToUse /> },
          ]}
          />
          <Comments />
        </Modal.Description>

      </Modal.Content>
      <Modal.Actions>
        <div style={{ float: "left" }} />
        {actions("#", () => closeModal())}
      </Modal.Actions>
    </ControlledModal>
  );


ProductivityToolDetails.propTypes = {
  trigger: propTypes.node.isRequired,
  isFeatured: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  version: propTypes.string,
  type: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  addedOn: propTypes.string.isRequired,
  lastUpdatedOn: propTypes.string.isRequired,
  description: propTypes.string,
  numOfDownloads: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  closeModal: propTypes.func.isRequired,
};

ProductivityToolDetails.defaultProps = {
  version: "", description: "",
};


const DefinitionTable = ({ definitions }) =>
  (
    <Table definition>
      <Table.Body>
        {
       definitions.map(definition =>
         (
           <Table.Row key={definition.key}>
             <Table.Cell content={definition.key} />
             <Table.Cell content={definition.value} />
           </Table.Row>
         ))
        }
      </Table.Body>
    </Table>
  );
const actions = (url, close) => ([
  <Button color="green" icon="download" content="Download" as="a" href={url} key="download" />,
  <Button
    color="blue"
    icon="share alternate"
    content="Share"
    as="a"
    href="mailto:?subject=This may interest you&body=http://localhost:9001/ProductivityTools"
    key="share"
  />,
  <Button color="black" icon="close" content="Close" key="close" onClick={() => close()} />,
]);

const featuredDisplay = isFeatured => (
  isFeatured ?
    <Label
      ribbon="left"
      size="large"
      color="red"
      icon="star"
      content="Featured Content"
      style={{ left: "calc( -1rem - 0.2em)", top: "1rem", zIndex: "999" }}
    />
    : ""
);

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

const HowToUse = () => (
  <div>
    <Header as="h5" content="Installing" />
    <p>Use npm to install react-moment along with its peer dependency, moment.</p>
    <Segment>
      <code><pre>npm install --save moment react-moment</pre></code>
    </Segment>
    <Header as="h5" content="Quick Start" />
    <Segment>
      <code>
        <pre>
          {`
import React  from 'react';
import Moment from 'react-moment';

exports class MyComponent extends React.Component {
render() {
return (
  const dateToFormat = '1976-04-19T12:59-0500';
  <Moment>{dateToFormat}</Moment>
);
}
}`}
        </pre>
      </code>
    </Segment>
  </div>
);
export default ProductivityToolDetails;

