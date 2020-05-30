import { concat, shuffle } from 'lodash';
import { Question } from 'sections/Main/models/Question';
// import { questionsClient } from './QuestionsClient';
import mock from './mockResponse.json';

class QuestionsRepository {
  async get(): Promise<any> {
    // const response = await questionsClient.get('/api.php?amount=10');
    const response = mock;

    const results = response.data.results;

    const questions = mapQuestions(results);

    return shuffle(questions);
  }
}

export const questionsRepository = new QuestionsRepository();

const mapQuestions = (data: any): Question[] => {
  const questions = data.map((result: any) => {
    const answers = concat(result.incorrect_answers, result.correct_answer);

    return new Question({
      question: result.question,
      answers,
    });
  });

  return questions;
};
