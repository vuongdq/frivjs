import { Injectable } from "@nestjs/common";
import { GameDTO } from "src/dto/game.dto";
import { Game } from "src/models/game.model";

@Injectable()
export class GameService{
    private games: Game[] = [
        {id:1,categoryID:2,gameTitle:"Game 1", gameDescription:"Game 1 Description",gameImage:"http://example.com/games1.jpg",gameFile:"http://example.com/game1.swf"},
        {id:2,categoryID:2,gameTitle:"Game 2", gameDescription:"Game 2 Description",gameImage:"http://example.com/games2.jpg",gameFile:"http://example.com/game2.swf"},
        {id:3,categoryID:1,gameTitle:"Game 3", gameDescription:"Game 3 Description",gameImage:"http://example.com/games3.jpg",gameFile:"http://example.com/game3.swf"},
        {id:4,categoryID:2,gameTitle:"Game 4", gameDescription:"Game 4 Description",gameImage:"http://example.com/games4.jpg",gameFile:"http://example.com/game4.swf"},
    ];
        getGames(): Game[] {
            return this.games;
        }
        createGame(gameDTO: GameDTO): Game {
            const game: Game = {
                id: Math.random(),
                ...gameDTO
            }
            this.games.push(game);
            return game;
        }
 
        detailGame(id:number): Game {
            return this.games.find(item =>item.id ===Number(id));
        }
   
        updateGame(): string {
            return 'Update game5';
        }
        deleteGame(): string {
            return 'Delete game5';
        }
}