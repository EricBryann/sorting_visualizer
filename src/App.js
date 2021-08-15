import React, { useState, useEffect } from "react";
import Bar from "./components/bar/Bar";
import Header from "./components/header/Header";
import bubbleSort from "./algorithms/bubble-sort/bubbleSort";
import selectionSort from "./algorithms/selection-sort/selectionSort";
import insertionSort from "./algorithms/insertion-sort/insertionSort";
import mergeSort from "./algorithms/merge-sort/mergeSort";
import quickSort from "./algorithms/quick-sort/quickSort";
import { removeAllSortedBarColors } from "./shared/barColors";

function App() {
  const [algoChoice, setAlgoChoice] = useState("bubbleSort");
  const [arrayValues, setArrayValues] = useState([]);

  useEffect(() => {
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < 8; i++) {
      array.push(Math.floor(Math.random() * 71));
    }
    setArrayValues(array);
  }, []);

  const visualizeAlgo = () => {
    switch (algoChoice) {
      case "bubbleSort":
        return bubbleSort(arrayValues, setArrayValues);
      case "selectionSort":
        return selectionSort(arrayValues, setArrayValues);
      case "insertionSort":
        return insertionSort(arrayValues, setArrayValues);
      case "mergeSort":
        return mergeSort(arrayValues, setArrayValues);
      case "quickSort":
        return quickSort(arrayValues, setArrayValues);
      default:
        return;
    }
  };

  const generateNewArray = () => {
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < 8; i++) {
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
