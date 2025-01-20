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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const globalClass_1 = require("../../global/globalClass");
const globalEnum_1 = require("../../global/globalEnum");
const game_service_1 = require("./game.service");
const game_dto_1 = require("../../dto/game.dto");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    async list(res) {
        try {
            return res.json(new globalClass_1.ResponseData(await this.gameService.findAll(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS));
        }
        catch (error) {
            return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
        }
    }
    async detail(id, res) {
        try {
            return res.json(new globalClass_1.ResponseData(await this.gameService.findById(id), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS));
        }
        catch (error) {
            return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
        }
    }
    async create(res, game) {
        try {
            return res.json(new globalClass_1.ResponseData(await this.gameService.create(game), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS));
        }
        catch (error) {
            return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
        }
    }
    async update(res, id, gameDto) {
        try {
            return res.json(new globalClass_1.ResponseData(await this.gameService.update(id, gameDto), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS));
        }
        catch (error) {
            return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
        }
    }
    async delete(res, id) {
        try {
            const isFlag = await this.gameService.delete(id);
            if (!isFlag) {
                return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
            }
            else {
                return res.json(new globalClass_1.ResponseData(isFlag, globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS));
            }
        }
        catch (error) {
            return res.json(new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR));
        }
    }
};
exports.GameController = GameController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "detail", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, game_dto_1.GameDTO]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, game_dto_1.GameDTO]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "delete", null);
exports.GameController = GameController = __decorate([
    (0, common_1.Controller)('games'),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
//# sourceMappingURL=game.controller.js.map