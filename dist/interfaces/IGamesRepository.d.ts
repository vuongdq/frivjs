import { Game } from "src/models/game.model";
export interface IGameRepository {
    findAll(): Promise<Game>;
    findById(id: number): Promise<Game>;
    create(data: Partial<Game>): Promise<Game>;
    update(id: number, data: Partial<CatGameegory>): Promise<Game>;
    delete(id: number): Promise<boolean>;
}
