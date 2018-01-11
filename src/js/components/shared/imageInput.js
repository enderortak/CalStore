import React from "react";
import propTypes from "prop-types";
import { Segment, Button, Icon, Label } from "semantic-ui-react";

export default class ImageInput extends React.Component {
    static propTypes = {
      name: propTypes.string.isRequired,
      onChange: propTypes.func,
    }
    static defaultProps = {
      onChange: undefined,
    }
    state = {
      imageUri: "",
    }
    componentDidUpdate(oldProps, oldState) {
      const e = null;
      const t = { name: this.props.name, value: this.state.imageUri };
      if (oldState !== this.state && this.props.onChange) this.props.onChange(e, t);
    }
    handleImageInputChange() {
      const filesToUpload = this.input.files;
      const file = filesToUpload[0];
      const reader = new FileReader();
      const component = this;
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          const MAX_WIDTH = 290;
          const MAX_HEIGHT = 128;
          let { width, height } = image;
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext('2d');
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(image, 0, 0, width, height);
          component.setState(() => ({ imageUri: canvas.toDataURL("image/png") }));
        };
      };
      reader.readAsDataURL(file);
    }
    render() {
      return (
        <Segment style={style.segment}>
          <div style={{ ...style.preview, display: this.state.imageUri === "" ? "none" : "inline-block" }}>
            <img
              style={style.preview}
              className="ui rounded image"
              alt=""
              src={this.state.imageUri}
            />
            <Label circular color="red" floating style={style.removeButton} onClick={() => this.setState(() => ({ imageUri: "" }))}><Icon name="remove" style={{ margin: "0" }} /></Label>
          </div>
          <br />
          <Button primary style={style.button}>
            <Icon name="upload" />
            { this.state.imageUri === "" ? "Select Image" : "Change Image" }
            <input type="file" name="image" style={style.input} ref={(input) => { this.input = input; }} onChange={() => this.handleImageInputChange()} />
          </Button>

        </Segment>
      );
    }
}
const style = {
  button: {
    position: "relative",
    overflow: "hidden",
  },
  input: {
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "-100%",
    padding: "0",
    width: "200%",
    height: "100%",
    cursor: "pointer",
  },
  segment: {
    boxShadow: "none",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.05)",
  },
  preview: {
    marginBottom: "1em",
    position: "relative",
  },
  removeButton: {
    cursor: "pointer",
  },
};
