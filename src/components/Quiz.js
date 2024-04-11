import { useCallback, useEffect, useRef, useState } from "react"
import { QuizHeader } from "./QuizHeader"
import { Question } from "./Question";
import { QuizModel } from "../models/QuizModel";
import { QuestionHeader } from "./QuestionHeader";
import { QuizComplete } from "./QuizComplete";
import PropTypes from "prop-types"

export const Quiz = (props) => {
  const [score, setScore] = useState(0);
  const [quiz,] = useState(new QuizModel(props.numberRange, props.operators , props.totalQuestionCount));
  const [currentQuestionIndex, setCurrrentQuestionIndex] = useState(0);
  const [enteredAnswer, setEnteredAnswer] = useState("");

  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    quiz.startQuiz();
    setCurrrentQuestionIndex(quiz.getCurrentIndex());
  }, []);
  

  const onNextClick = useCallback(function onNextClick(timedOut = false) {
    setEnteredAnswer(answer => {
      if (quiz.isResponseForCurrentQuestionCorrect(answer, timedOut)) {
        setScore(s => s+1);
      }
      return "";
    });
    quiz.nextQuestion();
    setCurrrentQuestionIndex(quiz.getCurrentIndex());
  }, []);

  let body;
  
  if (quiz.isQuizComplete()) {
    const correctList = quiz.questions.filter(question => question.isCorrect);
    const wrongList = quiz.questions.filter(question => !question.isCorrect);

    body = <QuizComplete numberRange={props.numberRange} timeForEachQuestion={props.timeForEachQuestion} totalQuestionCount={props.totalQuestionCount} correctAnswerQuestions={correctList} wrongAnswerQuestions={wrongList} score={score} />

  } else {
    const questionComponent = quiz.getCurrentQuestion() ? <Question 
      questionExpression={quiz.getCurrentQuestion().getStringExpression()} 
      enteredAnswer={enteredAnswer}
      setEnteredAnswer={setEnteredAnswer}
      onNextClick={onNextClick}
      /> : null
    
      body = <div>
        <QuizHeader numberRange={props.numberRange} perQuestionTimeInSecs={props.timeForEachQuestion} totalQuestionCount={props.totalQuestionCount} score={score} />
        <QuestionHeader
          perQuestionTimeInSecs={props.timeForEachQuestion}
          questionNumber={currentQuestionIndex}
          onCountDownEnd={onNextClick}
          />
        { questionComponent }
      </div>
  }
  
  return <div className="quizContainer">
    {body}
  </div>
}

Quiz.propTypes = {
  numberRange: PropTypes.array, 
  totalQuestionCount: PropTypes.number, 
  timeForEachQuestion: PropTypes.number, 
  operators: PropTypes.array
}