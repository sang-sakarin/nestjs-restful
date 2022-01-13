import { DeleteDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export abstract class SoftDeletion {

    @Exclude()
    @DeleteDateColumn()
    public deletedAt: Date
}
