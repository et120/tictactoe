import React from 'react'
import SquareComponent from '../Square/SquareComponent'

const BoardComponent = ({ onClick, squares }) => {

    const renderSquares = () => {
            const squareComps = [];
        
            squares.forEach((value, i) => {
                squareComps.push(
                    <SquareComponent value={value} key={i} onClick={() => onClick(i)} />
                )
            });

            return squareComps;
    }

  return (
    <div className='board'>
        <div className='boardRow'>
            <div>{renderSquares().slice(0, 3)}</div>
            <div>{renderSquares().slice(3, 6)}</div>
            <div>{renderSquares().slice(6, 9)}</div>
        </div>
    </div>
  )
}

export default BoardComponent
