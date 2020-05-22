import React from 'react';
import { Answers } from 'sections/Main/Answers';
import { Question } from 'sections/Main/Question';
import { questionsRepository } from 'services/QuestionRepository';

export const Main: React.FC = () => {
  const questions = questionsRepository.get();

  const question = questions[0];

  return (
    <div className="main">
      <div className="question-wrapper">
        <Question question={question.question} />
      </div>
      <div className="answer-wrapper">
        <Answers answers={question.answers} />
      </div>
    </div>
  );
};
