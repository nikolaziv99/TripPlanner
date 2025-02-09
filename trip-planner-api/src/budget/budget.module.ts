import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { Budget } from './budget.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from 'src/trip/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget, Trip])], 
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
