

// import { BadRequestException, Injectable } from '@nestjs/common';
// import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';

//Выдаёт ошибку


// @Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  // async create(createTransactionDto: CreateTransactionDto , id: number ) {
  //   const newTransaction = {
  //     title: createTransactionDto.title,
  //     type: createTransactionDto.type,
  //     amount: createTransactionDto.amount,
  //     category: {id : +createTransactionDto.category },
  //     user: { id },
      
  //   };
  //   console.log(createTransactionDto)

  //   if(!newTransaction )
  //           throw new BadRequestException('Somethins went wrong...')

  //   return  await this.transactionRepository.save([ newTransaction ]);// Выдаёт ошибку  No overload matches this call
  // }

  // async findAll( id: number) {
  //   const transactions = await this.transactionRepository.find({
  //     where: {
  //       user: {id},
  //     },
  //     order: {
  //       createAt: 'DESC',
  //     },
  //   })
  //   return transactions 
  // }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return updateTransactionDto;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}



