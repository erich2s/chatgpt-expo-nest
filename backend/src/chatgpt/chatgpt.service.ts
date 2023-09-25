import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessage } from 'openai/resources/chat';

@Injectable()
export class ChatgptService {
  private openai: OpenAI;
  private history: ChatCompletionMessage[] = [
    { role: 'system', content: 'You are a helpful chatbot.' },
  ];
  constructor() {
    this.openai = new OpenAI({
      baseURL: 'https://api.openai-proxy.com/v1',
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createCompletion(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [...this.history, { role: 'user', content: prompt }],
    });
    this.history.push({ role: 'user', content: prompt });
    this.history.push({
      role: 'assistant',
      content: completion.choices[0].message.content,
    });

    return completion.choices[0].message;
  }

  async getHistory() {
    return this.history;
  }
  async resetHistory() {
    this.history = [{ role: 'system', content: 'You are a helpful chatbot.' }];
    return { length: this.history.length };
  }
}
