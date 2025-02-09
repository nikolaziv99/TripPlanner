import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from 'src/common/dtos/createBudgetDto.entity';
import { BudgetService } from './budget.service';

@Controller('budget')
export class BudgetController {
     constructor(private readonly budgetService: BudgetService) { }
    
      @Post()
      async createBudget(@Body() createBudgetDto: CreateBudgetDto) {
        return this.budgetService.createBudget(createBudgetDto);
      }
    
      @Get()
      async findAll(): Promise<Budget[]> {
        return this.budgetService.findAll();
      }
    
      @Get(':id')
      async findOne(@Param('id') id: number): Promise<Budget> {
        return this.budgetService.findOne(id);
      }
    
      @Put(':id')
      async update(@Param('id') id: number, @Body() budgetData: Partial<Budget>): Promise<Budget> {
        return this.budgetService.update(id, budgetData);
      }
    
      @Delete(':id')
      async delete(@Param('id') id: number): Promise<void> {
        return this.budgetService.delete(id);
      }

      @Post(':id')
      async updateBudget(@Param('id') id: number, @Body() body: { expenseAmount: number }): Promise<Budget> {
        return this.budgetService.deductExpense(id, body.expenseAmount);
      }
}
