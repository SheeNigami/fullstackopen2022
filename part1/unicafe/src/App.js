import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatDisplay = ({text, count}) => {
  if (text === 'positive') {
    return (
      <p>
        {text} {count} %
      </p>
    )
  }
  return (
    <p>
      {text} {count}
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  const total = good + bad + neutral
  const avg = (good - bad) / total
  const positivePerc = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <h1>statistics</h1>
      <StatDisplay text='good' count={good} />
      <StatDisplay text='neutral' count={neutral} />
      <StatDisplay text='bad' count={bad} />
      <StatDisplay text='all' count={total} />
      <StatDisplay text='average' count={avg} />
      <StatDisplay text='positive' count={positivePerc} />
    </div>
  )
}

export default App
