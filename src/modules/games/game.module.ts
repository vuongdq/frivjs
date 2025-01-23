import { Module } from "@nestjs/common";
import { GameController } from "./game.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GamesEntity } from "src/entities/games.entity";
import { GameService } from "./game.service";
import { GameRepository } from "./game.repository";

@Module({
    imports: [TypeOrmModule.forFeature([GamesEntity])],
    controllers: [GameController],
    providers: [GameService,
        {
            provide: 'IGameRepository',
            useValue: GameRepository
        }
    ],
})
export class GameModule {
};