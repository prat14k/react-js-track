import { useCallback, useEffect, useRef, useState } from "react"
import { QuizHeader } from "./components/QuizHeader"
import { quizConfig } from "./config/quizConfig"
import { Question } from "./components/Question";
import { Quiz } from "./models/Quiz";
import { QuestionHeader } from "./components/QuestionHeader";
import { QuizComplete } from "./components/QuizComplete";


function App() {
  const [score, setScore] = useState(0);
  const [quiz,] = useState(new Quiz(quizConfig.numberRange, quizConfig.operatrs ,quizConfig.totalQuestionCount));
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

    body = <QuizComplete correctAnswerQuestions={correctList} wrongAnswerQuestions={wrongList} score={score} />

  } else {
    const questionComponent = quiz.getCurrentQuestion() ? <Question 
      questionExpression={quiz.getCurrentQuestion().getStringExpression()} 
      enteredAnswer={enteredAnswer}
      setEnteredAnswer={setEnteredAnswer}
      onNextClick={onNextClick}
      /> : null
    
      body = <div>
        <QuizHeader score={score} />
        <QuestionHeader
          questionNumber={currentQuestionIndex}
          onCountDownEnd={onNextClick}
          />
        { questionComponent }
      </div>
  }
  
  return body;
}

export default App