import { DataSource } from "../../node_modules/typeorm";
import Admin from "../entities/Admin";
import Person from "../entities/Person";
import User from '../entities/User';
import UserView from "../view-entities/UserView";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'typeorm.db',
    entities: [User, Admin, Person, UserView],
    logging: true,
    synchronize: true,
    //dropSchema: true
})
