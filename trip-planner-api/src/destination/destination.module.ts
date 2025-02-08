import { Module } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { DestinationController } from './destination.controller';
import { Destination } from './destination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Destination])], 
  providers: [DestinationService],
  controllers: [DestinationController]
})
export class DestinationModule {}
