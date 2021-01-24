import { Module } from '@nestjs/common';
import { FilmModule } from './film/film.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {join} from 'path'
import { FilmcategoryModule } from './filmcategory/filmcategory.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "Welcome@123",
    "database": "Learn",
    "entities": [join(__dirname,"**","*.entity{.ts,.js}")],
    "synchronize": true
 }),FilmModule, FilmcategoryModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
