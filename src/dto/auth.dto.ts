export class AuthResponseDto {
    id: number;
    username: string;
    permission: string;

    constructor({id, username, permission}) {    
        this.id = id;
        this.username = username;
        this.permission = permission;
        return this;
    }
}
export class AuthPayloadDto {
    username?: string;
    password?: string;
}
export class AuthPermission{
    id?: number;
    token?: string;
    expiresTime?: number;
    constructor(id, token, expiresTime) {
        this.id = id;
        this.token = token;
        this.expiresTime = expiresTime;
        return this;
    }
}