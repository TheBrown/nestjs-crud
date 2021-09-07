import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getShit(): string {
    return '<h1>This is 💩</h1>';
  }

  getData(): string {
    return 'some data';
  }
}
