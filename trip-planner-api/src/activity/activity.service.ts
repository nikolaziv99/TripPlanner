import { Injectable, NotFoundException } from '@nestjs/common';
import { Activity } from './activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from 'src/trip/trip.entity';
import { CreateActivityDto } from 'src/common/dtos/createActivityDto.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(Activity)
        private readonly activityRepository: Repository<Activity>,
        @InjectRepository(Trip)
        private tripRepository: Repository<Trip>
      ) {}

      async createActivity(createActivityDto: CreateActivityDto): Promise<Activity> {
          const { tripId, name, latitude, longitude, price } = createActivityDto;
      
          const trip = await this.tripRepository.findOne({ where: { id: tripId } });
          if (!trip) throw new NotFoundException('Trip not found');
      
          const activity = this.activityRepository.create({
            trip,
            name,
            latitude,
            longitude,
            price
          });
      
          return this.activityRepository.save(activity);
        }

      async create(activityData: Partial<Activity>): Promise<Activity> {
          const activity = this.activityRepository.create(activityData);
          return this.activityRepository.save(activity);
        }
      
        async findAll(): Promise<Activity[]> {
          return this.activityRepository.find();
        }
      
        async findOne(id: number): Promise<Activity> {
          const activity = await this.activityRepository.findOne({ where: { id } });
          if (!activity) {
            throw new Error(`Activity with id ${id} not found`);
          }
          return activity;
        }

        async findByName(name: string): Promise<Activity> {
            const activity = await this.activityRepository.findOneBy({ name });
            if (!activity) {
              throw new Error(`Activity with name ${name} not found`);
            }
            return activity;
          }

          async findByCoordinates(latitude: number, longitude: number): Promise<Activity> {
            const activity = await this.activityRepository.findOneBy({ latitude, longitude });
            if (!activity) {
              throw new Error(`Activity with coordinates not found`);
            }
            return activity;
          }
      
        async update(id: number, activityData: Partial<Activity>): Promise<Activity> {
          await this.activityRepository.update(id, activityData);
          return this.findOne(id);
        }
      
        async delete(id: number): Promise<void> {
          await this.activityRepository.delete(id);
        }
}
