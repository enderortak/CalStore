import React from "react";
import propTypes from "prop-types";
import { Segment, Button, Icon, Progress, Header, Item } from "semantic-ui-react";
import axios from "axios";

export default class FileInput extends React.Component {
    static propTypes = {
      name: propTypes.string.isRequired,
      endpoint: propTypes.string.isRequired,
      onChange: propTypes.func.isRequired,
      accept: propTypes.arrayOf(propTypes.string),
      maxSize: propTypes.number,
    }
    static defaultProps = { accept: undefined, maxSize: undefined }
    constructor(props) {
      super(props);
      this.handleUploadRequest = this.handleUploadRequest.bind(this);
      this.handleUploadStart = this.handleUploadStart.bind(this);
      this.handleUploadProgress = this.handleUploadProgress.bind(this);
      this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleUploadError = this.handleUploadError.bind(this);
      this.validateFile = this.validateFile.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.stateValue = this.stateValue.bind(this);
    }
    state = {
      state: "init",
      fileName: "",
      fileSize: 0,
      uploaded: 0,
      total: 0,
      message: "",
      value: "",
    }
    componentDidUpdate(oldProps, oldState) {
      const e = null;
      const t = { name: this.props.name, value: this.state.value };
      if (oldState.value !== this.state.value && this.props.onChange) this.props.onChange(e, t);
    }

    handleUploadRequest() {
      if (this.state.state === "uploading") this.handleCancel();
      if (this.fileInput.files.length > 0) {
        const file = this.fileInput.files[0];
        if (this.validateFile(file)) {
          this.handleUploadStart(file);
          this.uploadFile(file);
        }
      }
    }
    validateFile(file) {
      const fileExtension = file.name.replace(/^.*\./, '');
      if (this.props.accept && !this.props.accept.includes(fileExtension)) {
        this.setState(() => ({
          message: `Selected file type is not accepted. Allowed file types are ${this.props.accept.join(", ")}.`,
        }));
        return false;
      }
      if (this.props.maxSize && file.size > parseInt(this.props.maxSize, 10) * 1048576) {
        this.setState(() => ({
          message: `File cannot be larger than ${this.props.maxSize} mb`,
        }));
        return false;
      }

      return true;
    }
    uploadCancelTokenSource = axios.CancelToken.source();
    uploadFile(file) {
      const form = new FormData();
      debugger;
      form.append(this.props.name, file);
      axios
        .post(this.props.endpoint, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          cancelToken: this.uploadCancelTokenSource.token,
          onUploadProgress: this.handleUploadProgress,
        })
        .then(this.handleUploadSuccess)
        .catch((thrown) => {
          if (axios.isCancel(thrown)) this.handleCancel();
          else this.handleUploadError(thrown);
        });
    }

    handleUploadStart(file) {
      this.setState(() => ({
        state: "uploading",
        message: "Uploading file...",
        uploaded: 0,
        fileName: file.name,
        fileSize: formatBytes(file.size),
      }));
    }
    handleUploadProgress(progressEvent) {
      const comp = this;
      if (progressEvent.lengthComputable) {
        comp.setState(() => ({
          uploaded: progressEvent.loaded,
          total: progressEvent.total,
        }));
      }
    }
    handleUploadSuccess(response) {
      this.fileInput.value = "";
      if (!response || !response.data) {
        this.handleUploadError({ message: "No response from server" });
      } else {
        this.props.onChange(response.data);
        this.setState(() => ({
          state: "success",
          message: "File uploaded",
          value: response.data,
        }));
      }
    }
    cancelFileUpload = () => { this.handleCancel(); };
    handleCancel() {
      this.fileInput.value = "";
      this.uploadCancelTokenSource.cancel();
      this.uploadCancelTokenSource = axios.CancelToken.source();
      this.setState(() => ({
        state: "pre-cancel",
        message: "File upload canceled",
      }));
      setTimeout(() => {
        this.setState(() => ({
          state: "canceled",
        }));
      }, 1500);
    }
    handleUploadError(error) {
      this.fileInput.value = "";
      this.setState(() => ({
        state: "error",
        message: `File upload failed! (${error.message})`,
      }));
    }
    stateValue = (states, positive, negative) =>
      (states.includes(this.state.state) ? positive : negative)

    render() {
      return (
        <Segment style={style.wrapper}>
          <input
            type="file"
            accept={this.props.accept.map(i => `.${i}`).join(",")}
            ref={(input) => { this.fileInput = input; }}
            onChange={this.handleUploadRequest}
            style={{ ...style.fileInput, cursor: this.stateValue(["uploading"], "default", "pointer") }}
            disabled={this.state.state === "uploading"}
          />
          <input type="hidden" name={this.props.name} value={this.state.value} />
          <Header as="h3" icon style={{ margin: "0", display: this.stateValue(["init", "canceled"], "block", "none") }}>
            <Icon name="upload" />
              Upload File
            <Header.Subheader>
                Drag and drop your file or click to select from dialog.
            </Header.Subheader>
            <Header.Subheader style={{ color: "#912D2B", fontWeight: "bold" }}>
              {this.state.message}
            </Header.Subheader>
          </Header>

          <Item.Group style={{ margin: "0", display: this.stateValue(["uploading", "error", "success", "pre-cancel"], "block", "none") }}>
            <Item>
              <div className="ui image" >
                <Icon size="huge" color="grey" name="upload" style={{ lineHeight: "2em" }} />
              </div>

              <Item.Content>
                <Item.Header style={style.fileNameDisplay}>{this.state.fileName}</Item.Header>
                <Item.Meta>{this.state.fileSize}</Item.Meta>
                <Item.Description>
                  <Progress
                    value={this.state.uploaded}
                    total={this.state.total}
                    progress="percent"
                    precision={0}
                    color="green"
                    label={this.state.message}
                    style={style.progressBar}
                    error={this.stateValue(["error", "pre-cancel"], true, false)}
                  />
                </Item.Description>
                <Button
                  size="mini"
                  basic
                  color="red"
                  content="Cancel"
                  icon="remove"
                  style={{ ...style.cancelButton, display: this.stateValue(["uploading"], "block", "none") }}
                  onClick={this.handleCancel}
                />
              </Item.Content>
            </Item>
          </Item.Group>

        </Segment>
      );
    }
}
const formatBytes = (a, b) => {
  if (a === 0) return "0 Bytes";
  let c = 1024,
    d = b || 2,
    e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    f = Math.floor(Math.log(a) / Math.log(c));
  return `${parseFloat((a / Math.pow(c, f)).toFixed(d))} ${e[f]}`;
};

const style = {
  wrapper: {
    boxShadow: "none",
    textAlign: "center",
    height: "11em",
    borderWidth: "2px",
    borderStyle: "dashed",
    position: "relative",
    overflow: "hidden",
  },
  uploadButton: {

  },
  fileInput: {
    opacity: "0",
    position: "absolute",
    top: "-25%",
    left: "0",
    width: "100%",
    height: "125%",
  },
  fileNameDisplay: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  progressBar: {
    marginTop: "1em",
  },
  cancelButton: {
    position: "absolute",
    right: "5px",
    bottom: "5px",
  },
};
