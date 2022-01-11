import { InjectRepository } from "@nestjs/typeorm";
import {Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, Repository } from "typeorm";
import { Post } from "./posts.entity";

@EventSubscriber()
export class PostSubsriber implements EntitySubscriberInterface<Post> {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        connection: Connection
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Post
    }

    afterInsert(event: InsertEvent<Post>) {
        console.log(`After Insert`, event.entity.body)
        event.entity.body = "AAAAAA"
        this.postRepository.save(event.entity)
    }
}