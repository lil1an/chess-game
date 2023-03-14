import React from 'react'
import { SquareType } from '../typing'

const Square = ({ isWhite }: SquareType) => {
  return (
    <div
      style={{
        backgroundColor: isWhite ? '#f4f4f5' : '#4b5563',
        width: '65px',
        height: '65px',
      }}
    />
  )
}

export default Square
