import { fork } from 'child_process';

const child = fork('./big-calculation.mjs');

child.on('message', data => {
    console.log(data);
})

console.log('Run another tasks...');
