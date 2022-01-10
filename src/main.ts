import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
