import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin'
import { PostAdmin } from './posts.admin'
import { PostSubsriber } from './posts.subsriber';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), DefaultAdminModule],
  providers: [PostsService, PostSubsriber],
  controllers: [PostsController],
  exports: [PostsService]
})
export class PostsModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    adminSite.register('Post', PostAdmin)
  }
}
