import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Transaction {

    @PrimaryColumn({ name: 'transaction_id'})
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    type: string

    @ManyToOne(() => User , (user) => user.transactions )
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Category , (category) => category.transaction)
    @JoinColumn({ name: 'category_id'})
    category: Category

    @Column()
    anount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
