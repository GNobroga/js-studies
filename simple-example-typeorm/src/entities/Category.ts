import { Collection, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        () => Product, 
        (product) => product.category,
        { cascade: ['insert', 'recover'] })
    products: Product[];
    
    constructor(name: string) {
        this.name = name;
    }
}