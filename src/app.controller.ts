import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/createAccount')
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.appService.createAccount(createAccountDto);
  }

  @Get('/findAllAccounts')
  findAllAccounts() {
    return this.appService.findAllAccounts();
  }

  @Get('/findAccount/:accountNumber')
  findAccount(@Param('accountNumber') accountNumber: string) {
    return this.appService.findAccount(accountNumber);
  }

  @Patch('/updateAccount')
  updateAccount(@Body() updateAccountDto: UpdateAccountDto) {
    console.log(updateAccountDto);
    return this.appService.updateAccount(updateAccountDto);
  }

  @Delete('/deleteAccount/:id')
  deleteAccount(@Param('id') id: string) {
    return this.appService.deleteAccount(id);
  }
}
