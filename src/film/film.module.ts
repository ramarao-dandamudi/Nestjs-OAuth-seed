import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './Film.entity';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';

@Module({
    imports: [TypeOrmModule.forFeature([Film])],
    controllers:[FilmController],
    providers:[FilmService]
})
export class FilmModule {}
