import React from "react";
import propTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import { withRouter, NavLink } from "react-router-dom";

class RouteModal extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }
  componentDidMount() {
    this.props.history.listen((location) => {
    //   alert('asd');
      this.setState(() => ({ open: location.pathname === this.props.route }));
    });
  }
  render() {
    return (
      <Modal open={this.state.open} onClose={() => { this.setState(() => ({ open: false })); }}>
        {this.props.children}
      </Modal>
    );
  }
}
RouteModal.propTypes = {
  route: propTypes.string.isRequired,
  history: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
};

export default withRouter(RouteModal);
