import PropTypes from "prop-types"
import { ResponseList } from "./ResponseList"
import { QuizHeader } from "./QuizHeader"

export const QuizComplete = (props) => {
  return <div>
    <QuizHeader numberRange={props.numberRange} perQuestionTimeInSecs={props.timeForEachQuestion} totalQuestionCount={props.totalQuestionCount} score={props.score} />
    <ResponseList correctAnswers={true} list={props.correctAnswerQuestions} />
    <ResponseList correctAnswers={false} list={props.wrongAnswerQuestions} />
  </div>
}

QuizComplete.propTypes = {
  numberRange: PropTypes.array, 
  timeForEachQuestion: PropTypes.number, 
  totalQuestionCount: PropTypes.number,
  correctAnswerQuestions: PropTypes.array,
  wrongAnswerQuestions: PropTypes.array,
  score: PropTypes.number
}