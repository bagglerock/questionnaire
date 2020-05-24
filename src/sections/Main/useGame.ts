import { find } from 'lodash';
import { useEffect, useState } from 'react';
import { Answer } from 'sections/Main/models/Answer';
import { Question } from 'sections/Main/models/Question';
import { questionsRepository } from 'services/QuestionRepository';

export const useGame = () => {
  const [questions, setQuestions] = useState([new Question()]);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const { answers } = questions[currentQuestionId];

  const correctAnswer = (find(answers, (a: any) => a.status) as Answer) || new Answer(); // not sure if this catches a bad value

  useEffect(() => {
    if (currentQuestionId === questions.length - 1) {
      setGameIsOn(false);

      return;
    }
  }, [currentQuestionId, questions]);

  const startGame = () => {
    setQuestions(questionsRepository.get());
    setCurrentQuestionId(0);
    setGameIsOn(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent;

    if (choice === correctAnswer.choice) {
      setCurrentQuestionId(currentQuestionId + 1);

      return;
    }

    console.log('choose again...');
  };

  return {
    gameIsOn,
    currentQuestionId,
    startGame,
    handleClick,
    questions,
  };
};
