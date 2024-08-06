import { Column } from "typeorm";

export class Name {

    @Column()
    name: string;

    @Column()
    familyName: string;

    constructor(name: string, familyName: string) {
        this.name = name;
        this.familyName = familyName;
    }
}