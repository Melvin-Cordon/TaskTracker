const render = require('./Rendering');
var url = require('url');
var fs = require('fs');

module.exports = {
    
    GET_route: function(request, response) {  
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                render.HTML('../views/index.html', response);
                break;
            case '/index.js':
                render.JS('../views/index.js', response);
                break;
            case '/Werk_logo.PNG':
                render.Img('../views/Werk_logo.PNG', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
  };