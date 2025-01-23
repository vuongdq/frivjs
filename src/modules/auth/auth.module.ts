import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity } from "src/entities/accounts.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepository } from "./auth.repository";

@Module({
    imports: [TypeOrmModule.forFeature([AccountEntity])],
    controllers: [AuthController],
    providers: [AuthService,
        {
            provide: 'IAuthRepository',
            useClass: AuthRepository
        
        }
    ],

})
export class AuthModule {
};
