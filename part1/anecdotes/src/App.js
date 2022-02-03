import React, { useState } from 'react'


const Button = ({ text, event }) => {
  return (
    <button className="button" onClick={event}>{text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      {props.anecdote}
      <br />
      has {props.votes} votes
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [copy, setCopy] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [votes, setVotes] = useState(copy[selected]);
  const [anecdote, setAne] = useState(anecdotes[0]);
  const [max, setMax] = useState(Math.max(...copy));
  const [indexOfMaxValue, setIndex] = useState(copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))

  const handleUpdate = (index, todos) => {
    const newTodos = [...copy];
    newTodos[index] = todos;
    setCopy(newTodos);
  }

  const handleAnecdote = () => {
    let numb = Math.floor(Math.random() * 7);
    setSelected(numb);
    setVotes(copy[numb])
  }

  const handleVotes = () => {
    setVotes(votes + 1);
    handleUpdate(selected, copy[selected] + 1)
    setIndex(copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
    setMax(copy[indexOfMaxValue])
    setAne(anecdotes[indexOfMaxValue])
  }

  return (
    <div>

      <Anecdote anecdote={anecdotes[selected]} votes={votes} />
      <Button
        event={handleAnecdote}
        text="next anecdote"
      />

      <Button
        event={handleVotes}
        text="vote"
      />

      <h1>Anecdote with most votes</h1>

      <Anecdote anecdote={anecdote} votes={max} />
    </div>
  )
}

export default App