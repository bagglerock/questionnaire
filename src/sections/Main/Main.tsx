import { shuffle } from 'lodash';
import React from 'react';
import { Answers } from 'sections/Main/Answers';
import { Question } from 'sections/Main/Question';
import { questionsRepository } from 'services/QuestionRepository';
import { useGame } from './useGame';

export const Main: React.FC = () => {
  const questions = questionsRepository.get();

  const { questionNumber, handleClick } = useGame(questions);

  const shuffledQuestions = shuffle(questions);

  const question = shuffledQuestions[questionNumber];

  return (
    <div className="main">
      <div className="question-wrapper">
        <Question question={question.question} />
      </div>
      <div className="answer-wrapper">
        <Answers answers={question.answers} handleClick={handleClick} />
      </div>
    </div>
  );
};
