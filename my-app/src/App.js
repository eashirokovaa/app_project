import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data.json";
import WordRow from "./components/WordsList";
import Card from "./components/WordCard";
import Button from "react-bootstrap/Button";
import {ArrowLeftCircleFill} from "react-bootstrap-icons";
import {ArrowRightCircleFill} from "react-bootstrap-icons";

function App() {
  const [count, setCount] = useState(0);

  function previousCard() {
    if (count === 0) {
      setCount(data.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  function nextCard() {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  
  return (
    <div className="app-container">
      <div className="cardRow">
      <Button className="button" variant="light" onClick={previousCard} size="lg">
          <ArrowLeftCircleFill></ArrowLeftCircleFill>
        </Button>
        <Card word={data[count]} key={count}  />
        <Button className="button" variant="light" onClick={nextCard} size="lg">
          <ArrowRightCircleFill></ArrowRightCircleFill>
        </Button>
      </div>
      <table>
        <thead>
          <th>English word</th>
          <th>Transcription</th>
          <th>Translation</th>
          <th>Tags</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {data.map((word, index) => (
            <>
              <WordRow key={index} word={word} />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
