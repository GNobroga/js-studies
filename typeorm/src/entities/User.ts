import { ChildEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Person from "./Person";

@ChildEntity('USER') // Permite especificar um Single Table com um discriminator.
export default class User extends Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}