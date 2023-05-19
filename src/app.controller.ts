import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/createAccount')
  async sendMessage(@Body() createAccountDto: CreateAccountDto) {
    return this.appService.sendMessage(createAccountDto);
  }
}
