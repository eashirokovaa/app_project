function EditableRow() {
  return(
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
    </tr>
  );
}
export default EditableRow;