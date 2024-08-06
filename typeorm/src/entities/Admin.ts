import { ChildEntity, PrimaryGeneratedColumn } from "typeorm";
import Person from "./Person";

@ChildEntity('ADMIN')
export default class Admin extends Person {

    @PrimaryGeneratedColumn()
    id: number;
}