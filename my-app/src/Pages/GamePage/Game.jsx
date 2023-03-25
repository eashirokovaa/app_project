import React from "react";
import { useState } from "react";
import data from "/Users/katasirokova/app_project/my-app/src/data.json";
import Card from "/Users/katasirokova/app_project/my-app/src/components/WordCard.jsx";
import Button from "react-bootstrap/Button";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { ArrowRightCircleFill } from "react-bootstrap-icons";


export default function Game() {
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
    <div className="cardRow">
      <Button
        className="button"
        variant="light"
        onClick={previousCard}
        size="lg"
      >
        <ArrowLeftCircleFill></ArrowLeftCircleFill>
      </Button>
      <Card word={data[count]} key={count} />
      <Button className="button" variant="light" onClick={nextCard} size="lg">
        <ArrowRightCircleFill></ArrowRightCircleFill>
      </Button>
    </div>
  );
}
