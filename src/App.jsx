import { useState } from 'react'
import './App.css'
import Attempt from './Attempt'


const wordCollection = ['SPACE', 'SPIKE', 'TRUCK', 'VIOLA', 'MOUSE', 'DRIVE'];
const selectedWord = wordCollection[Math.floor(Math.random()*wordCollection.length)]

function App() {

  const [userIn, setUserIn] = useState('')
  const [submitted1, setSubmitted1] = useState(false)
  const [submitted2, setSubmitted2] = useState(false)
  const [submitted3, setSubmitted3] = useState(false)
  const [submitted4, setSubmitted4] = useState(false)
  const [submitted5, setSubmitted5] = useState(false)
  const [attempt, setAttempt] = useState(0);
  const [attempts, setAttempts] = useState(['', '', '', '', ''])
  
  const check = (e) => {
    e.preventDefault()
    if(!wordCollection.includes(userIn.toUpperCase())) {
      alert("word not in collection")
    }
    else {
      console.log(attempts)
      setActiveSubmit()
      setAttempt(attempt + 1);
    }
  }

  const handleInputChange = (value) => {
    setUserIn(value)
    const newAttempts = [...attempts]
    newAttempts[attempt] = value
    setAttempts(newAttempts)
  }



  function setActiveSubmit() {
    if(attempt === 0) {
      setSubmitted1(true)
    }
    else if(attempt === 1) {
      setSubmitted2(true)
    }
    else if(attempt === 2) {
      setSubmitted3(true)
    }
    else if(attempt === 3) {
      setSubmitted4(true)
    }
    else if(attempt === 4) {
      setSubmitted5(true)
    }
  }

  return (
    <div  className="body">
      <div className="input-display">
        <Attempt className={attempt === 0 ? 'active' : 'inactive'} word={attempts[0]} selectedWord={selectedWord} submitted={submitted1} attempts={attempts} attempt={attempt}></Attempt>
        <Attempt className={attempt === 1 ? 'active' : 'inactive'} word={attempts[1]} selectedWord={selectedWord} submitted={submitted2} attempts={attempts} attempt={attempt}></Attempt>
        <Attempt className={attempt === 2 ? 'active' : 'inactive'} word={attempts[2]} selectedWord={selectedWord} submitted={submitted3} attempts={attempts} attempt={attempt}></Attempt>
        <Attempt className={attempt === 3 ? 'active' : 'inactive'} word={attempts[3]} selectedWord={selectedWord} submitted={submitted4} attempts={attempts} attempt={attempt}></Attempt>
        <Attempt className={attempt === 4 ? 'active' : 'inactive'} word={attempts[4]} selectedWord={selectedWord} submitted={submitted5} attempts={attempts} attempt={attempt}></Attempt>
      </div>
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
  )
}

export default App
