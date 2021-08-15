import React from "react";
import Bar from "./components/bar/Bar";
import Header from "./components/header/Header";
import Slider from "./components/slider/slider";
import useSortingAlgorithm from "./useSortingAlgorithm";

function App() {
  const {
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
        setAlgoChoice={setAlgoChoice}
        visualizeAlgo={visualizeAlgo}
        generateNewArray={generateNewArray}
      />
      <div style={{ backgroundColor: "rgb(214, 238, 247)" }}>
        <Bar values={arrayValues} />
        <Slider
          arrayLength={arrayLength}
          setArrayLength={setArrayLength}
          speed={speed}
          setSpeed={setSpeed}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
