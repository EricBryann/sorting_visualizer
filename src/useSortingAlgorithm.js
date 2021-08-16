import { useState, useEffect } from "react";
import bubbleSort from "./algorithms/bubble-sort/bubbleSort";
import selectionSort from "./algorithms/selection-sort/selectionSort";
import insertionSort from "./algorithms/insertion-sort/insertionSort";
import mergeSort from "./algorithms/merge-sort/mergeSort";
import quickSort from "./algorithms/quick-sort/quickSort";
import { removeAllSortedBarColors } from "./shared/barColors";

export default function useSortingAlgorithm() {
  const [algoChoice, setAlgoChoice] = useState("bubbleSort");
  const [arrayValues, setArrayValues] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [arrayLength, setArrayLength] = useState(15);
  const [speed, setSpeed] = useState(10);

  useEffect(() => {
    removeAllSortedBarColors(arrayValues.length);
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(Math.floor(Math.random() * 81));
    }
    setArrayValues(array);
  }, [algoChoice, arrayLength, arrayValues.length]);

  const visualizeAlgo = async () => {
    if (isRunning) return;
    switch (algoChoice) {
      case "bubbleSort":
        setIsRunning(true);
        await bubbleSort(arrayValues, setArrayValues, speed);
        setIsRunning(false);
        break;
      case "selectionSort":
        setIsRunning(true);
        await selectionSort(arrayValues, setArrayValues, speed);
        setIsRunning(false);
        break;
      case "insertionSort":
        setIsRunning(true);
        await insertionSort(arrayValues, setArrayValues, speed);
        setIsRunning(false);
        break;
      case "mergeSort":
        setIsRunning(true);
        await mergeSort(arrayValues, setArrayValues, speed);
        setIsRunning(false);
        break;
      case "quickSort":
        setIsRunning(true);
        await quickSort(arrayValues, setArrayValues, speed);
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
      array.push(Math.floor(Math.random() * 81));
    }
    setArrayValues(array);
  };
  return {
    algoChoice,
    isRunning,
    setAlgoChoice,
    visualizeAlgo,
    generateNewArray,
    arrayLength,
    arrayValues,
    setArrayLength,
    speed,
    setSpeed,
  };
}
