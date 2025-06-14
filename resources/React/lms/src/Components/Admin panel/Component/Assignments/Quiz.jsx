import React, { useState } from 'react';
import axios from 'axios';

import './Quiz.scss';
import Breadcumb from '../Breadcumb';

function Quiz({ questions = [], fetchQuestions }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [order, setOrder] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState('add'); 

  const breadcrumbItems = [
    { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
    { label: 'Quiz Management' },
  ];

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOptionField = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const removeOptionField = (index) => {
    if (options.length > 2) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
      if (correctAnswer === options[index]) {
        setCorrectAnswer('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
      question, 
      options, 
      correct_answer: correctAnswer, 
      order: parseInt(order) || 0 
    };
    
    try {
      await axios.post('http://localhost:8000/api/questions', data);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
       
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');
        setOrder('');
        if (fetchQuestions) fetchQuestions();
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="quiz-management-container">
      <div className="header-section">
        <h3 className="page-title">Quiz Management</h3>
        <Breadcumb items={breadcrumbItems} />
      </div>

      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          Add Question
        </button>
        <button 
          className={`tab-button ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View Questions
        </button>
      </div>

      {activeTab === 'add' ? (
        <div className="quiz-form-container">
          <form onSubmit={handleSubmit} className="modern-quiz-form  max-w-xl">
        
            
            <div className="form-group">
              <label>Question Text</label>
              <textarea
                placeholder="Enter your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label>Options</label>
              {options.map((option, index) => (
                <div key={index} className="option-input-group">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="remove-option"
                    onClick={() => removeOptionField(index)}
                    disabled={options.length <= 2}
                  >
                    ×
                  </button>
                </div>
              ))}
              {options.length < 6 && (
                <button 
                  type="button" 
                  className="add-option-button"
                  onClick={addOptionField}
                >
                  + Add Option
                </button>
              )}
            </div>

            <div className="form-group">
              <label>Correct Answer</label>
              <select
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                required
              >
                <option value="">Select correct answer</option>
                {options.map((option, index) => (
                  option && (
                    <option key={index} value={option}>
                      Option {index + 1}: {option}
                    </option>
                  )
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Question Order</label>
              <input
                type="number"
                placeholder="Order (optional)"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                min="0"
              />
            </div>

            <button type="submit" className="submit-button">
              Save Question
            </button>

            {showToast && (
              <div className="toast-success">
                <svg className="toast-icon" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span className="font-medium">Success!</span> Question added successfully.
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="questions-list-container">
          <h2 className="list-title">Existing Questions</h2>
          {questions.length > 0 ? (
            <div className="questions-grid">
              {questions.map((q, index) => (
                <div key={index} className="question-card">
                  <div className="question-header">
                    <span className="order-badge">#{q.order || index + 1}</span>
                    <h3>{q.question}</h3>
                  </div>
                  <ul className="options-list">
                    {q.options.map((option, optIndex) => (
                      <li 
                        key={optIndex} 
                        className={option === q.correct_answer ? 'correct' : ''}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-questions">
              <p>No questions available. Add some questions to get started.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;