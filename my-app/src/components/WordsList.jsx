import "./WordCard";
import Button from 'react-bootstrap/Button';
import {PencilFill} from "react-bootstrap-icons";
import {Trash} from "react-bootstrap-icons";




function WordRow(props) {
  return (
    <tr>
      <td>{props.english}</td>
      <td>{props.transcription}</td>
      <td>{props.russian}</td>
      <td>{props.tags}</td>
      <td>
      <Button variant="warning"><PencilFill></PencilFill></Button>{' '}
      <Button variant="danger"><Trash></Trash></Button>{' '}
      </td>
    </tr>
  );
}
export default WordRow;
