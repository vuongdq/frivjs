import { BaseEntity } from "typeorm";
import { GamesEntity } from "./games.entity";
export declare class CategoriesEntity extends BaseEntity {
    id: number;
    categoryName: string;
    description: string;
    games: GamesEntity[];
}
