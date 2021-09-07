import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/research'),
    ProductModule,
    BreedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
