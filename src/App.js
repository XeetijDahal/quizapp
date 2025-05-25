import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import allQuestions from "./components/Questions";
import emailjs from "emailjs-com";
import "./App.css";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
  }, []);

  const handleAnswer = (index, answer) => {
    setUserAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    sendEmail();
  };

  const handleRestart = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
    setUserAnswers({});
    setSubmitted(false);
    setTestStarted(false);
    setEmail("");
  };

  const sendEmail = () => {
    const score = questions.reduce((acc, q, idx) => (
      userAnswers[idx] === q.answer ? acc + 1 : acc
    ), 0);

    const templateParams = {
      to_email: email,
      score: `${score} / ${questions.length}`,
      correctCount: score,
      wrongCount: questions.length - score
    };


    emailjs.send("service_e8l8szn", "template_fz5vb16", templateParams, "n5mEMESL29CwK8wid")
      .then(response => {
        console.log("Email sent!", response.text);
      })
      .catch(error => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <div className="App">
      <h1>🧠 Quiz App</h1>

      {!testStarted ? (
        <div>
          <p>Enter your email to begin the test:</p>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            onClick={() => setTestStarted(true)}
            disabled={!email}
          >
            Start Test
          </button>
        </div>
      ) : (
        !submitted ? (
          <Quiz
            questions={questions}
            userAnswers={userAnswers}
            onAnswer={handleAnswer}
            onSubmit={handleSubmit}
            timeLimit={300}
          />
        ) : (
          <Result
            questions={questions}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        )
      )}
    </div>
  );
}
