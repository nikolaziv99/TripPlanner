import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './trip.entity';
import { Destination } from 'src/destination/destination.entity';
import { User } from 'src/user/user.entity';
import { CreateTripDto } from 'src/common/dtos/createTripDto.entity';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

  async createTrip(createTripDto: CreateTripDto): Promise<Trip> {
    const { userId, destinationId, startDate, endDate } = createTripDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const destination = await this.destinationRepository.findOne({ where: { id: destinationId } });
    if (!destination) throw new NotFoundException('Destination not found');

    const trip = this.tripRepository.create({
      user,
      destination,
      startDate,
      endDate,
    });

    return this.tripRepository.save(trip);
  }
  
  async create(tripData: Partial<Trip>): Promise<Trip> {
    const trip = this.tripRepository.create(tripData);
    return this.tripRepository.save(trip);
  }

  async findAll(): Promise<Trip[]> {
    return this.tripRepository.find();
  }

  async findOne(id: number): Promise<Trip> {
    const trip = await this.tripRepository.findOne({ where: { id } });
    if (!trip) {
      throw new Error(`Trip with id ${id} not found`);
    }
    return trip;
  }

  async update(id: number, tripData: Partial<Trip>): Promise<Trip> {
    await this.tripRepository.update(id, tripData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.tripRepository.delete(id);
  }
}