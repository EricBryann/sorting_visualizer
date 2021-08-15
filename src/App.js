import React, { useState } from "react";
import Bar from "./components/bar/Bar";
import Header from "./components/header/Header";
import bubbleSort from "./algorithms/bubble-sort/bubbleSort";
import selectionSort from "./algorithms/selection-sort/selectionSort";
import { removeAllSortedBarColors } from "./shared/barColors";

function App() {
  const [algoChoice, setAlgoChoice] = useState("bubbleSort");
  const [arrayValues, setArrayValues] = useState([
    50, 40, 30, 20, 10, 8, 4, 2, 1,
  ]);

  const visualizeAlgo = () => {
    switch (algoChoice) {
      case "bubbleSort":
        return bubbleSort(arrayValues, setArrayValues);
      case "selectionSort":
        return selectionSort();
      default:
        return console.log("hi");
    }
  };

  const generateNewArray = () => {
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < 5; i++) {
      array.push(Math.floor(Math.random() * 71));
    }
    setArrayValues(array);
  };

  return (
    <div className="App">
      <Header
        setAlgoChoice={setAlgoChoice}
        visualizeAlgo={visualizeAlgo}
        generateNewArray={generateNewArray}
      />
      <Bar values={arrayValues} />
    </div>
  );
}

export default App;
