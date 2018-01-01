import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label, Button, Table, Rating, Segment } from "semantic-ui-react";
import Comments from "./comments";

const actions = url => ([
  <Button color="green" icon="download" content="Download" as="a" href={url} key="download" />,
  <Button
    color="blue"
    icon="share alternate"
    content="Share"
    as="a"
    href="mailto:?subject=This may interest you&body=http://localhost:9001/ProductivityTools"
    key="share"
  />,
  <Button color="black" icon="close" content="Close" key="close" />,
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

const ProductivityToolDetails = ({
  trigger, isFeatured, name, version, type, author, addedOn,
  lastUpdatedOn, description, numOfDownloads, rating,
}) => (
  <Modal trigger={trigger} closeIcon >
    {featuredDisplay(isFeatured)}
    <Modal.Content image scrolling style={{ alignItems: "flex-start" }}>
      <Image
        src={imageUrl[type]}
        alt="Productivity tool"
        style={{ maxWidth: "200px" }}
      />
      <Modal.Description>
        <Header content={name} />
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell content="Tool type" />
              <Table.Cell content={semanticType[type]} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Description" />
              <Table.Cell content={description} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Version" />
              <Table.Cell content={version} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Author" />
              <Table.Cell content={author} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Added on" />
              <Table.Cell content={addedOn} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Last updated on" />
              <Table.Cell content={lastUpdatedOn} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Downloads" />
              <Table.Cell content={numOfDownloads} />
            </Table.Row>
            <Table.Row>
              <Table.Cell content="Rating" />
              <Table.Cell content={<Rating icon="star" defaultRating={rating} maxRating={5} disabled />} />
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="top" content="How to use" />
              <Table.Cell>
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
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Comments />
      </Modal.Description>

    </Modal.Content>
    <Modal.Actions>
      <div style={{ float: "left" }} />
      {actions("#")}
    </Modal.Actions>
  </Modal>
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
};

ProductivityToolDetails.defaultProps = {
  version: "", description: "",
};

export default ProductivityToolDetails;

