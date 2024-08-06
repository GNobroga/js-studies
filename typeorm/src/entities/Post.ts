import { AfterInsert, AfterRecover, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'post',
})
export default class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @AfterRecover() 
    onRecover() {
        console.log(`Hello, I'm the post with id ${this.id}.`);
    }
}