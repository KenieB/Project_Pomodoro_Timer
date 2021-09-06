import React, { useState } from "react";
import classNames from "./utils/class-names";
import useInterval from "./utils/useInterval";

function BreakDuration({
  isTimerRunning,
  breakDuration,
  setBreakDuration,
  handleDurationIncrease,
  handleDurationDecrease,
}) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration */}
        Break Duration: 05:00
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default BreakDuration;
