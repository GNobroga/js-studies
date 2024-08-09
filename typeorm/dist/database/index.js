"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Admin_1 = __importDefault(require("../entities/Admin"));
const Person_1 = __importDefault(require("../entities/Person"));
const User_1 = __importDefault(require("../entities/User"));
const UserView_1 = __importDefault(require("../view-entities/UserView"));
const Post_1 = __importDefault(require("../entities/Post"));
const PostSubscriber_1 = __importDefault(require("../subscribers/PostSubscriber"));
const Comment_1 = __importDefault(require("../entities/Comment"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'typeorm.db',
    entities: [User_1.default, Admin_1.default, Person_1.default, UserView_1.default, Post_1.default, Comment_1.default],
    logging: true,
    migrationsTableName: 'migration',
    migrations: [
        './dist/migrations/**/*.js',
    ],
    subscribers: [PostSubscriber_1.default],
    //synchronize: true,
    //dropSchema: true
});
