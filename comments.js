// Create a web server
// Create a route for /comments
// Create a route for /comments/new
// Create a route for /comments/:id
// Create a route for /comments/:id/edit
// Create a route for /comments/:id/delete

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

app.get('/comments/new', function(req, res) {
  res.send('This is the new comments page');
});

app.get('/comments/:id', function(req, res) {
  res.send('This is the comments page for ' + req.params.id);
});

app.get('/comments/:id/edit', function(req, res) {
  res.send('This is the edit comments page for ' + req.params.id);
});

app.get('/comments/:id/delete', function(req, res) {
  res.send('This is the delete comments page for ' + req.params.id);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

