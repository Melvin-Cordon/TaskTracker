const requestHandler = require('./requestHandlers');
var url = require('url');
var fs = require('fs');

module.exports = {
    
    router: function(request, response) {  
        switch (request.method) {
            case 'GET':
                requestHandler.GET_route(request, response);
                break;
            case 'POST':
                requestHandler.POST_route(request, response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
  };