import React from "react";
import propTypes from "prop-types";
import { Progress } from "semantic-ui-react";
import axios from "axios";

export default class FileInput extends React.Component {
    state = {
      state: "init",
      uploaded: 0,
      total: 0,
      message: "",
    }
    uploadTrial = () => {
      this.handleUploadStart();
      const form = new FormData();
      form.append("asd", this.asd.files[0]);
      axios.post('http://localhost:3000/productivityTools', form, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            //  this.updateProgressBarValue(progressEvent);
            this.setState(() => ({
              uploaded: progressEvent.loaded,
              total: progressEvent.total,
            }));
            console.log(`${this.state.uploaded} ${this.state.total}`);
          }
        },
      }).then((response) => { console.log(response); this.handleUploadFinish(); })
        .catch((error) => { console.log(error); this.handleUploadError(); });
    }
    handleUploadStart() {
      this.setState(() => ({
        state: "uploading",
        message: "Uploading file...",
        uploaded: 0,
      }));
      console.log("started");
    }
    handleUploadFinish() {
      this.setState(() => ({
        state: "finished",
        uploaded: 0,
        message: "File uploaded",
      }));
      console.log("finished");
    }
    handleUploadError() {
      this.setState(() => ({
        state: "error",
        uploaded: 0,
        message: "File upload failed!",
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.uploadTrial} >Upload Trial</button>
          <input type="file" ref={(asd) => { this.asd = asd; }} />
          <Progress
            value={this.state.uploaded}
            total={this.state.total}
            progress="percent"
            precision={0}
            color="green"
            label={this.state.message}
            style={{ display: ["uploading", "finished", "error"].includes(this.state.state) ? "block" : "none" }}
            error={this.state.state === "error"}
          />
        </div>
      );
    }
}
