import React from 'react';
import { Button } from 'react-bootstrap';
import { GameView } from 'sections/Main/Game/GameView';
import { useGame } from 'sections/Main/Game/useGame';
import { Question } from 'sections/Main/models/Question';

export const Game: React.FC<GameProps> = ({ questions }) => {
  const { questionNumber, handleClick, gameIsOn, startGame } = useGame(questions);

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
      <GameView question={question.question} answers={question.answers} handleClick={handleClick} />
    </>
  );
};

interface GameProps {
  questions: Question[];
}
