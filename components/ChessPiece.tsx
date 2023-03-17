import { PieceType } from '../typing'

const ChessPiece = ({ piece }: PieceType) => {
  let imagePath = piece ? `../public/assets/${piece}.png` : undefined

  return (
    <div className='w-12'>{piece && <img src={imagePath} alt={piece} />}</div>
  )
}

export default ChessPiece
