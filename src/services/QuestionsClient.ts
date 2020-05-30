import { AxiosInstance, default as axios } from 'axios';

const TRIVIA_API_BASE_URL = 'https://opentdb.com';

class QuestionsClient {
  httpClient: QuestionsClientInterface;

  constructor() {
    this.httpClient = axios.create({
      baseURL: TRIVIA_API_BASE_URL,
    });
  }

  async get(url: string): Promise<any> {
    return this.httpClient.get(url);
  }
}

type QuestionsClientInterface = AxiosInstance;

export const questionsClient = new QuestionsClient();
