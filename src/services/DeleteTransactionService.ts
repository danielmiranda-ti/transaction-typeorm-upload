import { getCustomRepository } from "typeorm";
import TransactionsRepository from "../repositories/TransactionsRepository";
import AppError from "../errors/AppError";

class DeleteTransactionService {
  public async execute(transactionId: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRepository.findOne(transactionId);
    if (!transaction) {
      throw new AppError('Transaction not exists')
    }
    await transactionRepository.remove(transaction);    
  }
}

export default DeleteTransactionService;
