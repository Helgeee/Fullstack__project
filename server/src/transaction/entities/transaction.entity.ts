import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn,  UpdateDateColumn } from "typeorm";

@Entity()

export class Transaction {

    @PrimaryGeneratedColumn ({ name: 'transaction_id'})
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    type: string

    @Column()
    anount: number

    @ManyToOne(() => Category , (category) => category.transaction)
    @JoinColumn({ name: 'category_id'})
    category: Category

    @ManyToOne(() => User , (user) => user.transactions )
    @JoinColumn({ name: 'user_id'})
    user: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
