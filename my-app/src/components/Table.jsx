import React from "react";
import data from "/Users/katasirokova/app_project/my-app/src/data.json";
import WordRow from "/Users/katasirokova/app_project/my-app/src/components/WordsList.jsx";

function Table() {
  return (
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
  );
}
export default Table;
