import { Module } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { ChatgptController } from './chatgpt.controller';

@Module({
  controllers: [ChatgptController],
  providers: [ChatgptService],
})
export class ChatgptModule {}
