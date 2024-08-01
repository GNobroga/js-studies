const { createServer } = require('http');
const { matchesPathPattern, extractPathVariable } = require('./utils');
const url = require('url');

class Server {

    #handlers = []

    #addPolyfill(request, response, endpoint, path) {
        Object.assign(Object.getPrototypeOf(response), {
            json(obj) {
               response.end(JSON.stringify(obj));
            },
            status(code) {
                response.writeHead(code, { 'Content-Type': 'application/json' });
                return this;
            }
        });

        Object.assign(Object.getPrototypeOf(request), {
            pathVariables: extractPathVariable(endpoint, path),
            queryParams: { ...url.parse(request.queryParamsUrl, true).query },
        });

    }

    #readBody(request) {
        return new Promise(resolve => request.addListener('data', chunk => resolve(JSON.parse(chunk))));
    }

    run(port) {
        const server = createServer(async (request, response) => {
            let matchedWithSomePath = false;
            const urlWithQueryParams = request.url;
            request.body = await this.#readBody(request);
            request.url = request.url.split('?')[0];
            for (const handler of this.#handlers) {
                if (matchesPathPattern(handler, request)) {
                    this.#addPolyfill(
                        {...request, queryParamsUrl: urlWithQueryParams}, 
                        response, 
                        handler.endpoint, 
                        request.url
                    );
                    handler.action(request, response);;
                    matchedWithSomePath = true;
                    break;
                }
            }

            if (!matchedWithSomePath) {
                response.writeHead(404, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: "Rota não encontrada" }));
            }

            
        });
        
        server.listen(port, () => {
            console.log(`The server is open on http://localhost:${port}`);
        });
        return this;
    }

    /**
     * 
     * @param {string} path 
     * @param {action: (req, res) => any } action
     */
    get(path, handler) {
        this.registerHandler({
            endpoint: path,
            method: 'GET',
            action: handler,
        });

        return this;
    }

    /**
     * 
     * @param {string} path 
     * @param {action: (req, res) => any } action
     */
    post(path, handler) {
        this.registerHandler({
            endpoint: path,
            method: 'POST',
            action: handler,
        });

        return this;
    }


    /**
     * 
     * @param {{ endpoint: string; method: string; action: (req, res) => any }} handle 
     */
    registerHandler(handle) {
        this.#handlers.push(handle);
        return this;
    }

}

module.exports = Server;