import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/shit')
  getShit(): string {
    return this.appService.getShit();
  }

  @Get('/data')
  getData(): string {
    return this.appService.getData();
  }
}
