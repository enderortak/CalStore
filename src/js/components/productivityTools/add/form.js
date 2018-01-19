import React from "react";
import propTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, Icon, Button, TextArea, Checkbox, Segment, Popup, Input, Label } from "semantic-ui-react";
import axios from "axios";
import ImageInput from "../../shared/imageInput";
import FileInput from "../../shared/fileInput";
import MarkdownInput from "../../shared/markdownInput";
import ValidatedFormInput from "../../shared/validatedFormInput";

class AddProductivityToolForm extends React.Component {
  static propTypes = {
    handleInputChange: propTypes.func.isRequired,
    handleFormSubmit: propTypes.func.isRequired,
    selectedType: propTypes.string,
    isProcessing: propTypes.bool.isRequired,
    userDropdownData: propTypes.arrayOf(propTypes.shape({
      text: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    })).isRequired,
    userDropdownLoading: propTypes.bool.isRequired,
    isFeatured: propTypes.bool.isRequired,
  };
  static defaultProps = {
    selectedType: "",
  };
  stopFormOperations = () => {
    this.fileInput.cancelFileUpload();
  };
  render() {
    const {
      handleInputChange, handleFormSubmit, handleInputBlur, selectedType, isProcessing,
      userDropdownData, userDropdownLoading, isFeatured, validationResult,
    } = this.props;
    return (
      <Form>
        <Field
          component={flattenReduxFormProps(FileInput)}
          name="filename"
          // ref={(fileInput) => { this.fileInput = fileInput; }}
          accept={["rar", "zip"]}
          endpoint="http://localhost:3000/productivityToolsUpload"
          maxSize={5}
        />
        <Form.Group>
          <Field name="name" component={Form.Input} label="Tool Name" placeholder="Tool Name" />
          {nameInput("name", handleInputChange, handleInputBlur, validationResult)}
          {typeInput("type", handleInputChange, selectedType)}
        </Form.Group>
        {descriptionInput("description", handleInputChange)}
        <Form.Group>
          {authorInput("authors", handleInputChange, userDropdownData, userDropdownLoading)}
          {versionInput("version", handleInputChange)}
        </Form.Group>
        <Form.Group>
          {imageInput("image", handleInputChange)}
          {isFeaturedInput("isFeatured", handleInputChange, isFeatured)}
        </Form.Group>
        {howToUseInput("howToUse", handleInputChange)}
        {submitButton(this.props.handleSubmit, isProcessing)}
      </Form>
    );
  }
}
export default reduxForm({ form: "addProductivityTool" })(AddProductivityToolForm);
const withValidation = (input, errors) =>
  (props => (
    [
      <input {...props} />,
      <Label basic color="red" pointing style={{ display: (errors && errors.length > 0) ? "block" : "none" }}>
        {(errors && errors.length > 0) ? errors.map(error => (<p>{error}</p>)) : ""}
      </Label>,
    ]
  )
  );
const flattenReduxFormProps = Component =>
  ((props) => {
    const { input, meta, ...rest } = props;
    return <Component {...input} {...rest} />;
  });

const nameInput = (name, handleInputChange, handleInputBlur, validationResult) => (
  // <ValidatedFormInput errors={validationResult.filter(r => r.context.key === name).map(e => (e.message))}>
  <Form.Field
    control={withValidation(Input, validationResult.filter(r => r.context.key === name).map(e => (e.message)))}
    required
    name={name}
    label="Tool Name"
    placeholder="Tool Name"
    width={10}
    onChange={handleInputChange}
    onBlur={handleInputBlur}
    error={validationResult.filter(r => r.context.key === name).length > 0}
  />
  // </ValidatedFormInput>
);
const types = [
  {
    text: "Matlab Tool",
    value: "MATLAB_TOOL",
  },
  {
    text: "Concerto Script",
    value: "CONCERTO_SCRIPT",
  },
  {
    text: "Excel Macro",
    value: "EXCEL_MACRO",
  },
  {
    text: "Vision/INCA Script",
    value: "VISION_INCA_SCRIPT",
  },
];
const typeInput = (name, handleInputChange, selectedType) =>
  (
    <Form.Field width={6} required>
      <label htmlFor={name}>Tool Type</label>
      {
      types.map((type, index) => (
        <Form.Radio
          style={{ fontWeight: "normal" }}
          key={index}
          name={name}
          label={type.text}
          value={type.value}
          checked={selectedType === type.value}
          onChange={handleInputChange}
        />
    ))}

    </Form.Field>
  );
const descriptionInput = (name, handleInputChange) =>
  (
    <Form.Field>
      <label htmlFor="description" >Description</label>
      <TextArea
        rows="3"
        name={name}
        placeholder="Description"
        onChange={handleInputChange}
      />
    </Form.Field>
  );
const authorInput = (name, handleInputChange, data, loading) =>
  (
    <Form.Dropdown
      required
      selection
      multiple
      search
      name={name}
      label="Author(s)"
      text="Author(s)"
      width={8}
      options={data}
      loading={loading}
      onChange={handleInputChange}
    />
  );
const versionInput = (name, handleInputChange) =>
  (
    <Form.Input
      name="version"
      label={[
        <label key={1} htmlFor={name}>Version Number</label>,
        <a
          key={2}
          style={{ float: "right" }}
          href="https://semver.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="info circle" />Version numbering guide
        </a>]}
      placeholder="Version Number"
      width={8}
      onChange={handleInputChange}
    />
  );


const imageInput = (name, handleInputChange) =>
  (<Form.Field
    label="Image"
    width={8}
    control={ImageInput}
    name={name}
    onChange={handleInputChange}
  />);
const isFeaturedInput = (name, handleInputChange, isFeatured) =>
  (
    <Form.Field width={8}>
      <label htmlFor={name}>Extra</label>
      <Segment style={{ boxShadow: "none", padding: "1.5em" }}>
        <Checkbox
          toggle
          label="Featured content"
          name={name}
          onChange={(e) => { handleInputChange(e, { name, value: !isFeatured }); }}
        />
      </Segment>
    </Form.Field>
  );
const howToUseInput = (name, handleInputChange) => (
  <Form.Field>
    <label htmlFor={name}>How to use</label>
    <MarkdownInput name={name} rows="5" onChange={handleInputChange} />
  </Form.Field>
);
const submitButton = (handleSubmit, isProcessing) =>
  (
    <div style={{ textAlign: "right" }}>
      <Button
        type="submit"
        color="green"
        icon="plus"
        content="Add Tool"
        onClick={handleSubmit}
        loading={isProcessing}
      />
    </div>
  );

