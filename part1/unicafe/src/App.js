import { useState } from 'react'

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
              <tr>
                <td>Good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>Bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{average / total}</td>
              </tr>
              <tr>
                <td>Positive %</td>
                <td>{(good / total) * 100} %</td>
              </tr>
            </tbody>
          </table>
      }
    </div>
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />
    </div>
  )
}

export default App