import { BaseEntity } from "typeorm";
export declare class GamesEntity extends BaseEntity {
    id: number;
    categoryID: number;
    gameTitle: string;
    gameDescription?: string;
    gameImage: string;
    gameFile: string;
}
