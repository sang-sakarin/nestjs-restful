import { Body, Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { PostsService } from "./posts.service";
import { PostModel } from "./posts.interface";
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostDto } from './dto/update-post.dto';
import { LoggingInterceptor } from 'src/commons/interceptors/logging.interceptor';

@Controller({path: 'posts', version: '1'})
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async findAll(): Promise<any[]> {
        return await this.postsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.postsService.findOne(id)

    }

    @Post()
    async create(@Body() createPostInput: CreatePostInput) {
        return await this.postsService.create(createPostInput)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto) {
        return await this.postsService.update(id, updatePostDto);
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number) {
        return await this.postsService.remove(id);
    }
}
