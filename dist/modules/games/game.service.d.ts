import { GamesEntity } from "src/entities/games.entity";
import { Game } from "src/models/game.model";
import { Repository } from "typeorm";
export declare class GameService {
    private readonly gameRepository;
    constructor(gameRepository: Repository<GamesEntity>);
    findAll(): Promise<Game[]>;
    findById(id: number): Promise<Game>;
    create(game: Game): Promise<Game>;
    update(id: number, game: Game): Promise<Game>;
    delete(id: number): Promise<boolean>;
}
