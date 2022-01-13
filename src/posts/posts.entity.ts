import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Expose } from 'class-transformer'
import { SoftDeletion } from "src/commons/entities/common.entity";

@Entity()
export class Post extends SoftDeletion {
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