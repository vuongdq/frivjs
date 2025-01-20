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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDTO = void 0;
const class_validator_1 = require("class-validator");
class GameDTO {
}
exports.GameDTO = GameDTO;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GameDTO.prototype, "categoryID", void 0);
__decorate([
    (0, class_validator_1.MinLength)(5, { message: "Tiêu đề Cần phải nhập nhiều hơn 5 ký tự" }),
    __metadata("design:type", String)
], GameDTO.prototype, "gameTitle", void 0);
__decorate([
    (0, class_validator_1.MinLength)(20, { message: "Mô tả Cần phải nhập nhiều hơn 20 ký tự" }),
    __metadata("design:type", String)
], GameDTO.prototype, "gameDescription", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GameDTO.prototype, "gameImage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GameDTO.prototype, "gameFile", void 0);
;
//# sourceMappingURL=game.dto.js.map