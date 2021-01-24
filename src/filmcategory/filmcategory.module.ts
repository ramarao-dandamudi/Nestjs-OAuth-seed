import { Module } from '@nestjs/common';
import { Category } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmcategoryController } from './filmcategory.controller';
import { FilmcategoryService } from './filmcategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [FilmcategoryController],
  providers: [FilmcategoryService]
})
export class FilmcategoryModule {}
