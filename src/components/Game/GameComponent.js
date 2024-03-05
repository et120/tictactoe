import React from 'react'
import useGameHistory from '../utils/useGameHistory'
import BoardComponent from '../Board/BoardComponent';
import './GameComponent.css'

const GameComponent = () => {

    const { history, stepNumber, updateHistory, resetHistory, setStepNumber} = useGameHistory();

    const currentSquares = history[stepNumber];
    
    
    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const currentSquares = newHistory[newHistory.length - 1];
        const squaresCopy = currentSquares.slice();

        squaresCopy[i] = stepNumber % 2 === 0 ? "X" : "O";
        updateHistory([...newHistory, squaresCopy])
    };


  return (
    <div className='game'>
      <div className='gameBoard'>
        <h1>Tic Tac Toe</h1>

        <div>
            <BoardComponent squares={currentSquares} onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default GameComponent
