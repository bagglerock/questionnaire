import { questionsRepository } from 'services/QuestionRepository';
import { Question } from './Question';

export class Game {
  private static instance: Game;

  questions: Question[];
  questionPosition: number;

  private constructor() {
    this.questions = [new Question()];
    this.questionPosition = 0;
  }

  static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }

    return Game.instance;
  }

  async initialize() {
    this.questionPosition = 0;

    await this.fetchQuestions();
  }

  getQuestions() {
    return;
  }

  advanceQuestion(): void {
    this.questionPosition++;
  }

  getQuestion(): Question {
    return this.questions[this.questionPosition];
  }

  getQuestionsCount(): number {
    return this.questions.length;
  }

  getQuestionsPosition(): number {
    return this.questionPosition;
  }

  private async fetchQuestions() {
    const questions = await questionsRepository.get();

    this.questions = questions;
  }
}
