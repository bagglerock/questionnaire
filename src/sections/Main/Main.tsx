import React from 'react';
import { Answer } from 'sections/Main/Answer';
import { Question } from 'sections/Main/Question';

export const Main: React.FC = () => {
  return (
    <>
      <div className="question-wrapper">
        <Question />
      </div>
      <div className="answer-wrapper">
        <Answer />
      </div>
    </>
  );
};
