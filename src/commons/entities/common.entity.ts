import { DeleteDateColumn } from "typeorm";

export abstract class SoftDeletion {
    @DeleteDateColumn()
    public deletedAt: Date
}
