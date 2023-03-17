import Square from './Square'

const Board = () => {
  let board = [
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
  ]

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className='flex flex-row' key={rowIndex}>
          {row.map((square, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              isWhite={(rowIndex + colIndex) % 2 === 0}
              piece={square}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
