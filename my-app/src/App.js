import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import data from "./data.json";
import WordRow from "./components/WordsList";
import EditableRow from "./components/EditableRow";


function App() {
  const [editNameId, setNameid] = useState(null);
  return (
    <div className="app-container">
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
              {editNameId === word.id ? (
                <EditableRow></EditableRow>
              ) : (
                <WordRow
                  key={index}
                  english={word.english}
                  transcription={word.transcription}
                  russian={word.russian}
                  tags={word.tags}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
