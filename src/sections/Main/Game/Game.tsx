import React from 'react';
import { Button } from 'react-bootstrap';
import { Answers } from 'sections/Main/Game/sections/Answers';
import { Question } from 'sections/Main/Game/sections/Question';
import { useGame } from 'sections/Main/useGame';

export const Game: React.FC = () => {
  const { handleClick, gameIsOn, init, question, message, countdown, disableAnswers, score } = useGame();

  if (!gameIsOn) {
    return (
      <div className="game start-page">
        <Button onClick={init}>Start Game</Button>
        <h2 className="mt-5">Your last score was: {score}</h2>
      </div>
    );
  }

  return (
    <div className="game">
      <div className="question-wrapper">
        <Question question={question.question} />
      </div>
      <div className="message-wrapper">
        <CountdownTimer countdown={countdown} />
      </div>
      <div className="message-wrapper">
        <Message message={message} />
      </div>
      <div className="answer-wrapper">
        <Answers answers={question.answers} handleClick={handleClick} disableAnswers={disableAnswers} />
      </div>
    </div>
  );
};

const Message: React.FC<{ message: string }> = ({ message }) => (
  <>
    <h3>{message}</h3>
  </>
);

const CountdownTimer: React.FC<{ countdown: number | null }> = ({ countdown }) => <>{countdown ? <h3>{countdown}</h3> : ''}</>;
