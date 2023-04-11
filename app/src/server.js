const http = require('node:http');
const requestHandler = require('./requestHandlers')

const port = 3000;
const hostname = 'localhost'
const server = http.createServer(requestHandler.handleRequest);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});