import { ViewColumn, ViewEntity } from "typeorm";
import User from "../entities/User";
import Person from "../entities/Person";

// Serve para fazer projeções, é possível usar criteria ou sql nativo.
@ViewEntity({
    expression: (datasource) => {
        return datasource.createQueryBuilder()
        .select('user.name', 'name')
        .addSelect('user.email', 'email')
        .where('user.type = \'USER\'')
        .from(Person, 'user')
    },
})
export default class UserView {

    @ViewColumn()
    name: string;

    @ViewColumn()
    email: string;
}