import React from "react";

const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [active, setActive] = React.useState(true);
  const [pause, setPause] = React.useState(false);
  const intervalId = React.useRef(null)

  React.useEffect(() => {
    if (active && !pause) {
      intervalId.current = setInterval(() => {
        setTime((time) => time +1)
      }, 1000)
    } else {
      clearInterval(intervalId.current)
    }
    return () => {
      clearInterval(intervalId.current)
    }
    
  }, [pause, active]);


  const onPauseResume = () => {
    setPause(!pause)
  };

  const onReset = () => {
    setActive(false);
    setTime(0);
  };

  const startTimer = () => {
    setActive(true);
    setPause(false)
  }

  
  return (
    <div>
      {time} secs
      {!active && <button onClick={startTimer}>Start</button>}
      {active &&
      <>
        <button onClick={(onReset)}>Reset</button>
        <button onClick={onPauseResume}>{pause ? "Resume" : "Pause"}</button>
      </>
      }
    </div>
  )

};

export default StopWatch;

// import React from "react";

// const StopWatch = () => {
//   const [time, setTime] = React.useState(0);
//   const timeUpdate = React.useRef(0);
//   let timerId = React.useRef(0);

//   React.useEffect(() => {
//     timerSetting();
//   }, []);
  
//   const timerSetting = () => {
//     timerId.current = setInterval(() => {
//       timeUpdate.current = timeUpdate.current + 1;
//       setTime(timeUpdate.current);
//     }, 1000)
//   }

//   const stopTimer = () => {
//     clearInterval(timerId.current);
//   }

//   const resetTimer = () => {
//     clearInterval(timerId.current);
//     timeUpdate.current = 0;
//     setTime(0);
//     timerSetting();
//   }

//   return (
//     <div>
//       {time} secs
//       <button onClick={stopTimer}>Pause</button>
//       <button onClick={resetTimer}>reset</button>
//     </div>
//   )
// };

// export default StopWatch;