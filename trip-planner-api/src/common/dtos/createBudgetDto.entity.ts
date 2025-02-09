import { IsDecimal, IsInt, Min } from 'class-validator';

export class CreateBudgetDto {
  @IsInt()
  @Min(1)
  tripId: number;

  @IsDecimal()
  @Min(1)
  startingAmount: number;
}
