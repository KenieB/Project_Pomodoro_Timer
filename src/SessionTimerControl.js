import React from "react";
import classNames from "./utils/class-names";

function SessionTimerControl({
  playPause,
  isTimerRunning,
  setIsTimerRunning,
  session,
  setSession,
  setFocusDuration,
  setBreakDuration,
}) {
  if (session) {
    const stopSession = () => {
      setIsTimerRunning(false);
      setSession(null);
      setFocusDuration(25);
      setBreakDuration(5);
    };
    return (
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* ---DONE--- TODO: Implement stopping the current focus or break session. */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="stop"
          title="Stop the session"
          onClick={stopSession}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
    );
  } else {
    return (
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* ---DONE--- TODO: Disable the stop button when there is no active session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="stop"
          title="Stop the session"
          disabled={true}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
    );
  }
}

export default SessionTimerControl;