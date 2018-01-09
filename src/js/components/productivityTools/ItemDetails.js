import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label, Button, Rating, Segment } from "semantic-ui-react";
import DefinitionTable from "../DefinitionTable";
import Comments from "./comments";


export default class ProductivityToolDetails extends React.Component {
  static propTypes = {
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
  static defaultProps = {
    version: "", description: "",
  }
    state = { modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })


    render() {
      const
        {
          isFeatured, name, version, type, author, addedOn,
          lastUpdatedOn, description, numOfDownloads, rating,
        } = this.props;
      const trigger = React.cloneElement(this.props.trigger, { onClick: this.handleOpen, ...this.props.trigger.props });
      const definitions = [
        { key: "Tool type", value: semanticType[type] },
        { key: "Description", value: description },
        { key: "Version", value: version },
        { key: "Author", value: author },
        { key: "Added on", value: addedOn },
        { key: "Last updated on", value: lastUpdatedOn },
        { key: "Downloads", value: numOfDownloads.toString() },
        { key: "Rating", value: <Rating icon="star" defaultRating={rating} maxRating={5} disabled /> },
        { key: "How to use", value: <HowToUse /> },
      ];
      return (
        <Modal trigger={trigger} open={this.state.modalOpen} onClose={this.handleClose} closeIcon >
          <FeaturedDisplay isFeatured={isFeatured} />
          <Modal.Content image scrolling style={{ alignItems: "flex-start" }}>
            <Image src={imageUrl[type]} alt="Productivity tool" style={{ maxWidth: "200px" }} />
            <Modal.Description>
              <Header content={name} />
              <DefinitionTable definitions={definitions} />
              <Comments />
            </Modal.Description>

          </Modal.Content>
          <Modal.Actions>
            <div style={{ float: "left" }} />
            <ModalActions url="#" close={() => this.handleClose()} />
          </Modal.Actions>
        </Modal>
      );
    }
}


const ModalActions = ({ url, close }) => ([
  <Button content="Download" color="green" icon="download" as="a" href={url} key="download" />,
  <Button
    content="Share"
    color="blue"
    icon="share alternate"
    as="a"
    href="mailto:?subject=This may interest you&body=http://localhost:9001/ProductivityTools"
    key="share"
  />,
  <Button content="Close" color="black" icon="close" key="close" onClick={() => close()} />,
]);

const FeaturedDisplay = ({ isFeatured }) => (
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

