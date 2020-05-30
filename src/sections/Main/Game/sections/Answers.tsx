import { shuffle } from 'lodash';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Answers: React.FC<AnswerProps> = ({ answers, handleClick }) => {
  const shuffledAnswers = shuffle(answers) || [];

  return (
    <>
      {shuffledAnswers.map(answer => (
        <Button key={answer} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>
          {answer}
        </Button>
      ))}
    </>
  );
};

interface AnswerProps {
  answers: any;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
