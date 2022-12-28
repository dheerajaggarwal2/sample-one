import MOCK from "./app.mock";
import Timer from "./Timer";
import Homepage from "./Homepage";
import React from "react";
import OnePiece from "./images/onepiece.png";
import "./styles.css";

export default function Game() {
  const [list, setList] = React.useState(MOCK);
  const [stopTimer, setTimer] = React.useState(false);
  const [prevIndex, setPrevIndex] = React.useState(-1);
  const turnCard = (clickIndex) => {
    if (list[clickIndex]?.show) return;
    if (prevIndex === -1) {
      setPrevIndex(clickIndex);
      const newMock = list.map((item, index) => {
        let flag = item.show || false;
        if (clickIndex === index) {
          flag = true;
        }
        return { ...item, show: flag };
      });
      setList(newMock);
    } else {
      setPrevIndex(-1);
      console.log(list);
      const fisrt = list[prevIndex];
      const second = list[clickIndex];
      let isWin = true;

      let newMock = list.map((item, index) => {
        let flag = item.show || false;
        if (clickIndex === index) {
          flag = true;
        }
        if (flag === false) {
          isWin = false;
        }
        return { ...item, show: flag };
      });
      setList(newMock);
      if (isWin && fisrt.name === second.name) {
        setTimer(true);
        setTimeout(() => {
          window.history.go(-1);
         alert("You are the Winner");
        }, 100)
      }
      if (fisrt.name !== second.name) {
        setTimeout(() => {
          newMock = list.map((item, index) => {
            let flag = item.show || false;
            if (prevIndex === index || clickIndex === index) {
              flag = false;
            }
            return { ...item, show: flag };
          });
          setList(newMock);
        }, 500);
      }
    }
  };
  return (
    <div className="App">
      <Timer startTimer={12} stopTimer={stopTimer} />
      <Homepage title="Cards Game" />
      <div className="gameContainer">
        {list.map((imageData, index) => {
          return (
            <button
              key={index}
              type="button"
              style={{ display: "block" }}
              onClick={() => turnCard(index)}
            >
              <img
                src={imageData?.show ? imageData?.pic : OnePiece}
                style={{ width: "100px" }}
                alt="text"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
