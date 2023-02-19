import { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "/Users/katasirokova/app_project/my-app/src/components/styles/card.css";

function Card(props) {
  const { english, transcription, russian } = props.word;
  const [pressed, setPressed] = useState(true);
  const handlePressed = () => {
      setPressed(!pressed);
  };
  return (
    <div className="card">
      <h2 className="hedding">{english}</h2>
      <p className="transcription">{transcription}</p>
      {pressed ? (
        <Button className="translate" variant="success" onClick={handlePressed}>
          {" "}
          Translate
        </Button>
      ) : (
        <p className="russian">{russian}</p>
      )}
    </div>
  );
}
export default Card;
