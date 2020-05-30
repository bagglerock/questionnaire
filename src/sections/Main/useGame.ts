import { useEffect, useState } from 'react';
import { Question } from 'sections/Main/models/Question';
import { questionsRepository } from 'services/QuestionRepository';

export const useGame = () => {
  const [questions, setQuestions] = useState([new Question()]);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentQuestionId === questions.length - 1) {
      setGameIsOn(false);

      return;
    }
  }, [currentQuestionId, questions]);

  const startGame = async () => {
    const questions = await questionsRepository.get();

    setQuestions(questions);
    setCurrentQuestionId(0);
    setGameIsOn(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent || '';

    setMessage(choice);
  };

  return {
    gameIsOn,
    currentQuestionId,
    startGame,
    handleClick,
    questions,
    message,
  };
};
