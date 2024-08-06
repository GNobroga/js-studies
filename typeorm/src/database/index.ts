import { DataSource } from "typeorm";
import Admin from "../entities/Admin";
import Person from "../entities/Person";
import User from '../entities/User';
import UserView from "../view-entities/UserView";
import Post from "../entities/Post";
import PostSubscriber from "../subscribers/PostSubscriber";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'typeorm.db',
    entities: [User, Admin, Person, UserView, Post],
    logging: true,
    migrationsTableName: 'migration',
    migrations: [
        './dist/migrations/**/*.js',
    ],
    subscribers: [PostSubscriber],
    //synchronize: true,
    //dropSchema: true
})
 