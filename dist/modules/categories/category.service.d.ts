import { ICategoryRepository } from "src/interfaces/ICategoryRepository";
import { Category } from "src/models/category.model";
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(id: number, category: Category): Promise<Category>;
    delete(id: number): Promise<boolean>;
}
