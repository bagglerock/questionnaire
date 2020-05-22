import { useState } from 'react';
import { Question } from 'sections/Main/models/Question';
import { questionsRepository } from 'services/QuestionRepository';

export const useGame = () => {
  const [questions, setQuestions] = useState([new Question()]);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const startGame = () => {
    setQuestions(questionsRepository.get());
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
    questions,
  };
};
