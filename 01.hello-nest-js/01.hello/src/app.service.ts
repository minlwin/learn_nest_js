import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      type: 'Type Script',
      framework: 'Nest JS',
      message: 'Hello From Nest JS'
    }
  }
}
