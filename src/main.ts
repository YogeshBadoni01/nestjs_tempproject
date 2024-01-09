import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap')
  // logger: ['error', 'warn']
  app.useGlobalPipes(new ValidationPipe(
    {whitelist:true}
  ));
  logger.log(`application is running on port no. 3030 `)
  await app.listen(3030);
}
bootstrap();
