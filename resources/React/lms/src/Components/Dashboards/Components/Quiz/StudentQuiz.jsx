import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [timerActive, setTimerActive] = useState(true);


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

 
  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      setQuizComplete(true);
    }
    return () => clearInterval(interval);
  }, [timeLeft, timerActive]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions');
        setQuestions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;
    
    const currentQuestion = questions[currentIndex];
    setSelectedAnswer(option);

    if (option === currentQuestion.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setTimerActive(false);
      setQuizComplete(true);
    }
  };

  const toggleFlagQuestion = () => {
    if (flaggedQuestions.includes(currentIndex)) {
      setFlaggedQuestions(flaggedQuestions.filter(i => i !== currentIndex));
    } else {
      setFlaggedQuestions([...flaggedQuestions, currentIndex]);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (timeLeft === 0 || quizComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            {timeLeft === 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {timeLeft === 0 ? 'Time Expired!' : 'Quiz Complete!'}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your Score: <span className="font-bold">{score}</span> / {questions.length}
          </p>
          <div className="mb-8">
            <p className="text-gray-600">
              {score === questions.length ? 'Perfect score! 🎉' : 
               score >= questions.length * 0.7 ? 'Well done!' : 
               'Keep practicing!'}
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Quiz List
            </button>
            <div className={`flex items-center px-4 py-2 rounded-full ${
              timeLeft < 60 ? 'bg-red-50 text-red-700' : 'bg-indigo-50 text-indigo-700'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Time left: {formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Question {currentIndex + 1}</h2>
            {selectedAnswer ? (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                Not yet answered
              </span>
            )}
            <span className="text-gray-500 text-sm">
              (2.00 points)
            </span>
          </div>

          <div className="flex items-center mb-8">
            <input 
              type="checkbox" 
              id="flag" 
              checked={flaggedQuestions.includes(currentIndex)}
              onChange={toggleFlagQuestion}
              className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="flag" className="ml-2 text-gray-600 hover:text-gray-800 cursor-pointer">
              {flaggedQuestions.includes(currentIndex) ? 'Question flagged' : 'Flag this question'}
            </label>
          </div>

          <p className="text-xl font-medium text-gray-800 mb-8">
            {currentQuestion.question}
          </p>

          <div className="space-y-4 mb-10">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                onClick={() => !selectedAnswer && handleAnswerClick(option)}
                className={`flex items-center p-4 border rounded-lg transition-colors cursor-pointer ${
                  !selectedAnswer 
                    ? 'border-gray-200 hover:border-indigo-300'
                    : option === currentQuestion.correct_answer
                      ? 'border-green-300 bg-green-50'
                      : selectedAnswer === option
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-200'
                } ${
                  !selectedAnswer ? 'hover:bg-gray-50' : ''
                }`}
              >
                <div className={`flex items-center justify-center h-5 w-5 rounded-full border mr-3 ${
                  !selectedAnswer
                    ? 'border-gray-300'
                    : option === currentQuestion.correct_answer
                      ? 'border-green-500 bg-green-500'
                      : selectedAnswer === option
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                }`}>
                  {!selectedAnswer ? null : option === currentQuestion.correct_answer ? (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : selectedAnswer === option ? (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : null}
                </div>
                <label className="block text-gray-700 text-lg cursor-pointer">
                  {String.fromCharCode(97 + index)}. {option}
                </label>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-6">
            <div className="text-gray-500">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`px-6 py-3 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                selectedAnswer
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentQuiz;