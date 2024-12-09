import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentQuiz.scss';

function StudentQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    // Fetch questions from the backend
    axios.get('http://localhost:8000/api/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAnswerClick = (option) => {
    const currentQuestion = questions[currentIndex];
    setSelectedAnswer(option);

    if (option === currentQuestion.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1); // Increment score for a correct answer
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null); // Reset selected answer
      setIsCorrect(null); // Reset correctness
    } else {
      setQuizComplete(true); // Mark quiz as complete
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container">
      {quizComplete ? (
        <div className="quiz-complete">
          <h1>Quiz Complete!</h1>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <>
          <h1 className="font-bold">Quiz App</h1>
          <hr />
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li
                key={index}
                className={`option ${
                  selectedAnswer === option
                    ? isCorrect === true
                      ? 'correct'
                      : isCorrect === false
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={isCorrect === null} // Enable only after an answer is selected
          >
            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
          <div className="index">
            {currentIndex + 1} of {questions.length} questions
          </div>
        </>
      )}
    </div>
  );
}

export default StudentQuiz;
