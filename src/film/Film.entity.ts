import { Category } from 'src/filmcategory/category.entity';
import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
@Entity('film', {synchronize: true})
export class Film extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    title: string;
    @Column({type: "varchar"})
    description: string;
    @Column({type: "integer"})
    releaseYear: number;
    @Column({type: "integer"})
    length: number;
    @Column({type: "integer"})
    rating: number;
    @Column({type: "varchar"})
    specialFeatures: string;
    @Column({type: "text"})
    fullText: string;
    @ManyToMany(() => Category, category => category.films, {cascade: true,eager: true})
    @JoinTable()
    category: Category[];
}