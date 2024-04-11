import PropTypes from "prop-types";
import React from "react";

export const Question = React.memo(function Question({ questionExpression, enteredAnswer, setEnteredAnswer, onNextClick }) {
  return <div className="question margin-top-12">
    <div className="question-expression">{questionExpression} =</div>&nbsp;
    <input type="number" value={enteredAnswer? enteredAnswer : ""} onChange={e => setEnteredAnswer(e.target.value)} />&nbsp;
    <button onClick={() => onNextClick()}>Next</button>
  </div>
})

Question.propTypes = {
  questionExpression: PropTypes.string, 
  enteredAnswer: PropTypes.string, 
  setEnteredAnswer: PropTypes.func, 
  onNextClick: PropTypes.func
}