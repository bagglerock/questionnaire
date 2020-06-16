import React from 'react';
import { Button } from 'react-bootstrap';

export const Answers: React.FC<AnswerProps> = ({ answers, handleClick, disableAnswers }) => {
  if (disableAnswers) {
    return <></>;
  }

  return (
    <>
      {answers.map(answer => (
        <Button key={answer} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>
          {answer}
        </Button>
      ))}
    </>
  );
};

interface AnswerProps {
  answers: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disableAnswers: boolean;
}
