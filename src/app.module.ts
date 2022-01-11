import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DefaultAdminModule, AdminUserEntity } from 'nestjs-admin'
import configuration from "./config/configuration";

@Module({
  imports: [
      ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true
      }),
      PostsModule,
      TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: configService.get('database.host'),
              port: configService.get('database.port'),
              username: configService.get('database.user'),
              password: configService.get('database.password'),
              database: configService.get('database.name'),
              entities: [AdminUserEntity, Post],
              synchronize: true
          }),
          inject: [ConfigService]
      }),
      DefaultAdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
