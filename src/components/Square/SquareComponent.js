import React from 'react'

const SquareComponent = ( value, onClick) => {
  return (
    <button className='square' onClick={onClick}>
      { value }
    </button>
  )
}

export default SquareComponent
