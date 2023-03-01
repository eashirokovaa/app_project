import Button from "react-bootstrap/Button";
import { ClipboardCheckFill } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";

function EditableRow(props) {
  const {english, transcription, russian, handleEdit } = props;
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="English word" value={english}/>
      </td>
      <td>
        <input type="text" required="required" placeholder="Transcription" value={transcription} />
      </td>
      <td>
        <input type="text" required="required" placeholder="Translation" value={russian}/>
      </td>
      <td>
        <input type="text" required="required" placeholder="Tags"/>
      </td>
      <td>
        <Button variant="success" onClick={handleEdit}>
          <ClipboardCheckFill></ClipboardCheckFill>
        </Button>{" "}
        <Button variant="danger">
          <Trash></Trash>
        </Button>{" "}
      </td>
    </tr>
  );
}
export default EditableRow;
