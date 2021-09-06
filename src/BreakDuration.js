import React, { useState } from "react";
import classNames from "./utils/class-names";
import useInterval from "./utils/useInterval";
import { minutesToDuration } from "./utils/duration";

function BreakDuration({ session, breakDuration, setBreakDuration }) {
  if (!session) {
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* ---DONE--- TODO: Update this text to display the current break session duration */}
          Break Duration: {minutesToDuration(breakDuration)}
        </span>
        <div className="input-group-append">
          {/* ---DONE--- TODO: Implement decreasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-break"
            onClick={() => setBreakDuration((currDuration) => currDuration - 1)}
          >
            <span className="oi oi-minus" />
          </button>
          {/* ---DONE--- TODO: Implement increasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-break"
            onClick={() => setBreakDuration((currDuration) => currDuration + 1)}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    );
  } else {
    return (
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* ---DONE--- TODO: Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* ---DONE--- TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              disabled="true"
            >
              <span className="oi oi-minus" />
            </button>
            {/* ---DONE--- TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              disabled="true"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      );
  }
}

export default BreakDuration;
