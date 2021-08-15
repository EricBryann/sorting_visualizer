import React from "react";
import Button from "../button/Button";
import "./Header.css";

export default function Header({
  setAlgoChoice,
  visualizeAlgo,
  generateNewArray,
}) {
  return (
    <div className="header-class">
      <div className="title">Sorting Visualizer</div>
      <div className="algo">
        <label className="algo-label">Choose Algorithm</label>
        <select
          className="select"
          onChange={(e) => setAlgoChoice(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="quickSort">Quick Sort</option>
        </select>
      </div>
      <div className="button-class">
        <Button onClick={visualizeAlgo}>Visualize</Button>
        <Button onClick={generateNewArray}>Generate New Array</Button>
      </div>
    </div>
  );
}
