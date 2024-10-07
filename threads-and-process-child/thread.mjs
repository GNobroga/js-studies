import https from 'https';
import { parentPort, threadId } from 'node:worker_threads';

// ParentPort allows interaction with the main thread.
parentPort.once('message', url => {
    console.log(`The current thread id ${threadId}`);

    https.get(url, res => {
        let json = '';

        res.on('data', chunk => {
           json = json.concat(chunk);
        });
        res.on('end', () => {
            parentPort.postMessage(json);
        })
    });

});


