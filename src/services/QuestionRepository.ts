import { shuffle } from 'lodash';
import { Question } from 'sections/Main/models/Question';
import { data } from 'services/data';
import { questionsClient } from './QuestionsClient';

class QuestionsRepository {
  async get(): Promise<any> {
    const response = await questionsClient.get('/api.php?amount=10');

    console.log(response);

    const questions = data.map(question => {
      return new Question(question);
    });

    return shuffle(questions);
  }
}

export const questionsRepository = new QuestionsRepository();
