import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

export default class ControlledModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const trigger = React.cloneElement(this.props.trigger, { onClick: this.handleOpen, ...this.props.trigger.props });
    return (
      <Modal
        trigger={trigger}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeModal={this.handleClose}
        closeIcon
      >
        {this.props.children}
      </Modal>
    );
  }
}
