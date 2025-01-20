"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("../../entities/categories.entity");
const typeorm_2 = require("typeorm");
let CategoryRepository = class CategoryRepository {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async findAll() {
        return await this.categoryRepository.find();
    }
    async findById(id) {
        return await this.categoryRepository.findOne({ where: { id } });
    }
    async create(category) {
        return await this.categoryRepository.save(category);
    }
    async update(id, category) {
        await this.categoryRepository.update(id, category);
        return this.findById(id);
    }
    async delete(id) {
        const isDelete = await this.categoryRepository.delete(id);
        if (isDelete.affected > 0) {
            return true;
        }
        return false;
    }
};
exports.CategoryRepository = CategoryRepository;
exports.CategoryRepository = CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categories_entity_1.CategoriesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryRepository);
//# sourceMappingURL=category.repository.js.map