import { IsInt, Min } from 'class-validator';

export class CreateActivityDto {
  @IsInt()
  @Min(1)
  tripId: number;

  name: string;

  latitude: number;

  longitude: number;

  price: number;
}
