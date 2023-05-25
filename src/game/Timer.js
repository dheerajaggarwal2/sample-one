import React from "react";

export default function Timer({ startTimer, stopTimer }) {
  const [count, setCount] = React.useState(startTimer);
  const clearTime = React.useRef(null);
  let value = React.useRef(startTimer);

  const setTimeOnScreen = () => {
    clearTime.current = setInterval(() => {
      value.current = value.current - 1;
      setCount(value.current);
      if (value.current === 0) {
        clearInterval(clearTime.current);
        alert("Game over");
        window.history.go(-1);
      }
    }, 1000);
  };

  const restartTimer = () => {
    clearInterval(clearTime.current);
    setCount(startTimer);
    value.current = startTimer;
    setTimeOnScreen();
  };

  React.useEffect(() => {
    setTimeOnScreen();
  }, []);

  React.useEffect(() => {
    if (stopTimer) {
      clearInterval(clearTime.current);
    }
  }, [stopTimer]);

  return (
    <div>
      <label className="timerContainer">Remains {count} secs</label>
      <button type="button" onClick={restartTimer} className="restartButton">
        restart
      </button>
    </div>
  );
}


function usePrevios(count) {
  const value = React.useRef();
  React.useEffect(() => {
    value.current = count;
  }, [count])
  return value.current;
}