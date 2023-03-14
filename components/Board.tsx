import React from 'react'
import Square from './Square'

const Board = () => {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className='flex flex-row' key={rowIndex}>
          {row.map((square, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              isWhite={(rowIndex + colIndex) % 2 === 0}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
