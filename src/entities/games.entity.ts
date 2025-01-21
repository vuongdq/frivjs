import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn } from "typeorm";
import { CategoriesEntity } from "./categories.entity";

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

    @ManyToOne(()=>CategoriesEntity)
    @JoinColumn({name:'categoryID', referencedColumnName:'id'})
    category:CategoriesEntity;
}