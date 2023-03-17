import React from 'react'
import Board from '../components/Board'
import Square from '../components/Square'
import '../styles/global.css'

function App() {

  return (
    <div>
      <div className=' flex justify-center'>
        <h1 className='text-4xl font-extrabold mt-8'>Chess Game</h1>
      </div>
      <div className='flex justify-center mt-10'>
        <Board />
      </div>
    </div>
  )
}

export default App
