import { find } from 'lodash';
import { useEffect, useState } from 'react';
import { Question } from 'sections/Main/models/Question';
import { questionsRepository } from 'services/QuestionRepository';

export const useGame = () => {
  const [questions, setQuestions] = useState([new Question()]);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [message, setMessage] = useState('');

  const { answers, correctAnswer } = questions[currentQuestionId];

  const answer = find(answers, (a: any) => a === correctAnswer); // not sure if this catches a bad value

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
    const choice = e.currentTarget.textContent;

    if (choice === answer) {
      setCurrentQuestionId(currentQuestionId + 1);

      setMessage('correct');
      return;
    }

    setMessage('that is incorrect');
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
