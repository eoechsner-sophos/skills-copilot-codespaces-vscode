// Create web server
// Create a web server that listens for incoming requests on port 3000, and serves a simple JSON object when it receives a request to the URL /comments.

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ body: 'This is a JSON response' }));
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

// Run the program by executing the following command in your terminal:
// $ node comments.js
// Visit http://localhost:3000/comments in your browser, and you should see the JSON response