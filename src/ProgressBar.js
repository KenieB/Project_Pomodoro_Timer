import React, { useState, useEffect } from "react";

function ProgressBar() {
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
        style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
      />
    </div>
  );
}

export default ProgressBar;
