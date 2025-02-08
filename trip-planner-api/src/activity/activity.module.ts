import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { Activity } from './activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from 'src/trip/trip.entity';
import { ActivityService } from './activity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Trip])], 
  providers: [ActivityService],
  controllers: [ActivityController]
})
export class ActivityModule {}

