import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller()
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post('chat')
  create(@Body() body: any) {
    console.log(body);
    return this.chatgptService.createCompletion(body.prompt);
  }

  @Get('history')
  getHistory() {
    return this.chatgptService.getHistory();
  }
}
