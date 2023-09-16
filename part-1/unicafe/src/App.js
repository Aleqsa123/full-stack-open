import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return <p> No feedback given </p>
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text = "good" value = {props.good} tail = "" />
          <StatisticLine text = "neutral" value = {props.neutral} tail = "" />
          <StatisticLine text = "bad" value = {props.bad} tail = ""/>
          <StatisticLine text = "All" value = {props.good + props.neutral + props.bad} tail = "" />
          <StatisticLine text = "Average" value = {((props.good - props.bad) / (props.good + props.neutral + props.bad)).toFixed(2)} tail = "" />
          <StatisticLine text = "Positive" value = {(props.good / (props.good + props.neutral + props.bad) * 100).toFixed(2)} tail = "%" />
          </tbody>
       </table>
      </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.tail}</td>
    </tr>
    )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} />
           
    </div>
  )
}

export default App