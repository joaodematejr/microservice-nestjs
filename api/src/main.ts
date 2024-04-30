import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  const url = await app.getUrl();
  logger.log(`Microservice is running at ${url}`);
}
bootstrap();
