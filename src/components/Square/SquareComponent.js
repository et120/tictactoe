import React from 'react'
import './SquareComponent.css'

const SquareComponent = ({value, onClick}) => {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  )
}

export default SquareComponent
