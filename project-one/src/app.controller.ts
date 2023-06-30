import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //在这里将这个控制层对应的的服务层注入进来
  constructor(private readonly appService: AppService) {}

  //这里定义了一个控制层的方法
  @Get()
  getHello(): string {
    //这里调用了注入进来的服务层的方法
    return this.appService.getHello();
  }

  @Get("/giao")
  getGiao(): string {
    return this.appService.getGiao();
  }

  @Get("/testParam/:a")
  testParam(@Param('a') a:string): string {
    return this.appService.testParam(a);
  }

  @Get("/testQuery")
  testQuery(@Query() params): string {
    return this.appService.testQuery(params.a);
  }
}
