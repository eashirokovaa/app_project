import { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "/Users/katasirokova/app_project/my-app/src/components/styles/card.css";

function Card({ word }, count) {
  const { english, transcription, russian } = word;

  const [pressed, setPressed] = useState(false);
  const handlePressed = () => {
    setPressed(!pressed);
  };
  return (
    <div className="card">
      <h2 className="hedding">{english}</h2>
      <p className="transcription">{transcription}</p>
      {pressed ? (
        <p className="russian">{russian}</p>
      ) : (
        <Button className="translate" variant="success" onClick={handlePressed}>
          {" "}
          Translate
        </Button>
      )}
    </div>
  );
}
export default Card;
