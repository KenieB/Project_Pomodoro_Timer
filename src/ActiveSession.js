import React from "react";
import { minutesToDuration, secondsToDuration } from "./utils/duration";
import ProgressBar from "./ProgressBar";

function ActiveSession({
  session,
  focusDuration,
  breakDuration,
}) {
  if (session) {
      return (
      <>
        {/* ---DONE--- TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* ---DONE--- TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(focusDuration)} minutes
            </h2>
            {/* ---DONE--- TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar session={session} focusDuration={focusDuration} breakDuration={breakDuration} />
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default ActiveSession;