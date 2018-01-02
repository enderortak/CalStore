import React from "react";
import propTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import { Route, withRouter } from "react-router-dom";

class RouteModal extends React.Component {
  constructor() {
    super();
    this.state = { open: true };
  }
  close() {
    this.setState({ open: false });
    this.props.history.push(this.props.parentPath);
  }
  modal() {
    return (
      <Modal open={this.state.open} onClose={() => this.close()} closeIcon close={() => this.close()} >
        {this.props.children}
      </Modal>
    );
  }
  render() {
    return (
      <Route exact path={this.props.path} render={() => this.modal()} />
    );
  }
}
RouteModal.propTypes = {
  parentPath: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default withRouter(RouteModal);
