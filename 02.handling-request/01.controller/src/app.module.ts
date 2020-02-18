import { Hello3Controller } from './hello3.controller';
import { Module } from '@nestjs/common';
import { Hello } from './hello.controller';
import { AppController } from './app.controller';
import { Hello2Controller } from './hello2.controller';

@Module({
  imports: [],
  controllers: [
    Hello3Controller, 
    AppController,
    Hello,
    Hello2Controller
  ],
  providers: [],
})
export class AppModule {}
