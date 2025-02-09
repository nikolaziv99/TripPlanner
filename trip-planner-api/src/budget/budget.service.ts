import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from 'src/trip/trip.entity';
import { Repository } from 'typeorm';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from 'src/common/dtos/createBudgetDto.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>
  ) {}

  async createBudget(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    const { tripId, startingAmount } = createBudgetDto;

    const trip = await this.tripRepository.findOne({ where: { id: tripId } });
    if (!trip) throw new NotFoundException('Trip not found');

    const budget = this.budgetRepository.create({
      trip,
      startingAmount,
      remaining: startingAmount
    });

    return this.budgetRepository.save(budget);
  }
  
  async create(budgetData: Partial<Budget>): Promise<Budget> {
    const budget = this.budgetRepository.create(budgetData);
    return this.budgetRepository.save(budget);
  }

  async findAll(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

//   async getAllByUserId(userId: number): Promise<Budget[]> {
//     return this.budgetRepository.find({ where: { user: { id: userId } } });
//   }

  async findOne(id: number): Promise<Budget> {
    const budget = await this.budgetRepository.findOne({ where: { id } });
    if (!budget) {
      throw new Error(`Budget with id ${id} not found`);
    }
    return budget;
  }

  async update(id: number, budgetData: Partial<Budget>): Promise<Budget> {
    await this.budgetRepository.update(id, budgetData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.budgetRepository.delete(id);
  }

  async deductExpense(id: number, expense: number): Promise<Budget> {
    const budget = await this.findOne(id);
    budget.remaining -= expense;
    return this.budgetRepository.save(budget);
  }
  
}