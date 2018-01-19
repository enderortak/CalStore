import React from "react";
import propTypes from "prop-types";
import { Modal, Icon, Header } from "semantic-ui-react";
import { toast, style as toastStyle } from "react-toastify";
import { withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Joi from "joi-browser";
import AddProductivityToolForm from "./form";


class AddProductivityTool extends React.Component {
  static propTypes = {
    history: propTypes.object.isRequired,
    typeFilter: propTypes.string,
  }
  static defaultProps = { typeFilter: "" }
  static remote = {
    get: {
      users: "http://localhost:3000/users",
    },
    post: {
      productivityTool: "http://localhost:3000/productivityTools",
    },
  }
  constructor(props) {
    super(props);
    this.getUserList = this.getUserList.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleXHRErrors = this.handleXHRErrors.bind(this);
    this.handleValidationErrors = this.handleValidationErrors.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleFormSuccess = this.handleFormSuccess.bind(this);
    this.handleNotFound = this.handleNotFound.bind(this);
    this.handleInternalError = this.handleInternalError.bind(this);
    this.handleServiceUnavailable = this.handleServiceUnavailable.bind(this);
    this.handleNoAccessToServer = this.handleNoAccessToServer.bind(this);
    this.handleUnknownError = this.handleUnknownError.bind(this);
    this.handleBadRequest = this.handleBadRequest.bind(this);
    this.handleFormSuccess = this.handleFormSuccess.bind(this);
  }
    state = {
      modalOpen: true,
      processing: false,
      formData: { isFeatured: false },
      formUserDropdownOptions: [],
      formUserDropdownLoading: true,
      formValidationResult: [],
    }
    // handleOpen = () => this.setState({ modalOpen: true })

    componentDidMount() {
      this.getUserList();
    }
    getUserList = () => {
      axios
        .get(AddProductivityTool.remote.get.users)
        .then((response) => {
          this.setState(oldState => ({
            ...oldState,
            formUserDropdownOptions:
              response.data.map(user => ({ text: user.name, value: user._id })),
            formUserDropdownLoading: false,
          }));
        })
        .catch(this.handleXHRErrors);
    }
    handleClose = () => {
      this.form.stopFormOperations();
      this.setState({ modalOpen: false });
      this.props.history.push(`/ProductivityTools/${this.props.typeFilter || "All"}`);
    }

    handleInputChange = (e, { name, value }) =>
      this.setState((oldState) => {
        const o = { ...oldState };
        o.formData[name] = value;
        return o;
      });
      handleInputBlur = () =>
        this.handleValidationErrors(this.validateForm(this.state.formData).error);

    testSubmit = () => {
      console.log(this.state.formData);
      showSuccess("Wow so easy !");
      // this.handleClose();
    }
    handleSubmitRequest = () => {
      const form = { ...this.state.formData };
      form.addedOn = new Date().toISOString();
      form.lastUpdatedOn = new Date().toISOString();
      form.numOfDownloads = 0;
      if (!this.validateForm(form).error) this.submitForm(form);
      else this.handleValidationErrors(this.validateForm(form).error);
    };

    validateForm = (form) => {
      const schema = Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30)
          .required()
          .label("Tool name"),
      });
      const result = Joi.validate(this.state.formData, schema);
      console.log(result);
      return result;
    }
    handleValidationErrors = (error) => {
      if (error === null) return;
      this.setState(oldState => ({ ...oldState, formValidationResult: error.details }));
    }
    submitForm(form) {
      this.setState(oldState => ({ ...oldState, processing: true }));
      axios
        .post(AddProductivityTool.remote.post.productivityTool, form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(this.handleFormSuccess)
        .catch(this.handleXHRErrors);
    }
    handleXHRErrors(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorHandlers = {
          400: this.handleBadRequest,
          404: this.handleNotFound,
          500: this.handleInternalError,
          503: this.handleServiceUnavailable,
        };
        errorHandlers[error.response.status](error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        this.handleNoAccessToServer();
      } else {
        // Something happened in setting up the request that triggered an Error
        this.handleUnknownError(error.message);
      }
      this.setState(oldState => ({
        ...oldState,
        processing: false,
      }));
    }
    tryAgainMessage = "Try again in a few minutes. If the problem persists, please contact administrator.";
    contactAdminMessage = "Please contact administrator.";
    handleNotFound = () => showError("Requested address was not found on the server", this.contactAdminMessage);
    handleInternalError = () => showError("Encountered an internal server error", this.contactAdminMessage);
    handleServiceUnavailable = () => showError("Service unavailable", `This is mostly related with a network problem. ${this.tryAgainMessage}`);
    handleNoAccessToServer = () => showError("No response received from server", `This is mostly related with a network problem. ${this.tryAgainMessage}`);
    handleUnknownError = () => showError("There was an unknown error", this.contactAdminMessage);
    handleBadRequest = (data) => { Object.keys(data.errors).map(e => showError(data.errors[e].message)); }
    handleFormSuccess(response) {
      this.setState(oldState => ({
        ...oldState,
        processing: false,
      }));
      showSuccess("Tool added successfully");
      this.handleClose();
      console.log(response);
    }


    render() {
      return ([
        <Route key={1} path={`/ProductivityTools/${this.props.typeFilter || "All"}`} />,
        <Modal key={2} open={this.state.modalOpen} onClose={this.handleClose} closeIcon >
          <Modal.Header>
            <Icon name="plus" />Add new tool
          </Modal.Header>
          <Modal.Content
            style={{ overflow: "visible" }}
            content={
              <AddProductivityToolForm
                ref={(form) => { this.form = form; }}
                onSubmit={(values) => { console.log(values); }}
                handleInputChange={this.handleInputChange}
                handleInputBlur={this.handleInputBlur}
                handleFormSubmit={this.handleSubmitRequest}
                validationResult={this.state.formValidationResult}
                selectedType={this.state.formData.type}
                isProcessing={this.state.processing}
                userDropdownData={this.state.formUserDropdownOptions}
                userDropdownLoading={this.state.formUserDropdownLoading}
                isFeatured={this.state.isFeatured}
              />
            }
          />
        </Modal>,
      ]
      );
    }
}

const showError = (message, submessage) => {
  console.log(message);
  toastStyle({
    width: "500px",
    TOP_CENTER: {
      top: "1em",
      marginLeft: `-${500 / 2}px`,
      left: "50%",
    },
  });
  toast(
    <Header as="h5" style={{ color: "#FFFFFF" }}>
      <Icon name="warning sign" />
      <Header.Content>
        {message}
        <Header.Subheader content={submessage} style={{ color: "rgba(255, 255, 255, 0.7)" }} />
      </Header.Content>
    </Header>,
    { position: toast.POSITION.TOP_CENTER, type: toast.TYPE.ERROR, autoClose: false },
  );
};
const showSuccess = (message) => {
  console.log(message);
  toast(
    <Header as="h5" style={{ color: "#FFFFFF" }}>
      <Icon name="check circle outline" />
      <Header.Content content={message} />
    </Header>,
    { position: toast.POSITION.TOP_CENTER, type: toast.TYPE.SUCCESS, autoClose: true },
  );
};
const mapStateToProps = state => ({
  typeFilter: state.productivityToolsVisibilityFilter.typeFilter,
});


export default withRouter(connect(mapStateToProps)(AddProductivityTool));

