import React from 'react'
import Box from './Box'

const Board = (props) => {
    const { values, setValues, player1Turn, setPlayerTurn, isGameOver } = props

    const isBoxEmpty = (row, col) => {

        //! Checking for falsy values:
        // if (a[row][col] === undefined || a[row][col] === null || a[row][col] === "" || a[row][col] === NaN || a[row][col] === false) {

        if (!values[row][col]) {
            return true
        }

        return false

    }

    const placeLetter = (e, row, col) => {
        const previousArray = [...values]

        //! Check if the box is empty or not:
        if (isBoxEmpty(row, col) && !isGameOver) {
            if (player1Turn) {
                previousArray[row][col] = "X"
                setPlayerTurn(pre => !pre)
                //! OR:
                //* setPlayerTurn(false)

            }
            else {
                previousArray[row][col] = "O"
                setPlayerTurn(pre => !pre)
                //! OR:
                //* setPlayerTurn(false)

            }
            setValues(previousArray)
        }

        if (isGameOver) {
            alert("Game Over! If you wish to play again, please click the button.")
        }

    }



    return (
        <div className='board'>

            <Box value={props.boardValues[0][0]} row={0} col={0} placeLetter={placeLetter} />
            <Box value={props.boardValues[0][1]} row={0} col={1} placeLetter={placeLetter} />
            <Box value={props.boardValues[0][2]} row={0} col={2} placeLetter={placeLetter} />

            <Box value={props.boardValues[1][0]} row={1} col={0} placeLetter={placeLetter} />
            <Box value={props.boardValues[1][1]} row={1} col={1} placeLetter={placeLetter} />
            <Box value={props.boardValues[1][2]} row={1} col={2} placeLetter={placeLetter} />

            <Box value={props.boardValues[2][0]} row={2} col={0} placeLetter={placeLetter} />
            <Box value={props.boardValues[2][1]} row={2} col={1} placeLetter={placeLetter} />
            <Box value={props.boardValues[2][2]} row={2} col={2} placeLetter={placeLetter} />


        </div>
    )
}

export default Board