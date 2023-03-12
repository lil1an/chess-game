import React from 'react'

type SquareProps = {
  isWhite: boolean
}

const Square = ({ isWhite }: SquareProps) => {
  return (
    <div
      style={{
        backgroundColor: isWhite ? 'white' : 'black',
        width: '40px',
        height: '40px',
      }}
    />
  )
}

export default Square
