import { ApiProperty } from '@nestjs/swagger'
import { IsDateString } from 'class-validator'

export class UpdatePostDto {
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