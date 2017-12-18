import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label, Icon, Table } from "semantic-ui-react";

const actions = [
  { color: "green", icon: "download", content: "Download" },
  { color: "blue", icon: "share alternate", content: "Share" },
  {
    color: "black", icon: "close", content: "Close", "aria-hidden": "true",
  },
];

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

const AcademicPaperDetails = ({
  trigger, isFeatured, title, authors, affiliation, publishDate, publishedIn, abstract,
}) => (
  <Modal trigger={trigger} closeIcon >
    {featuredDisplay(isFeatured)}
    <Modal.Content image scrolling style={{ alignItems: "flex-start" }}>
      <Image
        src="http://acecrc.org.au/wp-content/uploads/2014/05/icon-journal-generic.png"
        alt="Gallery item"
      />
      <Modal.Description>
        <Header content={title} />
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Authors</Table.Cell>
              <Table.Cell>{authors.join(", ")}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Affiliation</Table.Cell>
              <Table.Cell>{affiliation}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Published on</Table.Cell>
              <Table.Cell>{publishDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Published in</Table.Cell>
              <Table.Cell>{publishedIn}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="top">Abstract</Table.Cell>
              <Table.Cell>{abstract}</Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
      </Modal.Description>

    </Modal.Content>
    <Modal.Actions actions={actions} />
  </Modal>
);

AcademicPaperDetails.propTypes = {
  trigger: propTypes.node.isRequired,
};

export default AcademicPaperDetails;

