import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Type } from "class-transformer";
import { CategoriesEntity } from "src/entities/categories.entity";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { CategoryRepository } from "./category.repository";

@Module({
    imports: [TypeOrmModule.forFeature([CategoriesEntity])],
    controllers: [CategoryController],
    providers: [CategoryService,
        {
            provide: 'ICategoryRepository',
            useClass: CategoryRepository
        }
    ],

})
export class CategoryModule {
};
