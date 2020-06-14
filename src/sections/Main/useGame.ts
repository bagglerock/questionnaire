import { find } from 'lodash';
import { useState } from 'react';
import { Game } from 'sections/Main/models/Game';

const INITIALIZATION_ERROR = 'Problem resetting game.';

export const useGame = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [message, setMessage] = useState('');

  const game = Game.getInstance();

  const question = game.getQuestion();

  const questionPosition = game.getQuestionsPosition();

  const init = async () => {
    try {
      await game.initialize();

      setGameIsOn(true);
    } catch (e) {
      setMessage(INITIALIZATION_ERROR);
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent;

    const answer = find(question.answers, (a: any) => a === question.correctAnswer);

    if (choice !== answer) {
      setMessage('that is incorrect');

      return;
    }

    advanceQuestion();

    clearMessage();
  };

  const advanceQuestion = () => {
    if (questionPosition === game.getQuestionsCount() - 1) {
      setGameIsOn(false);

      return;
    }

    game.advanceQuestion();
  };

  return {
    gameIsOn,
    init,
    handleClick,
    message,
    question,
    advanceQuestion,
    questionPosition,
  };
};
