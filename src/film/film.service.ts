import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './Film.entity';
import { FilmDTO } from './filmDTO';

@Injectable()
export class FilmService {

    constructor(@InjectRepository(Film) private readonly filmRepo: Repository<Film>){}

    public saveFilm = async (filmDto:FilmDTO): Promise<Film> => {
          const newFilmEntity = this.filmRepo.create(filmDto);
         return await this.filmRepo.save(newFilmEntity);
    }

    public findall  = async (): Promise<Film[]> => {
        return await this.filmRepo.find({ relations: ["category"] });
    }

    public findOne = async (id:number): Promise<Film> => {
        return await this.filmRepo.findOne(id);
        
    }

    public update = async (id:number, filmDto:FilmDTO): Promise<Film> => {
       const newFilm =  await this.filmRepo.preload({id:id, ...filmDto})
       return this.filmRepo.save(newFilm);
    }

    public delete = async(id:number) =>{
        await this.filmRepo.delete(id);
    }
}
