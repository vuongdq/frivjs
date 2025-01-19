import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('games')
export class GameController {
    @Get()
    getGames(): string {
        return 'All games';
    }
    @Post()
    createGame(): string {
        return 'Create game';
    }
    @Get(':id')
    detailGame(): string {
        return 'Detail game';
    }
    @Put(':id')
    updateGame(): string {
        return 'Update game';
    }
    @Delete(':id')
    deleteGame(): string {
        return 'Delete game';
    }
}
