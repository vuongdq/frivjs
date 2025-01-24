import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('accounts')
export class AccountEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;
    @Column()
    password: string;
    @Column()
    permission:string;

}