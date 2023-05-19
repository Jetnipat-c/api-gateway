import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AppService {
  constructor(@Inject('ACCOUNT_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createAccount(createAccountDto: CreateAccountDto): Observable<any> {
    const pattern = { cmd: 'createAccount' };
    const payload = createAccountDto;
    return this.client.send<string>(pattern, payload);
  }

  findAllAccounts(): Observable<any> {
    const pattern = { cmd: 'findAllAccounts' };
    const payload = {};
    return this.client.send<string>(pattern, payload);
  }
  findAccount(accountNumber: string): Observable<any> {
    const pattern = { cmd: 'findAccount' };
    const payload = { accountNumber: accountNumber };
    return this.client.send<string>(pattern, payload);
  }

  updateAccount(updateAccountDto: UpdateAccountDto): Observable<any> {
    const pattern = { cmd: 'updateAccount' };
    const payload = updateAccountDto;
    return this.client.send<string>(pattern, payload);
  }

  deleteAccount(id: string): Observable<any> {
    const pattern = { cmd: 'deleteAccount' };
    const payload = { id };
    return this.client.send<string>(pattern, payload);
  }
}
