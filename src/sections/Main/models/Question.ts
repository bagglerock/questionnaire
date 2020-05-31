export class Question {
  question: string = '';
  answers: string[] = [];
  correctAnswer: string = '';

  constructor(data: Partial<Question> = {}) {
    Object.assign(this, data);
  }
}
