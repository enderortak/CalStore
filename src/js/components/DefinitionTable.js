import React from "react";
import propTypes from "prop-types";
import { Table } from "semantic-ui-react";

const DefinitionTable = ({ definitions }) =>
  (
    <Table definition>
      <Table.Body>
        {
     definitions.map(definition =>
       (
         <Table.Row key={definition.key}>
           <Cell content={definition.key} />
           <Cell content={definition.value} />
         </Table.Row>
       ))
      }
      </Table.Body>
    </Table>
  );
const Cell = ({ content }) => {
  if (typeof content === "object" && content.content) return (<Table.Cell {...content} />);
  return (<Table.Cell content={content} />);
};
Cell.propTypes = {
  content: propTypes.any.isRequired,
};
DefinitionTable.propTypes = {
  definitions: propTypes.arrayOf(propTypes.shape({
    key: propTypes.string.isRequired,
    value: propTypes.any.isRequired,
  })).isRequired,
};
export default DefinitionTable;

