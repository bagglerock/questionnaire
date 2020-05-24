import React from 'react';
import { Button } from 'react-bootstrap';
import { Answers } from 'sections/Main/Game/sections/Answers';
import { Question } from 'sections/Main/Game/sections/Question';
import { useGame } from 'sections/Main/useGame';

export const Game: React.FC = () => {
  const { currentQuestionId, handleClick, gameIsOn, startGame, questions } = useGame();

  const currentQuestion = questions[currentQuestionId];

  if (!gameIsOn) {
    return (
      <div className="start-menu">
        <Button onClick={startGame}>Start Game</Button>
      </div>
    );
  }

  return (
    <>
      <div className="question-wrapper">
        <Question question={currentQuestion.question} />
      </div>
      <div className="answer-wrapper">
        <Answers answers={currentQuestion.answers} handleClick={handleClick} />
      </div>
    </>
  );
};
