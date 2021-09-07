import React, { useState, useEffect } from "react";

function ProgressBar({ session, focusDuration, breakDuration }) {
  if (session?.label === "Focusing") {
    let elapsedTime = focusDuration * 60 - session?.timeRemaining;
    let percentElapedTime = (elapsedTime / (focusDuration * 60)) * 100;
    return (
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={elapsedTime} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${percentElapedTime}%` }} // TODO: Increase width % as elapsed time increases
        />
      </div>
    );
  } else {
    let elapsedTime = breakDuration * 60 - session?.timeRemaining;
    let percentElapedTime = (elapsedTime / (breakDuration * 60)) * 100;
    return (
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={elapsedTime} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${percentElapedTime}%` }} // TODO: Increase width % as elapsed time increases
        />
      </div>
    );
  }
}

export default ProgressBar;
