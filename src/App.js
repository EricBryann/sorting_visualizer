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
  const [isRunning, setIsRunning] = useState(false);
  const [arrayLength, setArrayLength] = useState(22);

  useEffect(() => {
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(Math.floor(Math.random() * 71));
    }
    setArrayValues(array);
  }, [algoChoice]);

  const visualizeAlgo = async () => {
    if (isRunning) return;
    switch (algoChoice) {
      case "bubbleSort":
        setIsRunning(true);
        await bubbleSort(arrayValues, setArrayValues);
        setIsRunning(false);
        break;
      case "selectionSort":
        setIsRunning(true);
        await selectionSort(arrayValues, setArrayValues);
        setIsRunning(false);
        break;
      case "insertionSort":
        setIsRunning(true);
        await insertionSort(arrayValues, setArrayValues);
        setIsRunning(false);
        break;
      case "mergeSort":
        setIsRunning(true);
        await mergeSort(arrayValues, setArrayValues);
        setIsRunning(false);
        break;
      case "quickSort":
        setIsRunning(true);
        await quickSort(arrayValues, setArrayValues);
        setIsRunning(false);
        break;
      default:
        return;
    }
  };

  const generateNewArray = () => {
    if (isRunning) return;
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
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
