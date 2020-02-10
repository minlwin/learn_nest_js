import { HelloController } from './controller/hello.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
        HelloController, ],
  providers: [],
})
export class AppModule {}
