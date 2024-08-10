// create a web server
// 1. load the express module
var express = require('express');
// 2. create a web server
var app = express();
// 3. define a route
app.get('/', function(request, response) {
    response.send('Hello World');
});
// 4. listen on a port
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
// 5. run the server
// $ node comments.js
// open a browser and go to http://localhost:3000
// you should see "Hello World" on the page
// you should see "Server is listening on port 3000" in the terminal