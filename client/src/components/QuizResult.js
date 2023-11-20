import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        app Score:{props.score}<br/>
        web Score:{props.wrongCount}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult