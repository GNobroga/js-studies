import { Column, Entity, Table, TableInheritance } from "typeorm";
import { Name } from "./embedded/Name";
import Address from "./embedded/Address";

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' }})
export default class Person {

    @Column(() => Name)
    name: Name;

    @Column(() => Address)
    address: Address;
}