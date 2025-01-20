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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const games_entity_1 = require("../../entities/games.entity");
const typeorm_2 = require("typeorm");
let GameService = class GameService {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }
    async findAll() {
        return await this.gameRepository.find();
    }
    async findById(id) {
        return await this.gameRepository.findOne({ where: { id } });
    }
    async create(game) {
        return await this.gameRepository.save(game);
    }
    async update(id, game) {
        await this.gameRepository.update(id, game);
        return this.findById(id);
    }
    async delete(id) {
        const isDelete = await this.gameRepository.delete(id);
        if (isDelete.affected > 0) {
            return true;
        }
        return false;
    }
};
exports.GameService = GameService;
exports.GameService = GameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(games_entity_1.GamesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GameService);
//# sourceMappingURL=game.service.js.map