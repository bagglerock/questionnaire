import { useState } from 'react';

export const useGame = (questions: any) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const advanceQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return {
    advanceQuestion,
    questionNumber,
  };
};
