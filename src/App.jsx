import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  //button template

  <button onClick = {handleClick}>
    {text}
  </button>
}

const App = () => {
  // save clicks of each button to its own state

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  })


//state modifiers

  const goodClick = () => {
    const updatedGood = feedback.good + 1
    const newFeed = {
      ...feedback,
      good: updatedGood,
      total: updatedGood + feedback.neutral + feedback.bad
    }
    setFeedback(newFeed)
  }

   const neutralClick = () => {
     const updatedNeutral = feedback.neutral + 1
     const newFeed = {
       ...feedback,
       neutral: updatedNeutral,
       total: updatedNeutral + feedback.good + feedback.bad
     }
     setFeedback(newFeed)
   }

   const badClick = () => {
     const updatedBad = feedback.bad + 1
     const newFeed = {
       ...feedback,
       bad: updatedBad,
       total: updatedBad + feedback.neutral + feedback.good
     }
     setFeedback(newFeed)
   }

  return (
    <div>

      <h1> give feedback </h1>

      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad'/>

      <h1> statistics </h1>
      
     <pre> 
      good {feedback.good} {'\n'}
      neutral {feedback.neutral} {'\n'}
      bad {feedback.bad} {'\n'}
      all {feedback.total} 
      </pre>

    </div>
  )
}

export default App