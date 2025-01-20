import {IsString, MinLength} from "class-validator";
export class CategoryDTO{

    @MinLength(5,{message:"Tiêu đề Cần phải nhập nhiều hơn 5 ký tự"})
    categoryName?: string;
    @IsString()
    description?:string;
};