import { BaseEntity } from "typeorm";
export declare class AccountEntity extends BaseEntity {
    id: number;
    username: number;
    password: string;
    permission: string;
}
