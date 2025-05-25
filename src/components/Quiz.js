import React, { useState, useEffect } from "react";

export default function Quiz({ questions, userAnswers, onAnswer, onSubmit, timeLimit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onSubmit]);

  const goToPrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-container">
      <div className="timer">⏳<p>Time Left: {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:{String(secondsLeft % 60).padStart(2, '0')}</p>
</div>

      <div className="question">
        <h3>
          Q{currentQuestion + 1}: {questions[currentQuestion].question}
        </h3>
        {questions[currentQuestion].options.map((option, i) => (
          <div key={i} className="option">
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value={option}
                checked={userAnswers[currentQuestion] === option}
                onChange={() => onAnswer(currentQuestion, option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={goToPrevious} disabled={currentQuestion === 0}>
          ⬅️ Previous
        </button>
        <button onClick={goToNext} disabled={currentQuestion === questions.length - 1}>
          Next ➡️
        </button>
      </div>

      <div className="navigation">
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentQuestion(idx)}
            className={currentQuestion === idx ? "active" : ""}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <button className="submit-btn" onClick={onSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}
