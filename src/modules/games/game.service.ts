import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GamesEntity } from "src/entities/games.entity";
import { Game } from "src/models/game.model";
import { Repository } from "typeorm";

@Injectable()
export class GameService {
    constructor(@InjectRepository(GamesEntity) 
    private readonly gameRepository: Repository<GamesEntity>) { }
    async findAll(): Promise<Game[]> {
        return await this.gameRepository.find();
    }
    async findById(id: number): Promise<Game> {
        return await this.gameRepository.findOne({where: {id}});
    }
    async create(game: Game): Promise<Game> {
        return await this.gameRepository.save(game);
    }
    async update(id: number, game: Game): Promise<Game> {
        await this.gameRepository.update(id, game); 
        return this.findById(id);
    }
    async delete(id: number): Promise<boolean> {
        const isDelete = await this.gameRepository.delete(id);
        if(isDelete.affected > 0) {
            return true;
        }
        return false;
    }

}