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
    const stream = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [...this.history, { role: 'user', content: prompt }],
      stream: true,
    });
    let response = '';
    for await (const part of stream) {
      if (part.choices[0].finish_reason === 'stop') break;
      response += part.choices[0].delta.content;
    }
    this.history.push({ role: 'user', content: prompt });
    this.history.push({ role: 'assistant', content: response });

    return response;
  }

  async getHistory() {
    return this.history;
  }
}
