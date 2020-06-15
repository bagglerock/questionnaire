import { find } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { Game } from 'sections/Main/models/Game';

const INITIALIZATION_ERROR = 'Problem resetting game.';

const QUESTION_TIMER = 10;

export const useGame = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(QUESTION_TIMER);

  const game = Game.getInstance();

  const advanceQuestion = useCallback(() => {
    const questionPosition = game.getQuestionsPosition();

    if (questionPosition === game.getQuestionsCount() - 1) {
      setGameIsOn(false);

      return;
    }

    game.advanceQuestion();
    setCountdown(QUESTION_TIMER);
  }, [game]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (gameIsOn) {
      interval = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);

      if (countdown === 0) {
        advanceQuestion();
      }
    }

    return () => clearInterval(interval);
  }, [countdown, gameIsOn, game, advanceQuestion]);

  const init = async () => {
    try {
      await game.initialize();

      setGameIsOn(true);

      setCountdown(QUESTION_TIMER);
    } catch (e) {
      setMessage(INITIALIZATION_ERROR);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent;

    const question = game.getQuestion();

    const answer = find(question.answers, (a: any) => a === question.correctAnswer);

    if (choice !== answer) {
      setMessage('that is incorrect');

      return;
    }

    advanceQuestion();
    setMessage('');
  };

  return {
    gameIsOn,
    init,
    handleClick,
    message,
    question: game.getQuestion(),
    advanceQuestion,
    countdown,
  };
};
