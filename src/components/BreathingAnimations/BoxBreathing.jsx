import React from "react";
import "./BoxBreathing.css";

function BoxBreathing() {
  return (
    <div className="BoxBreathingContainer">
      <div className="BoxBreathingTop">Hold</div>
      <div className="BoxBreathingMid">
        <span>Breath In</span>
        <div className="box">
          <div className="boxx"></div>
        </div>
        <span>Breath Out</span>
      </div>
      <div className="BoxBreathinBot">Hold</div>
    </div>
  );
}

export default BoxBreathing;
