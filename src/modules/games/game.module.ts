import { Module } from "@nestjs/common";
import { GameController } from "./game.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GamesEntity } from "src/entities/games.entity";
import { GameService } from "./game.service";

@Module({
    imports: [TypeOrmModule.forFeature([GamesEntity])],
    controllers: [GameController],
    providers: [GameService],
})
export class GameModule {
};