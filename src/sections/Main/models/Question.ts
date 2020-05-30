export class Question {
  question: string = '';
  answers: any[] = [];
  correctAnswer: string = '';

  constructor(data: Partial<Question> = {}) {
    Object.assign(this, data);
  }
}
