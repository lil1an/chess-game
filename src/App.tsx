import React from 'react'
import Board from '../components/Board'
import Square from '../components/Square'

function App() {
  const board = [
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
    <div className='border'>
      <div className='border flex justify-center'>
        <h1 className='text-xl'>Chess Game</h1>
      </div>
      <Board board={board} />
    </div>
  )
}

export default App
