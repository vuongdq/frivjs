"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(id, categoryID, gameTitle, gameDescription, gameImage, gameFile) {
        if (id != undefined)
            this.id = id;
        if (categoryID != undefined)
            this.categoryID = categoryID;
        if (gameTitle != undefined)
            this.gameTitle = gameTitle;
        if (gameDescription != undefined)
            this.gameDescription = gameDescription;
        if (gameImage != undefined)
            this.gameImage = gameImage;
        if (gameFile != undefined)
            this.gameFile = gameFile;
    }
    ;
}
exports.Game = Game;
//# sourceMappingURL=game.model.js.map