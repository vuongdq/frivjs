import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthPayloadDto } from "src/dto/auth.dto";
import { AccountEntity } from "src/entities/accounts.entity";
import { BaseRepository } from "src/interfaces/BaseRepository";
import { IAuthRepository } from "src/interfaces/IAuthRepository";
import { ICategoryRepository } from "src/interfaces/ICategoryRepository";


import { Repository } from "typeorm";

@Injectable()
export class AuthRepository extends BaseRepository<AccountEntity,Repository<AccountEntity>> implements IAuthRepository {
    constructor(@InjectRepository(AccountEntity)
        protected readonly repository: Repository<AccountEntity>) {
        super(repository);
    }
    async signIn(auth: AuthPayloadDto): Promise<AuthPayloadDto|boolean> {

    }
    async signUp(auth: AuthPayloadDto): Promise<AuthPayloadDto|boolean> {
        
    }
       

}