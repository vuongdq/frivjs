import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesEntity } from "src/entities/categories.entity";
import { ICategoryRepository } from "src/interfaces/ICategoryRepository";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
    constructor(
        @Inject("ICategoryRepository")
        private readonly categoryRepository: ICategoryRepository
    ) { }
    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.findAll();
    }
    async findById(id: number): Promise<Category> {
        return await this.categoryRepository.findById(id);
    }
    async create(category: Category): Promise<Category> {
        return await this.categoryRepository.create(category);
    }
    async update(id: number, category: Category): Promise<Category> {
        await this.categoryRepository.update(id, category); 
        return this.findById(id);
    }
    async delete(id: number): Promise<boolean> {
        return await this.categoryRepository.delete(id);
    }

}