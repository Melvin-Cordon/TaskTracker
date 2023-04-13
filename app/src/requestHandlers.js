const render = require('./Rendering');
const db = require('../db/database')
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
    },

    POST_route: function(request, response) {  
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/newTodo':
                let body = '';
                request.on('data', (chunk) => {
                    body += chunk.toString();
                  });

                request.on('end', () => {
                const postData = JSON.parse(body);
                console.log('Received POST data:', postData);
                if (postData.length > 0) {
                db.add_task_card(postData.key1, postData.key2);
                }

                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: 'Data received successfully' }));

                    


                  });

                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
  };