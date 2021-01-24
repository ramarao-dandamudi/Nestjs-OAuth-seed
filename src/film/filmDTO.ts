import { Category } from "src/filmcategory/categoryDTO";

export class FilmDTO { 
    title: string;
    description: string;
    releaseYear: number;
    length: number;
    rating: number;
    specialFeatures: string;
    fullText: string;
    categories: Category[];
    
}