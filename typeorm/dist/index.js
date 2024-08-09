"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("./database");
const Post_1 = __importDefault(require("./entities/Post"));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield database_1.AppDataSource.initialize();
        //     const userRepository = AppDataSource.getRepository(User);
        //     const adminRepository = AppDataSource.getRepository(Admin);
        //     const nameOfUser = new Name('Gabriel', 'Cardoso');
        //     const addressOfUser = new Address('Rod. Família Requieri', 'Santo Agostinho', 95);
        //     const nameOfAdmin = new Name('Tiaguinho', 'Da Silva');
        //     const addressOfAdmin = new Address('Nossa senhora', 'Penha', 192);
        //     const user = new User();
        //     user.name = nameOfUser;
        //     user.address = addressOfUser;
        //     user.email = 'gabrielcardoso_stelo@hotmail.com';
        //     const admin = new Admin();
        //     admin.name = nameOfAdmin;
        //     admin.address = addressOfAdmin;
        //    userRepository.save(user);
        //    adminRepository.save(admin);
        //    (await AppDataSource.manager.find(UserView)).forEach(console.log);
        yield database_1.AppDataSource.manager.createQueryBuilder()
            .insert()
            .into(Post_1.default)
            .values({
            title: 'First Post',
            description: 'Mamushi',
        }).execute();
        const post = yield database_1.AppDataSource.getRepository(Post_1.default).findOne({
            where: {
                id: 1,
            },
        });
        database_1.AppDataSource.manager.createQueryBuilder()
            .relation(Post_1.default, 'comments')
            .of(post)
            .add([
            {
                description: 'Olá, mundo!',
            },
            {
                description: 'Hello World!',
            },
        ]);
        const postRecovered = yield database_1.AppDataSource.getRepository(Post_1.default).findOne({
            where: {
                id: 1,
            },
        });
        console.log('Post recovered');
        (_a = postRecovered.comments) === null || _a === void 0 ? void 0 : _a.forEach(comment => {
            console.table(comment);
        });
    });
})();
