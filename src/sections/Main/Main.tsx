import React from 'react';
import { useGame } from 'sections/Main/Game/useGame';
import { Button } from 'react-bootstrap';
import { Game } from 'sections/Main/Game/Game';

export const Main: React.FC = () => {
  const { questionNumber, handleClick, gameIsOn, startGame, questions } = useGame();

  const question = questions[questionNumber];

  if (!gameIsOn) {
    return (
      <div className="start-menu">
        <Button onClick={startGame}>Start Game</Button>
      </div>
    );
  }

  return (
    <>
      <Game question={question.question} answers={question.answers} handleClick={handleClick} />
    </>
  );
};
