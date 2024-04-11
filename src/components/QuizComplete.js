import PropTypes from "prop-types"
import { ResponseList } from "./ResponseList"
import { QuizHeader } from "./QuizHeader"

export const QuizComplete = (props) => {
  return <div>
    <QuizHeader score={props.score} />
    <ResponseList correctAnswers={true} list={props.correctAnswerQuestions} />
    <ResponseList correctAnswers={false} list={props.wrongAnswerQuestions} />
  </div>
}

QuizComplete.propTypes = {
  correctAnswerQuestions: PropTypes.array,
  wrongAnswerQuestions: PropTypes.array,
  score: PropTypes.number
}