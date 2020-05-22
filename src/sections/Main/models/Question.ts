import { Answer } from 'sections/Main/models/Answer';

export class Question {
  question: string = '';
  answers: Answer[] = [];

  constructor(data: Partial<Question> = {}) {
    Object.assign(this, data);
  }
}
