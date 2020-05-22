import { data } from 'services/data';

class QuestionsRepository {
  get() {
    return data;
  }
}

export const questionsRepository = new QuestionsRepository();
