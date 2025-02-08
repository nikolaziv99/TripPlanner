import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './trip.entity';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { UserModule } from 'src/user/user.module';
import { DestinationModule } from 'src/destination/destination.module';
import { User } from 'src/user/user.entity';
import { Destination } from 'src/destination/destination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trip, User, Destination])], 
  providers: [TripService],
  controllers: [TripController]
})
export class TripModule {}