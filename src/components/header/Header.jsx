import React from "react";
import Button from "../button/Button";
import Slider from "../slider/slider";
import "./Header.css";

function AlgoButton({ label, value, algoChoice, setAlgoChoice, isRunning }) {
  return (
    <div
      className={`option ${algoChoice === value && "selectedAlgo"}`}
      onClick={() => {
        if (isRunning) return;
        setAlgoChoice(value);
      }}
    >
      {label}
    </div>
  );
}

export default function Header({
  algoChoice,
  setAlgoChoice,
  visualizeAlgo,
  generateNewArray,
  arrayLength,
  setArrayLength,
  speed,
  setSpeed,
  isRunning,
}) {
  return (
    <div className="header-class">
      <Slider
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        speed={speed}
        setSpeed={setSpeed}
        isRunning={isRunning}
      />

      <div className="button-header-class">
        <div className="title">Sorting Visualizer</div>
        <div className="button-class">
          <div className="algo-button">
            <AlgoButton
              label="Bubble"
              value="bubbleSort"
              algoChoice={algoChoice}
              setAlgoChoice={setAlgoChoice}
              isRunning={isRunning}
            />
            <AlgoButton
              label="Selection"
              value="selectionSort"
              algoChoice={algoChoice}
              setAlgoChoice={setAlgoChoice}
              isRunning={isRunning}
            />
            <AlgoButton
              label="Insertion"
              value="insertionSort"
              algoChoice={algoChoice}
              setAlgoChoice={setAlgoChoice}
              isRunning={isRunning}
            />
            <AlgoButton
              label="Merge"
              value="mergeSort"
              algoChoice={algoChoice}
              setAlgoChoice={setAlgoChoice}
              isRunning={isRunning}
            />
            <AlgoButton
              label="Quick"
              value="quickSort"
              algoChoice={algoChoice}
              setAlgoChoice={setAlgoChoice}
              isRunning={isRunning}
            />
          </div>

          <Button onClick={visualizeAlgo}>Visualize</Button>
          <Button onClick={generateNewArray}>Generate New Array</Button>
        </div>
      </div>
    </div>
  );
}
