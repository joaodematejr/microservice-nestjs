import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('SERVICE_A') private readonly clientA: ClientProxy,
    @Inject('SERVICE_B') private readonly clientB: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<Observable<any>> {
    const clientA = this.clientA.send({ cmd: 'SERVICE_A' }, '');
    //const clientB = this.clientB.send({ cmd: 'SERVICE_B' }, '');
    return clientA;
  }
}
