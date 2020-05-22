export class Answer {
  choice: string = '';
  status: boolean = false;

  constructor(data: Partial<Answer> = {}) {
    Object.assign(this, data);
  }
}
