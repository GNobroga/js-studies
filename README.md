# Novidades no Javascript ES2022


### Operador Await Global

Agora é permitido utilizar o await fora de um bloco async. (Só funciona se for top level stetement de um module)

```js
    const products = Array.from({ length: 5 }, (prev, index) => `Product ${index + 1}`);

    function getProducts() {
        return Promise.resolve("Gabriel está testando...");
    }

    await getProducts();
```

### Method At in List 

A introdução do **at** no prototype de Array permite acessar elementos de um Array mais facilmente.

```js
    const letters = ['a', 'b', 'c', 'd']

    // Modelo convencional
    letters[1] // 'b'
    letters[letters.length - 1] // 'd' (último item)

    // Com o uso do .at
    letters.at(1) // 'b'
    letters.at(-1) // 'd' (último item)
```


### Private method or property

Agora é possível declarar propriedades privadas dentro de uma classe sem precisar fazer gambiarras.

```js
    class Product {
        #name = 'Celular';
        #price = 200000000;

        get name() { return this.#name; };

        get price() { return this.#price; };
    }
```

### Utilização de Await pra aguardar promises com Yield

É possível utilizar o for of para aguardar valores assincronos vindo de uma Promise.

```js
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
```