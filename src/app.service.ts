import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AppService {
  constructor(@Inject('ACCOUNT_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(createAccountDto: CreateAccountDto): Observable<string> {
    const pattern = { cmd: 'createAccount' };
    const payload = createAccountDto;
    return this.client.send<string>(pattern, payload);
  }
}
