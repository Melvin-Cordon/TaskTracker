const http = require('node:http');
const routers = require('./routers')

const port = 3000;
const hostname = 'localhost'
const server = http.createServer(routers.router);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});