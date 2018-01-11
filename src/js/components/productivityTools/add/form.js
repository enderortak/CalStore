import React from "react";
import propTypes from "prop-types";
import { Form, Icon, Button, TextArea, ProgressBar } from "semantic-ui-react";
import axios from "axios";
import ImageInput from "../../shared/imageInput";
import FileInput from "../../shared/fileInput";

const AddProductivityToolForm =
({
  handleInputChange, handleFormSubmit, selectedType, isProcessing,
  userDropdownData, userDropdownLoading,
}) => (
  <Form>
    <FileInput />
    <Form.Group>
      {nameInput("name", handleInputChange)}
      {typeInput("type", handleInputChange, selectedType)}
    </Form.Group>
    {descriptionInput("description", handleInputChange)}
    <Form.Group>
      {authorInput("author", handleInputChange, userDropdownData, userDropdownLoading)}
      {versionInput("version", handleInputChange)}
    </Form.Group>
    <Form.Group>
      {imageInput("name", handleInputChange)}
    </Form.Group>
    {submitButton(handleFormSubmit, isProcessing)}
  </Form>
);

AddProductivityToolForm.propTypes = {
  handleInputChange: propTypes.func.isRequired,
  handleFormSubmit: propTypes.func.isRequired,
  selectedType: propTypes.string,
  isProcessing: propTypes.bool.isRequired,
  // userDropdownData: propTypes.arrayOf(propTypes.obj).isRequired,
  userDropdownLoading: propTypes.bool.isRequired,
};
AddProductivityToolForm.defaultProps = {
  selectedType: "",
};
const nameInput = (name, handleInputChange) =>
  (<Form.Input
    required
    name={name}
    label="Tool Name"
    placeholder="Tool Name"
    width={10}
    onChange={handleInputChange}
  />);
const types = ["Matlab Tool", "Concerto Script", "Excel Macro", "Vision/INCA Script"];
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
          label={type}
          value={type}
          checked={selectedType === type}
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

const imageInput = (name, handleInputChange) =>
  (<Form.Field
    label="Image"
    width={8}
    control={ImageInput}
    name={name}
    onChange={handleInputChange}
  />);

export default AddProductivityToolForm;

