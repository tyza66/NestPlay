import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';//引入模块列表

async function bootstrap() {
  //使用NestFactory创建了一个应用
  const app = await NestFactory.create(AppModule);//这里通过引入的模块列表直接创建next应用
  await app.listen(3000);
}
bootstrap();
