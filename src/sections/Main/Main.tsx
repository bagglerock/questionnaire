import React from 'react';
import { Game } from 'sections/Main/Game/Game';
import { questionsRepository } from 'services/QuestionRepository';

export const Main: React.FC = () => {
  const questions = questionsRepository.get();

  return <Game questions={questions} />;
};
