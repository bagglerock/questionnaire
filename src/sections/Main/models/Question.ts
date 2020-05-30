export class Question {
  question: string = '';
  answers: any;

  constructor(data: Partial<Question> = {}) {
    Object.assign(this, data);
  }
}
