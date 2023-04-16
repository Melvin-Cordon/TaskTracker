var url = require('url');
var fs = require('fs');

module.exports = {

    HTML: function (path, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(path, null, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    },

    JS: function (path, response) {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.readFile(path, null, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    },

    Img: function (path, response) {
        response.writeHead(200, {'Content-Type': 'image/png'});
        fs.readFile(path, null, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    },

    JSON: function (path, response) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        fs.readFile(path, null, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    },
};