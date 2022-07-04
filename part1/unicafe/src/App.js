import { useState } from 'react'

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const { good, neutral, bad, total, average } = props


  return (
    <div>
      <h1>Statistics</h1>
      {
        total === 0 ?
          <p>No feedback given</p> :
          <table>
            <tbody>
              <TableRow text="good" value={good} />
              <TableRow text="neutral" value={neutral} />
              <TableRow text="bad" value={bad} />
              <TableRow text="total" value={total} />
              <TableRow text="average" value={average/total} />
              <TableRow text="positive percentage" value={(good/total)*100} />
            </tbody>
          </table>
      }
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />
    </div>
  )
}

export default App