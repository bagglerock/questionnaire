import React from 'react';
import { Answers } from 'sections/Main/Game/sections/Answers';
import { Question } from 'sections/Main/Game/sections/Question';
import { Answer } from 'sections/Main/models/Answer';

export const Game: React.FC<GameProps> = ({ question, answers, handleClick }) => (
  <>
    <div className="question-wrapper">
      <Question question={question} />
    </div>
    <div className="answer-wrapper">
      <Answers answers={answers} handleClick={handleClick} />
    </div>
  </>
);

interface GameProps {
  question: string;
  answers: Answer[];
  handleClick: () => void;
}
