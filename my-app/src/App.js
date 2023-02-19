import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data.json";
import WordRow from "./components/WordsList";
import Card from "./components/WordCard";

function App() {
  return (
    <div className="app-container">
      <div className="cardRow">
      {data.map((word, index) => (
            <>
              <Card
                key={index}
                word = {word}
              />
            </>
          ))}
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
              <WordRow
                key={index}
                word = {word}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
