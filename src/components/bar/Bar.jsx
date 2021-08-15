import React from "react";
import "./Bar.css";

export default function Bar({ values }) {
  return (
    <div className="container">
      {values.map((value, i) => (
        <div className="bar" key={i}>
          <div className="side top"></div>
          <div className={`side bottom add-color-${i}`}></div>
          <div className="side right">
            <div
              className={`color-bar add-color-${i}`}
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side left">
            <div
              className={`color-bar add-color-${i}`}
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side front">
            <div
              className={`color-bar add-color-${i}`}
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side back">
            <div
              className={`color-bar add-color-${i}`}
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
