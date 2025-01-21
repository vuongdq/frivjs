import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { GamesEntity } from "./games.entity";

@Entity('categories')
export class CategoriesEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    categoryName:string;

    @Column()
    description: string;


    @OneToMany(()=>GamesEntity, games =>games.category )
    @JoinColumn()
    games:GamesEntity[];

}