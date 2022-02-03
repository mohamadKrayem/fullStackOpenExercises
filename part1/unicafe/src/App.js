import { useState} from "react"
import React from 'react'
const Button =({event, text})=>{
  return (
    <button onClick={event}>{text}</button>
  )
}

const StatisticLine=({text, value})=> <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics=(props)=>{
  if(props.all===0){
    return (
      <p>No feedback given</p>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.all}/>
        <StatisticLine text="average" value={props.average}/>
        <React.StrictMode>
          <StatisticLine
            text="positive "
            value={props.positive + " %"}
          />
        </React.StrictMode>
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);
  const [all, setAll]=useState(0);
  const [average, setAverage]=useState(0);
  const [positive, setPositive]=useState(0);

  return (
    <div className="App">
      <h1>give feedback</h1>

      <Button event={()=>{
        setAll(all+1);
        setGood(good+1);
        setAverage((good+1-bad)/(all+1));
        setPositive((good+1)/(all+1)*100);
      }} text="good" />

      <Button event={()=>{
        setAll(all+1);
        setAverage((good-bad)/(all+1));
        setNeutral(neutral+1);
        setPositive((good)/(all+1)*100);
      }} text="neutral" />

      <Button event={()=>{
        setAll(all+1);
        setBad(bad+1);
        setAverage((good-bad-1)/(all+1));
        setPositive((good)/(all+1)*100);
      }} text="bad" />

      <h1>statistics</h1>
      <Statistics all={all}
        good={good}
        average={average}
        bad={bad}
        neutral={neutral}
        positive={positive}
      />

    </div>
  );
}

export default App;
