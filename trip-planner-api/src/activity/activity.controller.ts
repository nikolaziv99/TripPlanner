import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';
import { CreateActivityDto } from 'src/common/dtos/createActivityDto.entity';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
    async createActivity(@Body() createTripDto: CreateActivityDto) {
      return this.activityService.createActivity(createTripDto);
    }

  @Post()
  async create(@Body() tripData: Partial<Activity>): Promise<Activity> {
    return this.activityService.create(tripData);
  }

  @Get()
  async findAll(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Activity> {
    return this.activityService.findOne(id);
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Activity> {
    return this.activityService.findByName(name);
  }

  @Get(':latitude/:longitude')
  async findByCoordinates(@Param('latitude') latitude: number, @Param('longitude') longitude: number): Promise<Activity> {
    return this.activityService.findByCoordinates(latitude, longitude);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() tripData: Partial<Activity>): Promise<Activity> {
    return this.activityService.update(id, tripData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.activityService.delete(id);
  }
}
