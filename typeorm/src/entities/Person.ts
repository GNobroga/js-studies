import { Column, Entity, Table, TableInheritance } from "typeorm";
import { Name } from "./Name";
import Address from "./Address";

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' }})
export default class Person {

    @Column(() => Name)
    name: Name;

    @Column(() => Address)
    address: Address;
}