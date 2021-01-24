import { Film } from "src/film/Film.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category', {synchronize: true})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    name: string;
    @ManyToMany(type => Film, film => film.category)
    films: Film[];
}