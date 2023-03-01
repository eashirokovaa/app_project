import "./WordCard";
import Button from "react-bootstrap/Button";
import { PencilFill } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { useState } from "react";
import EditableRow from "./EditableRow";

function WordRow(props) {
  const { english, transcription, russian, tags } = props.word;
  const [edited, setEdited] = useState(true);
  const handleEdit = () => {
    setEdited(!edited);
  };
  return (
    <>
      {edited ? (
        <tr>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>{tags}</td>
          <td>
            <Button variant="warning" onClick={handleEdit}>
              <PencilFill></PencilFill>
            </Button>{" "}
            <Button variant="danger">
              <Trash></Trash>
            </Button>{" "}
          </td>
        </tr>
      ) : (
        <EditableRow
          english={english}
          transcription={transcription}
          russian={russian}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
}
export default WordRow;
