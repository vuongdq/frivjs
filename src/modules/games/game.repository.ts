import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GamesEntity } from "src/entities/games.entity";
import { BaseRepository } from "src/interfaces/BaseRepository";
import { IGameRepository } from "src/interfaces/IGameRepository";
import { Game } from "src/models/game.model";
import { Repository } from "typeorm";

@Injectable()
export class GameRepository 
extends BaseRepository<GamesEntity,Repository<GamesEntity>> 
implements IGameRepository {
    constructor(
        @InjectRepository(GamesEntity)
        protected readonly repository: Repository<GamesEntity>
    ) {
        super(repository);
    }
}