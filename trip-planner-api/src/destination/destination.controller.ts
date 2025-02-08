import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Destination } from './destination.entity';

@Controller('destination')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Post()
  async create(@Body() tripData: Partial<Destination>): Promise<Destination> {
    return this.destinationService.create(tripData);
  }

  @Get()
  async findAll(): Promise<Destination[]> {
    return this.destinationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Destination> {
    return this.destinationService.findOne(id);
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Destination> {
    return this.destinationService.findByName(name);
  }

  @Get(':latitude/:longitude')
  async findByCoordinates(@Param('latitude') latitude: number, @Param('longitude') longitude: number): Promise<Destination> {
    return this.destinationService.findByCoordinates(latitude, longitude);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() tripData: Partial<Destination>): Promise<Destination> {
    return this.destinationService.update(id, tripData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.destinationService.delete(id);
  }
}
