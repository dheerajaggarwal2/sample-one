import React from "react";
import "./styles.css";
import { GiCircle, GiCrossedBones } from "react-icons/gi";

let n = 3;
let rowSum = Array(n).fill(0);
let colSum = Array(n).fill(0);
let dignaol = 0;
let reverseDiagnol = 0;
let pass = 0;
export default function Game() {
  let CreateBoard = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const [board, setBoard] = React.useState(CreateBoard);
  const [player, setPlayer] = React.useState(1);
  const [colorTin, changeColor] =  React.useState(true);

  setInterval(() => {
    changeColor(!colorTin)
  }, 500);
 
  const nextMove = (row, col) => {
    if (row < 0 || col < 0 || row >= n || col >= n) {
      alert("Please click on board");
    } else if (board[row][col] !== 0) {
      alert("please click on empty blacks in the board");
    } else {
      const value = (player === 1) ? -1 : 1;
      pass = pass + 1;
      board[row][col] = value;
      setBoard(board);
      rowSum[row] = rowSum[row] + value;
      colSum[col] = colSum[col] + value;
      if (row === col) {
        dignaol = dignaol + value;
      }
      if (row === (n - 1 - col)) {
        reverseDiagnol = reverseDiagnol + value;
      }
      if (Math.abs(rowSum[row]) === n || Math.abs(colSum[col]) === n ||
      Math.abs(dignaol) === n || Math.abs(reverseDiagnol) === n) {
        setTimeout(() => {
          alert(`Player ${player} is the winner`);
          window.history.go(0);
        }, 200);
      }
      if (pass === 3*n) {
        setTimeout(() => {
          alert(`Game is Drawn`);
          window.history.go(0);
        }, 200);
      }
      setPlayer(player === 1 ? 2 : 1);
    }
  }

  return(
    <>
      <div className="boardContainer">
        <div className={colorTin ? "heading" : "heading1"}>Criss Cross Game</div>
        {board.map((row, rowIndex) => {
          return (
            <div
              className="rowConatiner"
              key={rowIndex}
            >
              {row.map((item, columnIndex) => {
                return (
                  <div 
                    onClick={() => nextMove(rowIndex, columnIndex)}
                    key={columnIndex}
                    className="section"
                  >
                    <span className="insideContainer">
                      {item === 0 ? "" :
                        (item === -1 ? <GiCircle size={20}/> : <GiCrossedBones size={20}/>)}
                    </span>
                  </div>
                )
              })
              }
            </div>
          )
        })
        }
      </div>
    </>
  )
}