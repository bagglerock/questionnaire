import React from 'react';
import { Button } from 'react-bootstrap';
import { Answer } from 'sections/Main/models/Answer';
import { shuffle } from 'lodash';

export const Answers: React.FC<AnswerProps> = ({ answers, handleClick }) => {
  const shuffledAnswers = shuffle(answers) || [];

  return (
    <>
      {shuffledAnswers.map(answer => (
        <Button key={answer.choice} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>
          {answer.choice}
        </Button>
      ))}
    </>
  );
};

interface AnswerProps {
  answers: Answer[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
