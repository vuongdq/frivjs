import { Response } from "express";
import { ResponseType } from "src/global/globalType";
import { Category } from "src/models/category.model";
import { CategoryService } from "./category.service";
import { CategoryDTO } from "src/dto/category.dto";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    list(res: Response): Promise<ResponseType<Category>>;
    detail(id: number, res: Response): Promise<ResponseType<Category>>;
    create(res: Response, category: CategoryDTO): Promise<ResponseType<Category>>;
    update(res: Response, id: number, category: CategoryDTO): Promise<ResponseType<Category>>;
    delete(res: Response, id: number): Promise<ResponseType<boolean>>;
}
