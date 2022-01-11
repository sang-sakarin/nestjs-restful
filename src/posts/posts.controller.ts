import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { PostsService } from "./posts.service";
import {PostModel} from "./posts.interface";
import { PostFormSerializer } from './posts.serializer';

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
    public findOne(@Param('id', ParseIntPipe) id: number): PostModel {
        return this.postsService.findOne(id)
    }

    @Post()
    public create(@Body() postFormSerialize: PostFormSerializer) {
        return "aaaaa"
        // return this.postsService.create(post)
    }


}
