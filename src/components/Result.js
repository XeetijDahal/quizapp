import React from "react";
import "../App.css"; // ensure styling is in App.css

export default function Result({ questions, userAnswers, onRestart }) {
  const score = questions.reduce((acc, q, idx) => {
    return userAnswers[idx] === q.answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="result">
      <h2>📊 Result</h2>
      <p>Your score: {score} / {questions.length}</p>

      {questions.map((q, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={idx} className="result-question">
            <h4>Q{idx + 1}: {q.question}</h4>

            {userAnswer ? (
              <p className={isCorrect ? "correct" : "wrong"}>
                Your answer: {userAnswer}
              </p>
            ) : (
              <p className="unanswered">Not Answered</p>
            )}

            {!isCorrect && (
              <p className="correct">Correct answer: {q.answer}</p>
            )}
          </div>
        );
      })}

      <button className="submit-btn" onClick={onRestart}>🔁 Start Again</button>
    </div>
  );
}
