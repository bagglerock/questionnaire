import { find } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { Game } from 'sections/Main/models/Game';

const INITIALIZATION_ERROR = 'Problem resetting game.';

const QUESTION_TIMER = 10;

export const useGame = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState<number | null>(QUESTION_TIMER);
  const [disableAnswers, setDisableAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const game = Game.getInstance();

  const advanceQuestion = useCallback(() => {
    const questionPosition = game.getQuestionsPosition();

    if (questionPosition === game.getQuestionsCount() - 1) {
      setGameIsOn(false);

      return;
    }

    game.advanceQuestion();
    setDisableAnswers(false);
    setCountdown(QUESTION_TIMER);
  }, [game]);

  useEffect(() => {
    const showAnswer = () => {
      const answer = game.getQuestion().correctAnswer;

      setMessage('The answer is: ' + answer);
      setDisableAnswers(true);

      setTimeout(() => {
        advanceQuestion();
        setMessage('');
      }, 5000);
    };

    let interval: NodeJS.Timeout;

    if (gameIsOn) {
      interval = setInterval(() => {
        setCountdown(countdown => {
          if (countdown != null) {
            return countdown - 1;
          }

          return null;
        });
      }, 1000);

      if (countdown === 0) {
        clearInterval(interval);

        setCountdown(null);

        showAnswer();
      }
    }

    return () => clearInterval(interval);
  }, [countdown, gameIsOn, game, advanceQuestion]);

  const init = async () => {
    try {
      await game.initialize();

      setGameIsOn(true);

      setScore(0);
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

    setScore(score + (countdown || 0));
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
    disableAnswers,
    score,
  };
};
