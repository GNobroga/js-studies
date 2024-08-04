import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @JoinColumn({ name: 'category_id' })
    @ManyToOne(
        () => Category, 
        (category) => category.products, 
    )
    category: Category;

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category;
    }
    
}