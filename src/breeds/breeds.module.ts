import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed, BreedSchema } from './schemas/breed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]),
  ],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
