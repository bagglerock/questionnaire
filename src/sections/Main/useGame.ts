import { find } from 'lodash';
import { useEffect, useState } from 'react';
import { Game } from './models/Game';

const INITIALIZATION_ERROR = 'Problem resetting game.';

export const useGame = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [message, setMessage] = useState('');

  const game = Game.getInstance();

  const question = game.getQuestion();

  useEffect(() => {
    if (game.getQuestionsPosition() > game.getQuestionsCount()) {
      setGameIsOn(false);

      return;
    }
  }, [game]);

  const init = async () => {
    try {
      await game.initialize();

      setGameIsOn(true);
    } catch (e) {
      setMessage(INITIALIZATION_ERROR);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent;

    const answer = find(question.answers, (a: any) => a === question.correctAnswer);

    if (choice === answer) {
      game.advanceQuestion();

      setMessage('');
      return;
    }

    setMessage('that is incorrect');
  };

  return {
    gameIsOn,
    init,
    handleClick,
    message,
    question,
  };
};

// maybe make the Game class and this hook can refer to that class

//  if the game class can be made, all game logic can be here in this hook.  that would separate the game object from the game logic
