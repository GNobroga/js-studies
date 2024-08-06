import { Column } from "typeorm";

export default class Address {

    @Column({ name: 'street' })
    street: string;

    @Column({ name: 'neighborhood' })
    neighborhood: string;

    @Column({ name: 'number' })
    number: number;

    constructor(street: string, neighborhood: string, number: number){
        this.street = street;
        this.neighborhood = neighborhood;
        this.number = number;
    }
}   