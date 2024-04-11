import { useState } from "react";
import { Quiz } from "./components/Quiz";
import { QuizCreationForm } from "./components/QuizCreationForm";


function App() {
  const [quizDataList, setQuizDataList] = useState([]);
  
  function createQuiz(formData) {
      setQuizDataList(list => [...list, formData])
  }
  
  const quizList = quizDataList.map(quizData => {
    return <Quiz 
      key={quizData.id} 
      numberRange={[quizData.minLimit,quizData.maxLimit]} 
      totalQuestionCount={quizData.numberOfQuestions} 
      timeForEachQuestion={quizData.timer} 
      operators={quizData.operators}
      />
  })

  return <div className="quiz-root">
    <QuizCreationForm createQuiz={createQuiz} />
    <div className="quiz-list-container">
      {quizList}
    </div>
  </div>
}

export default App