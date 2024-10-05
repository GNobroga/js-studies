function * getPromises(length) {
    if (!arguments.length && typeof arguments[0] !== 'number') {
        throw new Error('The lenght argument is required and must be a number.');
    }
    for (const i in Array.from({ length })) {
        return new Promise.resolve(i);
    }
}

(async () => {
    for await (const result of getPromises()) {
        console.log(result);
    }
})();

