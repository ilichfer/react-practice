import {  useState } from 'react'
import confetti from 'canvas-confetti'  
import { Square } from './components/Square.jsx'
import { TURNS, COMBOS_WINNER } from './constants.js'
import { WinnersModal } from './components/WinnersModal.jsx'
import { checkWinnerFrom, chechEndGame } from './logic/board.js'
import './App.css'

  

 
function App() {
  const [board,setBoard] = useState( Array(9).fill(null) )

  const [turn,setTurn] = useState(TURNS.X)
  const [winner,setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard =(index) => {
    if(board[index] || winner != null) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){

    confetti()
      setWinner(newWinner)   
    }else if(chechEndGame(newBoard)){
      setWinner(false)
    }
  }
  return (
  
    <main className='board'>
      <h1>React Tic Tac Toe</h1>      
      <button onClick={resetGame} >reset</button>
      <section  className='game'>
      {
        board.map((board, index) => {
          return (
            <Square key={index} index={index} 
            updateBoard={updateBoard}>
              {board}
            </Square>
          )
        })
      }
</section>
<section className='turn'>
  <Square isSelected ={turn === TURNS.X}>{TURNS.X}</Square>
  <Square isSelected ={turn === TURNS.O}>{TURNS.O}</Square>
</section>

<WinnersModal winner={winner} resetGame={resetGame} />

    </main>
  
  )
}

export default App
