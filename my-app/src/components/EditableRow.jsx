import Button from "react-bootstrap/Button";
import { ClipboardCheckFill } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";

function EditableRow(props) {
  const { handleEdit } = props;
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="English word" />
      </td>
      <td>
        <input type="text" required="required" placeholder="Transcription" />
      </td>
      <td>
        <input type="text" required="required" placeholder="Translation" />
      </td>
      <td>
        <input type="text" required="required" placeholder="Tags" />
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
