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

  const init = async () => {
    const questions = await questionsRepository.get();

    setQuestions(questions);
    setCurrentQuestionId(0);
    setGameIsOn(true);
  };

  const advanceQuestion = () => {
    setCurrentQuestionId(currentQuestionId + 1);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const choice = e.currentTarget.textContent;

    if (choice === answer) {
      advanceQuestion();

      setMessage('');
      return;
    }

    setMessage('that is incorrect');
  };

  return {
    gameIsOn,
    currentQuestionId,
    init,
    handleClick,
    questions,
    message,
    advanceQuestion,
  };
};

// maybe make the Game class and this hook can refer to that class

//  if the game class can be made, all game logic can be here in this hook.  that would separate the game object from the game logic
