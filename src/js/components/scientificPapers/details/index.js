import React from "react";
import propTypes from "prop-types";
import { Modal, Image, Header, Label as SLabel, Button, Icon } from "semantic-ui-react";
import DefinitionTable from "../../shared/definitionTable";

export default class ScientificPaperDetails extends React.Component {
  static propTypes = {
    trigger: propTypes.node.isRequired,
    isFeatured: propTypes.bool,
    title: propTypes.string.isRequired,
    authors: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    affiliation: propTypes.string,
    publishDate: propTypes.string.isRequired,
    publishedIn: propTypes.string,
    abstract: propTypes.string,
    url: propTypes.string.isRequired,
    keywords: propTypes.arrayOf(propTypes.string.isRequired),
    uploadDate: propTypes.string.isRequired,
    uploadedBy: propTypes.string.isRequired,
  };
  static defaultProps = {
    isFeatured: false,
    affiliation: "",
    publishedIn: "",
    abstract: "",
    keywords: [],
  };
    state = { modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })


    render() {
      const
        {
          isFeatured, title, authors, affiliation,
          publishDate, publishedIn, abstract, url, keywords,
          uploadDate, uploadedBy,
        } = this.props;
      const trigger = React.cloneElement(this.props.trigger, { onClick: this.handleOpen, ...this.props.trigger.props });
      const definitions = [
        {
          key: "Keywords",
          value: {
            style: { lineHeight: "2.5em" },
            content: keywords.map(k =>
              <SLabel tag color="blue" content={k} key={k} style={{ opacity: "0.6", marginLeft: "2em" }} />),
          },
        },
        { key: "Authors", value: authors.join(", ") },
        { key: "Affiliation", value: affiliation },
        { key: "Publish date", value: publishDate },
        { key: "Published in", value: publishedIn },
        { key: "Abstract", value: { verticalAlign: "top", content: abstract } },
      ];
      return (
        <Modal trigger={trigger} open={this.state.modalOpen} onClose={this.handleClose} closeIcon >
          <FeaturedDisplay isFeatured={isFeatured} />
          <Modal.Content image scrolling style={{ alignItems: "flex-start" }}>
            <Image
              src="http://acecrc.org.au/wp-content/uploads/2014/05/icon-journal-generic.png"
              alt="Gallery item"
            />
            <Modal.Description>
              <Header content={title} />
              <DefinitionTable definitions={definitions} />
            </Modal.Description>

          </Modal.Content>
          <Modal.Actions>
            <div style={{ float: "left" }}>
              <Icon name="upload" /> Uploaded by {uploadedBy} on {uploadDate}
            </div>
            <ModalActions url={url} close={() => this.handleClose()} />
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
    <SLabel
      ribbon="left"
      size="large"
      color="red"
      icon="star"
      content="Featured Content"
      style={{ left: "calc( -1rem - 0.2em)", top: "1rem", zIndex: "999" }}
    />
    : ""
);
FeaturedDisplay.propTypes = { isFeatured: propTypes.bool.isRequired };
