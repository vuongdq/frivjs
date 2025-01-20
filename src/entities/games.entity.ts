import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export class GamesEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    categoryID:number;
    @Column()
    gameTitle: string;
    @Column()
    gameDescription?:string;
    @Column()
    gameImage:string;
    @Column()
    gameFile:string;
}