import { SquareType } from '../typing'
import ChessPiece from './ChessPiece'

const Square = ({ isWhite, piece }: SquareType) => {
  let imagePath = piece ? `../public/assets/${piece}.png` : undefined

  return (
    <div
      style={{
        backgroundColor: isWhite ? '#ebecd0' : '#779556',
        width: '65px',
        height: '65px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {piece && <ChessPiece piece={piece} />}
    </div>
  )
}

export default Square
