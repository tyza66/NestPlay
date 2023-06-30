import { Injectable } from '@nestjs/common';

//这里定义了一个service层方法并且用注解标记
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World1!';
  }

  getGiao(): string {
    return 'Giao!';
  }
}
