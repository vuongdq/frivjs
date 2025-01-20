import { Response } from "express";
import { ResponseType } from "src/global/globalType";
import { GameService } from "./game.service";
import { GameDTO } from "src/dto/game.dto";
import { Game } from "src/models/game.model";
export declare class GameController {
    private gameService;
    constructor(gameService: GameService);
    list(res: Response): Promise<ResponseType<Game>>;
    detail(id: number, res: Response): Promise<ResponseType<Game>>;
    create(res: Response, game: GameDTO): Promise<ResponseType<Game>>;
    update(res: Response, id: number, gameDto: GameDTO): Promise<ResponseType<Game>>;
    delete(res: Response, id: number): Promise<ResponseType<boolean>>;
}
