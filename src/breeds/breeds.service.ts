import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Breed, BreedDocument } from './schemas/breed.schema';
import { Model } from 'mongoose';

@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private breedModel: Model<BreedDocument>,
  ) {}

  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    return new this.breedModel(createBreedDto).save();
  }

  async findAll() {
    return this.breedModel.find();
  }

  async findOne(name: string) {
    return this.breedModel.findOne({ name });
  }

  async update(name: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({ name }, { $set: { ...updateBreedDto } });
  }

  async remove(name: string) {
    return this.breedModel.deleteOne({ name });
  }
}
