import React from "react";
import Bar from "./components/bar/Bar";
import Header from "./components/header/Header";

import useSortingAlgorithm from "./useSortingAlgorithm";

function App() {
  const {
    algoChoice,
    setAlgoChoice,
    visualizeAlgo,
    generateNewArray,
    arrayLength,
    arrayValues,
    setArrayLength,
    speed,
    setSpeed,
    isRunning,
  } = useSortingAlgorithm();
  return (
    <div className="App">
      <Header
        algoChoice={algoChoice}
        setAlgoChoice={setAlgoChoice}
        visualizeAlgo={visualizeAlgo}
        generateNewArray={generateNewArray}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        speed={speed}
        setSpeed={setSpeed}
        isRunning={isRunning}
      />
      <div style={{ backgroundColor: "rgb(214, 238, 247)" }}>
        <Bar values={arrayValues} />
      </div>
    </div>
  );
}

export default App;
