import { useState } from 'react'
import './App.css'
import Attempt from './components/Attempt'
import WinModal from './components/WinModal'
import LoseModal from './components/LoseModal'


const wordCollection = ['SPACE', 'SPIKE', 'TRUCK', 'VIOLA', 'MOUSE', 'DRIVE', 'DRINK', 'JACOB', 'VALOR'];
const selectedWord = wordCollection[Math.floor(Math.random()*wordCollection.length)]

function App() {
  const [winModal, setWinModal] = useState(false)
  const [loseModal, setLoseModal] = useState(false)
  const [userIn, setUserIn] = useState('')
  const [submitted0, setSubmitted0] = useState(false)
  const [submitted1, setSubmitted1] = useState(false)
  const [submitted2, setSubmitted2] = useState(false)
  const [submitted3, setSubmitted3] = useState(false)
  const [submitted4, setSubmitted4] = useState(false)
  const [submitted5, setSubmitted5] = useState(false)
  const [attempt, setAttempt] = useState(0);
  const [attempts, setAttempts] = useState(['', '', '', '', '', ''])
  
  const check = (e) => {
    e.preventDefault()
    if(!wordCollection.includes(userIn.toUpperCase())) {
      alert("Word not in collection.")
    }
    else if(attempt > attempts.indexOf(userIn)) {
      alert('Word has already been used dummy.')
    }
    else {
      setActiveSubmit()
      if(userIn.toUpperCase() === selectedWord) {
        setWinModal(true)
      }
      else {
        setAttempt(attempt + 1);
        setUserIn('')
      }
      
    }
  }
  if(attempt === 6) {
    setLoseModal(true)
    setAttempt(attempt + 1);
  }

  const handleInputChange = (value) => {
    setUserIn(value)
    const newAttempts = [...attempts]
    newAttempts[attempt] = value
    setAttempts(newAttempts)
  }

  function setActiveSubmit() {
    if(attempt === 0) {
      setSubmitted0(true)
    }
    else if(attempt === 1) {
      setSubmitted1(true)
    }
    else if(attempt === 2) {
      setSubmitted2(true)
    }
    else if(attempt === 3) {
      setSubmitted3(true)
    }
    else if(attempt === 4) {
      setSubmitted4(true)
    }
    else if(attempt === 5) {
      setSubmitted5(true)
    }
  }

  return (
    <div className='page'>
      <div className='header'>
        <h1 className='wordle-title'>Wordle</h1>
      </div>
    
      <div  className="body">
        <div className="input-display">
          <Attempt className={attempt === 0 ? 'active' : 'inactive'} word={attempts[0]} selectedWord={selectedWord} submitted={submitted0}></Attempt>
          <Attempt className={attempt === 1 ? 'active' : 'inactive'} word={attempts[1]} selectedWord={selectedWord} submitted={submitted1}></Attempt>
          <Attempt className={attempt === 2 ? 'active' : 'inactive'} word={attempts[2]} selectedWord={selectedWord} submitted={submitted2}></Attempt>
          <Attempt className={attempt === 3 ? 'active' : 'inactive'} word={attempts[3]} selectedWord={selectedWord} submitted={submitted3}></Attempt>
          <Attempt className={attempt === 4 ? 'active' : 'inactive'} word={attempts[4]} selectedWord={selectedWord} submitted={submitted4}></Attempt>
          <Attempt className={attempt === 5 ? 'active' : 'inactive'} word={attempts[5]} selectedWord={selectedWord} submitted={submitted5}></Attempt>
        </div>
        <WinModal toggleWin={winModal} setWinModal={setWinModal}></WinModal>
        <LoseModal toggleLose={loseModal} setLoseModal={setLoseModal}></LoseModal>
        <form onSubmit={check}>
          <input type="text"
          required
          value={userIn}
          
          onChange={(e) => handleInputChange(e.target.value)}
          minLength={5}
          maxLength={5}>
          </input>
        </form>
      </div>
    </div>
  )
}

export default App
