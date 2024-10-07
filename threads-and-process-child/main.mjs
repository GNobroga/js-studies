import { Worker } from "node:worker_threads";

const createThread = options => {
    // Worker: allows the creation and interaction with a thread
    const worker = new Worker('./thread.mjs');
    worker.postMessage(options);

    worker.once('message', data => {
        console.log('Thread response: ');
        console.log(data);
    });

    worker.once('error', err => {
        console.log(err.message)
        console.log('An error has occurred.');
    })
};

createThread('https://jsonplaceholder.typicode.com/posts');
createThread('https://jsonplaceholder.typicode.com/comments');

function anotherProcess() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Another Process');
        });
    });
}

const result = await anotherProcess();

console.log(result);