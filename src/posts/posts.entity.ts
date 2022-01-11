import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Expose } from 'class-transformer'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @Column({ length: 128, nullable: true})
    title: string;

    @Column({ length: 255, nullable: true})
    body: string;

    @Column({ length: 32 })
    category: string;

    @Expose()
    get fullName(): string {
        return `${this.title} 2222`;
    }

}