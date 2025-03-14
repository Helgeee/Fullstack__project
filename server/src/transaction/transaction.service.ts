// import { BadRequestException } from '@nestjs/common'
// import { CreateTransactionDto } from './dto/create-transaction.dto'
// import { UpdateTransactionDto } from './dto/update-transaction.dto'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository, Transaction } from 'typeorm'

// import { Transaction } from './entities/transaction.entity' // Путь должен быть корректным

// // //Выдаёт ошибку

// // @Injectable()
// export class TransactionService {
// 	constructor(
// 		@InjectRepository(Transaction)
// 		private readonly transactionRepository: Repository<Transaction>,
// 	) {}

// 	async create(createTransactionDto: CreateTransactionDto, id: number) {
// 		const newTransaction = {
// 			title: createTransactionDto.title,
// 			type: createTransactionDto.type,
// 			amount: createTransactionDto.amount,
// 			category: { id: +createTransactionDto.category },
// 			user: { id },
// 		}
// 		console.log(createTransactionDto)

// 		if (!newTransaction)
// 			throw new BadRequestException('Somethins went wrong...')

// 		return await this.transactionRepository.save([newTransaction]) // Выдаёт ошибку  No overload matches this call
// 	}

// 	async findAll(id: number) {
// 		const transactions = await this.transactionRepository.find({
// 			where: {
// 				user: { id },
// 			},
// 			order: {
// 				createAt: 'DESC',
// 			},
// 		})
// 		return transactions
// 	}

// 	async findOne(id: number) {
// 		const transaction = await this.transactionRepository.findOne(id) // Или используйте findOneOrFail
// 		if (!transaction) {
// 			throw new BadRequestException(`Transaction with id ${id} not found`)
// 		}
// 		return transaction
// 	}

// 	update(id: number, updateTransactionDto: UpdateTransactionDto) {
// 		return updateTransactionDto
// 	}

// 	async remove(id: number) {
// 		const result = await this.transactionRepository.delete(id)
// 		if (result.affected === 0) {
// 			throw new BadRequestException(`Transaction with id ${id} not found`)
// 		}
// 		return { message: `Transaction with id ${id} removed` }
// 	}
// }
