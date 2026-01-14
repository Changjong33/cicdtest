import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get('/docker')
  getDocker(): string {
    return 'Hello Docker';
  }

  @Get('/cicd')
  getCicd(): string {
    return 'Hello CI/CD';
  }
}
