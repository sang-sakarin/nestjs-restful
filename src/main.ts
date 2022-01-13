import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './commons/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false
  }))
  app.enableVersioning({
    type: VersioningType.URI
  })

  const config = new DocumentBuilder()
      .setTitle('Blog Title')
      .setDescription('Blog Title')
      .setVersion('1.0')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1', app, document)

  await app.listen(3000);
}
bootstrap();
