import { IsInt, IsISO8601, Min } from 'class-validator';

export class CreateTripDto {
  @IsInt()
  @Min(1)
  userId: number;

  @IsInt()
  @Min(1)
  destinationId: number;

  @IsISO8601()
  startDate: string;

  @IsISO8601()
  endDate: string;

  homeLatitude: number;

  homeLongitude: number;

  homeAddress: string;
}
