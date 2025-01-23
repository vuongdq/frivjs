import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './modules/games/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoryModule } from './modules/categories/category.module';
import { GamesEntity } from './entities/games.entity';
import { CategoriesEntity } from './entities/categories.entity';
import { AccountEntity } from './entities/accounts.entity';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs-api-v1',
    entities: [GamesEntity,CategoriesEntity,AccountEntity],
    synchronize: true,
  }),
  GameModule,
  CategoryModule,
  AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource){

  }
}
