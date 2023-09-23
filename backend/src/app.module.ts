import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [ChatgptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
