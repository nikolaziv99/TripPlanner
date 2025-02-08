import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from './trip.entity';
import { CreateTripDto } from 'src/common/dtos/createTripDto.entity';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) { }

  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto) {
    return this.tripService.createTrip(createTripDto);
  }

  @Post()
  async create(@Body() tripData: Partial<Trip>): Promise<Trip> {
    return this.tripService.create(tripData);
  }

  @Get()
  async findAll(): Promise<Trip[]> {
    return this.tripService.findAll();
  }

  @Get('user/:userId')
  async findAllByUserId(@Param('userId') userId: number): Promise<Trip[]> {
    return this.tripService.getAllByUserId(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Trip> {
    return this.tripService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() tripData: Partial<Trip>): Promise<Trip> {
    return this.tripService.update(id, tripData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.tripService.delete(id);
  }
}
