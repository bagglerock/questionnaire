import { shuffle } from 'lodash';
import { Question } from 'sections/Main/models/Question';
import { data } from 'services/data';

class QuestionsRepository {
  get() {
    const questions = data.map(question => {
      return new Question(question);
    });

    return shuffle(questions);
  }
}

export const questionsRepository = new QuestionsRepository();
