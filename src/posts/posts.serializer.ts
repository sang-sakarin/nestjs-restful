import { IsEmail, IsNotEmpty } from 'class-validator'

export class PostFormSerializer {
    @IsEmail()
    email: string

    @IsNotEmpty()
    name: string
}