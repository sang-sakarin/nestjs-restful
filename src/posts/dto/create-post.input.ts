import { ApiProperty } from '@nestjs/swagger'
import { IsDateString } from 'class-validator'

export class CreatePostInput {
    @ApiProperty()
    title: string;

    @ApiProperty()
    @IsDateString()
    date: Date;

    @ApiProperty()
    body: string;

    @ApiProperty()
    category: string;
}