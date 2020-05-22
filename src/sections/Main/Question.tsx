import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Question: React.FC<QuestionProps> = ({ question }) => (
  <>
    <Jumbotron>
      <h2>{question}</h2>
    </Jumbotron>
  </>
);

interface QuestionProps {
  question: string;
}
