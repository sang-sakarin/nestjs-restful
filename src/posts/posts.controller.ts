import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { PostsService } from "./posts.service";
import {PostModel} from "./posts.interface";

@Controller('posts')
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
    public create(@Body() post: PostModel): PostModel {
        return this.postsService.create(post)
    }


}
