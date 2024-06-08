import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const ShowVotes = (props) => {
  return (
    <p>This anecdote has {props.total} votes.</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)
  const [maxSelected, setMaxSelected] = useState(0)
  const [resultArray, setResultArray] = useState(Array(anecdotes.length).fill(0))
  const randomClick = () => {
    let randomNum = Math.floor(Math.random()*100) % anecdotes.length
    setSelected(randomNum)
  }
  const incrementArray = () => {
    let newArray = [...resultArray]
    let val = resultArray[selected]+1
    newArray[selected] = val
    if (val > maxVotes) {
      setMaxVotes(val)
      setMaxSelected(selected)
    }
    setResultArray(newArray)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <ShowVotes total={resultArray[selected]} />
      <Button onClick={randomClick} text={"Next Anecdote"} />
      <Button onClick={incrementArray} text={"Vote"} />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[maxSelected]}</p>
      <ShowVotes total={resultArray[maxSelected]} />
    </div>
  )
}

export default App