import React, { useState } from "react";
import classNames from "./utils/class-names";
import useInterval from "./utils/useInterval";

function FocusDuration({
  isTimerRunning,
  focusDuration,
  setFocusDuration,
  handleDurationIncrease,
  handleDurationDecrease,
}) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: 25:00
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default FocusDuration;
