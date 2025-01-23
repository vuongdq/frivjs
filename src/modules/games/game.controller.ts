import { Controller,Get, Param, Post, Res,Body,Put,Delete } from "@nestjs/common";
import { Response } from "express";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { ResponseType } from "src/global/globalType";
import { GameService } from "./game.service";
import {  GameDTO} from "src/dto/game.dto";
import { Game } from "src/models/game.model";

@Controller('games')
export class GameController {
    constructor(private gameService: GameService) {}
    @Get()
    async list(@Res() res:Response):Promise<ResponseType<Game>> {
        try {
            return res.json(new ResponseData(await this.gameService.findAll(),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Get(':id')
    async detail(@Param('id') id:number,@Res() res:Response):Promise<ResponseType<Game>> {
        try {
            return res.json(new ResponseData(await this.gameService.findById(id),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Post()
    async create(@Res() res:Response, @Body() game: GameDTO):Promise<ResponseType<Game>> {
        try {
            return res.json(new ResponseData(await this.gameService.create(game),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Put(':id')
    async update(
        @Res() res:Response, 
        @Param('id') id:number, 
        @Body() gameDto: GameDTO):Promise<ResponseType<Game>> {
        try {
            return res.json(new ResponseData(await this.gameService.update(id,gameDto),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Delete(':id')
    async delete(@Res() res:Response, @Param('id') id:number):Promise<ResponseType<boolean>> {
        try {
            const isFlag = await this.gameService.delete(id);
            if(!isFlag) {
                return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
            } else{
                return res.json(new ResponseData(isFlag,HttpStatus.SUCCESS, HttpMessage.SUCCESS));
            }
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
}