import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.onClick}>{props.buttonName}</button>
  )
}

const Buttons = (parts) => {
  return (
    <div>
      <Button buttonName={parts.parts[0].name} onClick={parts.parts[0].clicked} />
      <Button buttonName={parts.parts[1].name} onClick={parts.parts[1].clicked} />
      <Button buttonName={parts.parts[2].name} onClick={parts.parts[2].clicked} />
    </div>
  )
}

const StatisticLine = (props) => {
  if(props.percent) {
    return (
      <tr>
        <td>{props.category}: </td><td>{props.value*100}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.category}: </td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.sum === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine category={"Good"} value={props.good} />
        <StatisticLine category={"Neutral"} value={props.neutral} />
        <StatisticLine category={"Bad"} value={props.bad} />
        <StatisticLine category={"All"} value={props.sum} />
        <StatisticLine category={"Average"} value={(props.good-props.bad)/props.sum} />
        <StatisticLine category={"Positive"} value={props.good/props.sum} percent={true}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const heading = "Give Feedback"
  const stats = "Statistics"
  const buttonSetup = {
    parts: [
      {
        name: "Good",
        clicked: () => {setGood(good+1)}
      },
      {
        name: "Neutral",
        clicked: () => {setNeutral(neutral+1)}
      },
      {
        name: "Bad",
        clicked: () => {setBad(bad+1)}
      }
    ]
  }
  let sum = good+bad+neutral

  return (
    <div>
      <Header heading={heading} />
      <Buttons parts={buttonSetup.parts}/>
      <Header heading={stats} />
      <Statistics good={good} bad={bad} neutral={neutral} sum={sum}/>
    </div>
  )
}

export default App
