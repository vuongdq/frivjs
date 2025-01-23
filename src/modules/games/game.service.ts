import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GamesEntity } from "src/entities/games.entity";
import { Game } from "src/models/game.model";
import { ICategoryRepository } from "src/interfaces/ICategoryRepository";
import { IGameRepository } from "src/interfaces/IGameRepository";

@Injectable()
export class GameService {
    constructor(
        @Inject("IGameRepository")
    private readonly gameRepository: IGameRepository) { }
    async findAll(): Promise<Game[]> {
        return await this.gameRepository.findAll();
    }
    async findById(id: number): Promise<Game> {
        return await this.gameRepository.findById(id);
    }
    async create(game: Game): Promise<Game> {
        return await this.gameRepository.create(game);
    }
    async update(id: number, game: Game): Promise<Game> {
        await this.gameRepository.update(id, game); 
        return this.findById(id);
    }
    async delete(id: number): Promise<boolean> {
        return await this.gameRepository.delete(id);
   
    }
}