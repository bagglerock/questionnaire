import { AllHtmlEntities } from 'html-entities';
import { concat, shuffle } from 'lodash';
import { Question } from 'sections/Main/models/Question';
import { questionsClient } from 'services/QuestionsClient';
// import mock from './mockResponse.json';

class QuestionsRepository {
  async get(): Promise<any> {
    const response = await questionsClient.get('/api.php?amount=10');
    // const response = mock;

    const results = response.data.results;

    const questions = mapQuestions(results);

    return shuffle(questions);
  }
}

export const questionsRepository = new QuestionsRepository();

const mapQuestions = (data: any): Question[] => {
  const { decode } = AllHtmlEntities;

  const questions = data.map((result: any) => {
    const answers = concat(result.incorrect_answers, result.correct_answer);

    const decodedAnswers = answers.map(answer => decode(answer));

    if (decodedAnswers[0] !== 'True') {
      const shuffledAnswers = shuffle(decodedAnswers) || [];

      return new Question({
        question: decode(result.question),
        correctAnswer: decode(result.correct_answer),
        answers: shuffledAnswers,
      });
    }

    return new Question({
      question: decode(result.question),
      correctAnswer: decode(result.correct_answer),
      answers: decodedAnswers,
    });
  });

  return questions;
};
