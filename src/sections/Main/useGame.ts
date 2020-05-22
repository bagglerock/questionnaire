import { useState } from 'react';

export const useGame = (questions: any) => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const startGame = () => {
    setQuestionNumber(0);
    setGameIsOn(true);
  };

  const handleClick = () => {
    if (questionNumber >= questions.length - 1) {
      setGameIsOn(false);

      return;
    }

    setQuestionNumber(questionNumber + 1);
  };

  return {
    gameIsOn,
    questionNumber,
    startGame,
    handleClick,
  };
};
