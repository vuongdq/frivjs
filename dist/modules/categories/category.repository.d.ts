import { CategoriesEntity } from "src/entities/categories.entity";
import { ICategoryRepository } from "src/interfaces/ICategoryRepository";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";
export declare class CategoryRepository implements ICategoryRepository {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoriesEntity>);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(id: number, category: Category): Promise<Category>;
    delete(id: number): Promise<boolean>;
}
