import http from 'node:http';

http.ServerResponse.prototype.json = function (data) {
    this.setHeader('Content-Type', 'application/json');
    this.write(JSON.stringify(data));
    this.end();
}

export default http;