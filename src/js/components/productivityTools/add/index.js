import React from "react";
import propTypes from "prop-types";
import { Modal, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import AddProductivityToolForm from "./form";


class AddProductivityTool extends React.Component {
  // static propTypes = {
  //   trigger: propTypes.node.isRequired,
  // }
    state = {
      modalOpen: true,
      processing: false,
      formData: {},
      formState: "",
      formMessageHeader: "",
      formMessage: "",
      formUserDropdownOptions: [],
      formUserDropdownLoading: false,
    }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => {
      this.setState({ modalOpen: false });
      this.props.history.push(`/ProductivityTools/${this.props.typeFilter || "All"}`);
    }
    handleInputChange = (e, { name, value }) =>
      this.setState((oldState) => {
        const o = { ...oldState };
        o.formData[name] = value;
        return o;
      });

    testSubmit = () => {
      console.log(this.state.formData);
      toast("Wow so easy !");
      // this.handleClose();
    }
    handleSubmit = () => {
      const form = { ...this.state.formData };
      form.addedOn = new Date().toISOString();
      form.lastUpdatedOn = new Date().toISOString();
      form.numOfDownloads = 0;
      this.setState(oldState => ({ ...oldState, processing: true }));
      fetch("http://localhost:3000/productivityTools", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((response) => {
        if (!response.ok) {
          response.json().then((d) => {
            this.setState(oldState => ({
              ...oldState,
              formState: "error",
              // formMessageHeader: `There was an error (${response.status} - ${response.statusText})`,
              formMessage: d.message,
              processing: false,
            }));
            toast(<div>{this.state.formMessageHeader}<br />{this.state.formMessage}</div>, {
              position: toast.POSITION.TOP_CENTER,
              type: toast.TYPE[this.state.formState.toUpperCase()],
              autoClose: false,
            });
          });
        } else {
          this.setState(oldState => ({
            ...oldState,
            processing: false,
          }));
          this.handleClose();
          console.log(response);
          toast(<div>{this.state.formMessageHeader}<br />{this.state.formMessage}</div>, {
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE[this.state.formState.toUpperCase()],
          });
        }
      })
        .catch((error) => {
          this.setState(oldState => ({
            ...oldState,
            formState: "error",
            // formMessageHeader: `There was an error (${error})`,
            formMessage: "Please try again in a few moments. If the problem persists, please contact system administrator.",
            processing: false,
          }));
          toast(<div>{this.state.formMessageHeader}<br />{this.state.formMessage}</div>, {
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE[this.state.formState.toUpperCase()],
          });
        });
    };

    componentWillMount() {
      this.setState(oldState => ({
        ...oldState,
        formUserDropdownLoading: true,
      }));
      fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (!response.ok) {
          showError("Can not retrieve user data from server.");
          return [];
        }
        return response.json();
      }).then((data) => {
        this.setState(oldState => ({
          ...oldState,
          formUserDropdownOptions: data.map(user => ({ text: user.name, value: user._id })),
          formUserDropdownLoading: false,
        }));
      });
    }
    render() {
      // const trigger = React.cloneElement(this.props.trigger, { onClick: this.handleOpen, ...this.props.trigger.props });
      return ([
        <Route key={1} path={`/ProductivityTools/${this.props.typeFilter || "All"}`} />,
        <Modal key={2} open={this.state.modalOpen} onClose={this.handleClose} closeIcon >
          <Modal.Header content="Add new tool" />
          <Modal.Content
            style={{ overflow: "visible" }}
            content={
              <AddProductivityToolForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.testSubmit}
                selectedType={this.state.formData.type}
                isProcessing={this.state.processing}
                userDropdownData={this.state.formUserDropdownOptions}
                userDropdownLoading={this.state.formUserDropdownLoading}
              />
            }
          />
        </Modal>,
      ]
      );
    }
}

const showError = message =>
  toast(message, { position: toast.POSITION.TOP_CENTER, type: toast.TYPE.error, autoClose: false });
const mapStateToProps = state => ({
  typeFilter: state.productivityToolsVisibilityFilter.typeFilter,
});
const AddButton = () => (
  <AddProductivityTool trigger={<Button content="Add Tool" icon="plus" primary style={{ position: "fixed", top: "1em", right: "2em" }} />} />
);

export default withRouter(connect(mapStateToProps)(AddProductivityTool));

