import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { GameService } from "./game.service";
import { responseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Game } from "src/models/game.model";
import { GameDTO } from "src/dto/game.dto";

@Controller('games')
export class GameController {
    constructor(private readonly gameService: GameService){}
    @Get()
    getGames(): responseData<Game[]> {
        try {
            return new responseData<Game[]>(this.gameService.getGames(),HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new responseData<Game[]>(null,HttpStatus.ERROR, HttpMessage.ERROR);
        }
        
    }
    @Post()
    createGame(@Body(new ValidationPipe()) gameDTO: GameDTO): responseData<GameDTO> {
        try {
            return new responseData<Game>(this.gameService.createGame(gameDTO),HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new responseData<Game>(null,HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Get(':id')
    detailGame(@Param("id") id:number): responseData<Game>{
        try {
            return new responseData<Game>(this.gameService.detailGame(id),HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new responseData<Game>(null,HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Put(':id')
    updateGame(): responseData<string> {
        try {
            return new responseData<string>(this.gameService.updateGame(),HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new responseData<string>(null,HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
    @Delete(':id')
    deleteGame(): responseData<string> {
        try {
            return new responseData<string>(this.gameService.deleteGame(),HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new responseData<string>(null,HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}
