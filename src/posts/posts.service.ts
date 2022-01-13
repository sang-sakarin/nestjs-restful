import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './posts.entity';
import { PostModel } from './posts.interface';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) {}

    private posts: Array<PostModel> = [];

    async findAll(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async findOne(id: number): Promise<Post> {
        return await this.postRepository.findOne(id)
    }

    async create(createPostInput: CreatePostInput): Promise<Post> {
        var post = await this.postRepository.create(createPostInput)

        await this.postRepository.insert(post)

        return post
    }

    async remove(id: number) {
        await this.postRepository.softDelete(id);
    }
}
