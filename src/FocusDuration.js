import React, { useState } from "react";
import classNames from "./utils/class-names";
import useInterval from "./utils/useInterval";
import { minutesToDuration } from "./utils/duration";

function FocusDuration({ session, focusDuration, setFocusDuration }) {
  if (!session) {
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* ---DONE--- TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* ---DONE--- TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={() => setFocusDuration((currDuration) => currDuration - 1)}
          >
            <span className="oi oi-minus" />
          </button>
          {/* ---DONE--- TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={() => setFocusDuration((currDuration) => currDuration + 1)}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* ---DONE--- TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* ---DONE--- TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            disabled="true"
          >
            <span className="oi oi-minus" />
          </button>
          {/* ---DONE--- TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            disabled="true"
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default FocusDuration;
