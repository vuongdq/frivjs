import { Controller,Get, Param, Post, Res,Body,Put,Delete } from "@nestjs/common";
import { Response } from "express";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { ResponseType } from "src/global/globalType";
import { Category } from "src/models/category.model";
import { CategoryService } from "./category.service";
import { CategoryDTO } from "src/dto/category.dto";

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}
    @Get()
    async list(@Res() res:Response):Promise<ResponseType<Category>> {
        try {
            return res.json(new ResponseData(await this.categoryService.findAll(),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Get(':id')
    async detail(@Param('id') id:number,@Res() res:Response):Promise<ResponseType<Category>> {
        try {
            return res.json(new ResponseData(await this.categoryService.findById(id),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Post()
    async create(@Res() res:Response, @Body() category: CategoryDTO):Promise<ResponseType<Category>> {
        try {
            return res.json(new ResponseData(await this.categoryService.create(category),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Put(':id')
    async update(
        @Res() res:Response, 
        @Param('id') id:number, 
        @Body() category: CategoryDTO):Promise<ResponseType<Category>> {
        try {
            return res.json(new ResponseData(await this.categoryService.update(id,category),HttpStatus.SUCCESS, HttpMessage.SUCCESS));
        } catch (error) {
            return res.json(new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR));
        }
    }
    @Delete(':id')
    async delete(@Res() res:Response, @Param('id') id:number):Promise<ResponseType<boolean>> {
        try {
            const isFlag = await this.categoryService.delete(id);
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