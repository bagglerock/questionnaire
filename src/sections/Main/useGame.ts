import { useState } from 'react';

export const useGame = (questions: any) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return {
    questionNumber,
    handleClick,
  };
};
