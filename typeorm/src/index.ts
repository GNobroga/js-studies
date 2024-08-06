import 'reflect-metadata';
import { AppDataSource } from './database';
import User from './entities/User';
import Admin from './entities/Admin';
import { Name } from './entities/embedded/Name';
import Address from './entities/embedded/Address';
import UserView from './view-entities/UserView';
import Post from './entities/Post';

(async function() {
    await AppDataSource.initialize();
    
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

    // await AppDataSource.manager.createQueryBuilder()
    //     .insert()
    //     .into(Post)
    //     .values({
    //         title: 'First Post',
    //         description: 'Mamushi',
    //     }).execute();

    await AppDataSource.getRepository(Post).findOne({
        where: {
            id: 1,
        },
    });

})();



