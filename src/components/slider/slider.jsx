import React from "react";

export default function Slider({
  arrayLength,
  setArrayLength,
  speed,
  setSpeed,
  isRunning,
}) {
  return (
    <div className="slider-class">
      <div className="slider-container">
        <label>Number of Elements</label>
        <input
          type="range"
          min="2"
          max="22"
          value={arrayLength}
          onChange={(e) => {
            if (isRunning) return;
            setArrayLength(e.target.value);
          }}
          className="slider"
        />
      </div>

      <div className="slider-container">
        <label>Speed</label>
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={(e) => {
            if (isRunning) return;
            setSpeed(e.target.value);
          }}
          className="slider"
        />
      </div>
    </div>
  );
}
