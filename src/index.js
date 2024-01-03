//Await permitido fora de async

const products = Array.from({ length: 5 }, (prev, index) => `Product ${index + 1}`);

function getProducts() {
    return Promise.resolve("Gabriel está testando...");
}

await getProducts();

async function* getValues() {
    for (let i = 0; i < 10; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => resolve({ name: 'Gabriel ' + (i + 1) }), 100 * i);
        });
    }
}

(async () => {
    for await (const value of getValues()) {
        console.log(value);
    }
})();

