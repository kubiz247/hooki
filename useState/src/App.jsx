import React, { useState } from "react";
import './App.css';

function App() {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const correctAnswer = "nie";

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerShown(true);
  };

  return (
    <div className="caly">
      <h1>Quiz</h1>
      <p>Czy HTML to język programowania?</p>
      <div>
        <button onClick={() => handleAnswerClick('tak')}>Tak</button>
        <button onClick={() => handleAnswerClick('nie')}>Nie</button>
      </div>
      {isAnswerShown && (
        <h2>
          {selectedAnswer === correctAnswer ? 'Dobrze' : 'Źle'}
        </h2>
      )}
    </div>
  );
}

export default App;
