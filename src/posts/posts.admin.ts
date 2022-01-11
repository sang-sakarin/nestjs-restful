import { AdminEntity } from 'nestjs-admin'
import { Post } from './posts.entity'

export class PostAdmin extends AdminEntity {
    entity = Post
    listDisplay = ['id', 'title']
    searchFields = ['title']
}