import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesEntity } from "src/entities/categories.entity";
import { ICategoryRepository } from "src/interfaces/ICategoryRepository";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryRepository implements ICategoryRepository {
    constructor(@InjectRepository(CategoriesEntity) 
    private readonly categoryRepository: Repository<CategoriesEntity>) { }
    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }
    async findById(id: number): Promise<Category> {
        return await this.categoryRepository.findOne({where: {id}, relations: ['games']});
    }
    async create(category: Category): Promise<Category> {
        return await this.categoryRepository.save(category);
    }
    async update(id: number, category: Category): Promise<Category> {
        await this.categoryRepository.update(id, category); 
        return this.findById(id);
    }
    async delete(id: number): Promise<boolean> {
        const isDelete = await this.categoryRepository.delete(id);
        if(isDelete.affected > 0) {
            return true;
        }
        return false;
    }

}