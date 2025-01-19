import {IsNumber, IsString, MinLength} from "class-validator";
export class GameDTO{
    id?: number;
    @IsNumber()
    categoryID?:number;

    @MinLength(5,{message:"Tiêu đề Cần phải nhập nhiều hơn 5 ký tự"})
    gameTitle?: string;
    @MinLength(20,{message:"Mô tả Cần phải nhập nhiều hơn 20 ký tự"})
    gameDescription?:string;
    @IsString()
    gameImage?:string;
    @IsString()
    gameFile?:string;
};