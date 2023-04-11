var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
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
}

function renderJS(path, response) {
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
}

function renderImagesPNG(path, response) {
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
}

module.exports = {
    handleRequest: function(request, response) {
  
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('../views/index.html', response);
                break;
            case '/index.js':
                renderJS('../views/index.js', response);
                break;
            case '/Werk_logo.PNG':
                renderImagesPNG('../views/Werk_logo.PNG', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
  
    }
  };