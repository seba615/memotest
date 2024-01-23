import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const createBoard = ({ boardSize }) => {
    const uniqueValueAmount = Math.floor(boardSize / 2);

    // Create an array of numbers from 0 to uniqueValueAmount - 1
    const cardValues = Array.from({ length: uniqueValueAmount }, (_, index) => index);

    // Duplicate each number and shuffle the array
    const shuffledCardValues = cardValues.flatMap(number => [number, number]).sort(() => Math.random() - 0.5);

    return shuffledCardValues;
  }

  const board = createBoard({ boardSize: 24 });

  return (
    <div>
      <main className='board'>
        <h1>Memotest</h1>
        <section className='game'>
          {
            board.map((val, ind) => {
              return (
                <div className='card' key={ind} index={ind} value={val}>
                  {val}
                </div>
              )
            })
          }
        </section>
      </main>
    </div>
  )
}

export default App
