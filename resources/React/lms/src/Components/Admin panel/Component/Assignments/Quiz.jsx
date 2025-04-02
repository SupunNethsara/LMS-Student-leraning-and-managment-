import React, { useState } from 'react';
import axios from 'axios';
import Breadcumb from '../Breadcumb';
import './Quiz.scss';

function Quiz({ questions = [], fetchQuestions }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [order, setOrder] = useState('');
  const [showToast, setShowToast] = useState(false);

  const breadcumbItems = [
    { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
    { label: 'Quiz' },
  ];
  

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { question, options, correct_answer: correctAnswer, order: parseInt(order) };
    try {
      await axios.post('http://localhost:8000/api/questions', data);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div>

      <div style={{ width: '100%' }} className="flex justify-between items-center">
        <h3 style={{ fontSize: '25px', color: '#6a6b6b', fontFamily: '"Poppins", serif', }} className="m-4 font-semibold ml-5">
          Quiz Managment
        </h3>
        <Breadcumb items={breadcumbItems} />
      </div>

      <div className="quiz-form-container">

        <form onSubmit={handleSubmit}>
          <h1>Add New Question</h1>
          <div>
            <h2>Questions</h2>
         
          </div>
          <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <input
            type="number"
            placeholder="Order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <button type="submit">Add Question</button>
          {showToast && (
            <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
              <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
            </div>
          )}
        </form>
      </div>

    </div>
  );
}

export default Quiz;
