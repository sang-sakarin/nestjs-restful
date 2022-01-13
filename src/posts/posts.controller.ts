import { Body, Controller, Get, Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from "./posts.service";
import { PostModel } from "./posts.interface";
import { PostFormSerializer } from './posts.serializer';
import { CreatePostInput } from './dto/create-post.input';

@Controller({
    path: 'posts',
    version: '1'
})
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public async findAll(): Promise<any[]> {
        return await this.postsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.postsService.findOne(id)

    }

    @Post()
    public async create(@Body() createPostInput : CreatePostInput) {
        return await this.postsService.create(createPostInput)
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number) {
        return await this.postsService.remove(id);
    }
}
