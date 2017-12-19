import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label, Button, Icon, Table } from "semantic-ui-react";

const actions = url => ([
  <Button color="green" icon="download" content="Download" as="a" href={url} />,
  <Button
    color="blue"
    icon="share alternate"
    content="Share"
    as="a"
    href="mailto:?subject=This may interest you&body=http://localhost:9001/AcademicPapers"
  />,
  <Button color="black" icon="close" content="Close" />,
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

const AcademicPaperDetails = ({
  trigger, isFeatured, title, authors, affiliation, publishDate, publishedIn, abstract, url, keywords,
  uploadDate, uploadedBy,
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
              <Table.Cell>Keywords</Table.Cell>
              <Table.Cell style={{ lineHeight: "2.5em" }}>
                {keywords.map(k => <Label tag color="blue" content={k} key={k} style={{ opacity: "0.6", marginLeft: "2em" }} />)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Authors</Table.Cell>
              <Table.Cell>{authors.join(", ")}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Affiliation</Table.Cell>
              <Table.Cell>{affiliation}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="top">Abstract</Table.Cell>
              <Table.Cell>{abstract}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Description>

    </Modal.Content>
    <Modal.Actions>
      <div style={{ float: "left" }}>
        <Icon name="upload" /> Uploaded by {uploadedBy} on {uploadDate}
      </div>
      {actions(url)}
    </Modal.Actions>
  </Modal>
);

AcademicPaperDetails.propTypes = {
  trigger: propTypes.node.isRequired,
};

export default AcademicPaperDetails;

