import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilmService } from './film.service';
import { FilmDTO } from './filmDTO';

@Controller('/api')
export class FilmController {

    constructor(private filmService: FilmService){}

    @Get("/films")
    @UseGuards(AuthGuard('jwt'))
    findall(){
        return this.filmService.findall();
    }

    @Post("/films")
    saveFilm(@Body() filmobj: FilmDTO){
     return this.filmService.saveFilm(filmobj);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id === 'number');
        return this.filmService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() filmObj: FilmDTO) {

        return this.filmService.update(+id, filmObj);
    }
    @Delete(':id')
    delete(@Param('id') id: number){
      return this.filmService.delete(id);
    }
    }
