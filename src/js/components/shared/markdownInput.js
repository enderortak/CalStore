import React from "react";
import propTypes from "prop-types";
import { TextArea, Checkbox, Segment } from "semantic-ui-react";
import ReactMarkdown, { renderers } from "react-markdown";
// import Highlight from "react-hljs";
import "../../../../node_modules/highlight.js/styles/foundation.css";

const DefaultCodeRenderer = renderers.code;
const CodeRenderer = props => (
  <Segment style={{ boxShadow: "none", background: "#f8f8f8" }}>
    <DefaultCodeRenderer {...props} />
  </Segment>
);
const TableRenderer = props => React.createElement("table", { ...props, className: "ui collapsing table" }, props.children);

export default class MarkdownInput extends React.Component {
    static propTypes = {
      name: propTypes.string.isRequired,
      onChange: propTypes.func,
      rows: propTypes.string,
      placeholder: propTypes.string,
    }
    static defaultProps = {
      onChange: undefined, rows: "3", placeholder: "",
    }
    constructor(props) {
      super(props);
      this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    state = {
      value: "",
      mode: "edit",
    }
    handleEditorChange(e, { name, value }) {
      this.setState(oldState => ({
        ...oldState,
        value,
      }));
      if (this.props.onChange) this.props.onChange(e, { name, value });
    }
    render() {
      const { name, rows, placeholder } = this.props;
      return (
        <div>
          <div style={{ textAlign: "right", marginBottom: "0.5em" }}>
            <Checkbox
              slider
              onChange={() => this.setState(oldState =>
            ({ ...oldState, mode: oldState.mode === "edit" ? "preview" : "edit" }))}
              label="Preview"
            />
          </div>
          <TextArea
            name={name}
            onChange={this.handleEditorChange}
            rows={rows}
            placeholder={placeholder}
            style={{ display: this.state.mode === "edit" ? "inline-block" : "none" }}
          />
          <Segment style={{ boxShadow: "none", minHeight: "8em", display: this.state.mode === "preview" ? "block" : "none" }}>
            <ReactMarkdown source={this.state.value} renderers={{ code: CodeRenderer, table: TableRenderer }} />
          </Segment>
        </div>
      );
    }
}
