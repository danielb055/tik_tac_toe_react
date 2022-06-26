import { useEffect, useState } from "react";
import Board from "./components/Board"



//! Pattern when the game ends with a draw.
//! Pattern when the game ends with X winners.
//! Pattern when the game ends with O winners.

//! A winning case is when there is 3 values in either diagonal, Horizontal, Vertical positions
const checkWinner = (board) => {
  //! Check X diagonally:
  if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
    alert(`The Winner is ${board[0][0]}`)
    return true
  }

  if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")) {
    alert(`The Winner is ${board[0][2]}`)
    return true
  }


  //! Checking O diagonally:
  if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
    alert(`The Winner is ${board[0][0]}`)
    return true
  }

  if ((board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")) {
    alert(`The Winner is ${board[0][2]}`)
    return true
  }


  //! Checking each row for a set of 3 Xs or Os:
  // let row = 0;
  let xCounter = 0;
  let oCounter = 0;

  for (const row of board) {
    xCounter = 0
    oCounter = 0
    for (const col of row) {
      if (col === "X") {
        xCounter++
      } else if (col === "O") {
        oCounter++
      }
    }

    if (xCounter === 3 || oCounter === 3) {
      let winner = board[board.indexOf(row)][0]
      alert(`The winner is ${winner}`)
      return true
    }
  }

  //! Checking each Col for a set of 3 Xs or Os:
  for (let col = 0; col < 3; col++) {
    if ((board[0][col] == "X" && board[1][col] == "X" && board[2][col] === "X") || (board[0][col] == "O" && board[1][col] == "O" && board[2][col] === "O")) {
      let winner = board[0][col]
      alert(`The winner is ${winner}`)
      return true
    }


    //! Check for draw:
    let allCellsAreFilled = true

    for (const row of board) {
      for (const col of row) {
        allCellsAreFilled = !!col && allCellsAreFilled
        console.log(allCellsAreFilled)
      }
    }

    if (allCellsAreFilled) {
      alert("It is a draw")
      return true
    }


    console.log("The Borad at the moment is: ", board)
  }

}

//! The App Component:
function App() {
  const [a, setA] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ])

  const [isGameEnded, setIsGameEnded] = useState(false)
  useEffect(() => {
    setIsGameEnded(checkWinner(a))
  }, [a])



  // const isPlayer1Turn = true
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true)

  // const a = [
  //   ["X", "O", "O"],
  //   ["O", "X", "X"],
  //   ["X", "X", "O"]
  // ];

  // function changeSomething() { }

  const resetGame = () => {
    const tempArray = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]

    setA(tempArray)
    setIsGameEnded(false)

  }


  return (
    <div className="App">
      <Board isGameOver={isGameEnded} boardValues={a} values={a} setValues={setA} player1Turn={isPlayer1Turn} setPlayerTurn={setIsPlayer1Turn} />

      <button onClick={resetGame}>Reset</button>
    </div>
  )
}

export default App

