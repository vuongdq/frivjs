import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from "src/dto/auth.dto";
import { AccountEntity } from "src/entities/accounts.entity";
import { IAuthRepository } from "src/interfaces/IAuthRepository";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Role } from "src/global/globalEnum";

@Injectable()
export class AuthRepository implements IAuthRepository 
{
    constructor(@InjectRepository(AccountEntity) 
    protected readonly repository: Repository<AccountEntity>)
{

}
    async signIn(body: AuthPayloadDto): Promise<boolean|AuthPermission>
    {
        return true;

    }
    async signUp(body: AuthPayloadDto): Promise<AuthResponseDto> {
        const { username, password } = body;
        const salt = await bcrypt.genSaltc(10);
        const hash = await bcrypt.hash(password, salt);
        return this.repository.save({
            username,
            password: hash,
            permission: Role.Admin
        })

    }
}