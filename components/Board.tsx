import React from 'react'
import Square from './Square'

type BoardProps = {
  board: number[][]
}

const Board = ({ board }: BoardProps) => {
  return (
    <section>
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
    </section>
  )
}

export default Board
