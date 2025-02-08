import { Injectable } from '@nestjs/common';
import { Destination } from './destination.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DestinationService {
    constructor(
        @InjectRepository(Destination)
        private readonly destinationRepository: Repository<Destination>,
      ) {}

      async create(destinationData: Partial<Destination>): Promise<Destination> {
          const destination = this.destinationRepository.create(destinationData);
          return this.destinationRepository.save(destination);
        }
      
        async findAll(): Promise<Destination[]> {
          return this.destinationRepository.find();
        }
      
        async findOne(id: number): Promise<Destination> {
          const destination = await this.destinationRepository.findOne({ where: { id } });
          if (!destination) {
            throw new Error(`Destination with id ${id} not found`);
          }
          return destination;
        }

        async findByName(name: string): Promise<Destination> {
            const destination = await this.destinationRepository.findOneBy({ name });
            if (!destination) {
              throw new Error(`Destination with name ${name} not found`);
            }
            return destination;
          }

          async findByCoordinates(latitude: number, longitude: number): Promise<Destination> {
            const destination = await this.destinationRepository.findOneBy({ latitude, longitude });
            if (!destination) {
              throw new Error(`Destination with coordinates not found`);
            }
            return destination;
          }
      
        async update(id: number, destinationData: Partial<Destination>): Promise<Destination> {
          await this.destinationRepository.update(id, destinationData);
          return this.findOne(id);
        }
      
        async delete(id: number): Promise<void> {
          await this.destinationRepository.delete(id);
        }
}
