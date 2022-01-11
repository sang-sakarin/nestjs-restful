import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

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
}