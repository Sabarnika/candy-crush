import React from "react";
import "../App.css";
function Score({ score, maxScore }) {
  return (
    <>
      <div className="score-board">
        <h2>Current Score 👉🏼 {score}</h2>
      </div>
    </>
  );
}

export default Score;
