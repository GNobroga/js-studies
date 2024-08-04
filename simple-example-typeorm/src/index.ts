import 'reflect-metadata';
import { Collection, DataSource } from 'typeorm';
import { Product } from './entities/Product';
import { Category } from './entities/Category';

const db = new DataSource({
    type: 'sqlite',
    synchronize: true,
    database: 'test.db',
    entities: [Product, Category],
    logging: true,
})

db.initialize().then(() => app());

function app() {
    //const categoryRepository = db.getRepository(Category);
    //const category = categoryRepository.find({ where: { id: 1 }});
    const productRepository = db.getRepository(Product);

    const categoryExisting = new Category('dsdsd');
    categoryExisting.id = 1;
    const p3 = new Product('Celular 3', categoryExisting);

    // const p1 = new Product('Celular 1', category);
    // const p2 = new Product('Celular 2', category);


    // category.products = [p1, p2];

    productRepository.save(p3);


}