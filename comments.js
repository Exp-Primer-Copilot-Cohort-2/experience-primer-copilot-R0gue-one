// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/', function(req, res) {
    res.send('Hello, World!');
});

// Create a route with a parameter
app.get('/comments/:id', function(req, res) {
    res.send('The comment id is: ' + req.params.id);
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});