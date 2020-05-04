var http = require('http');

http.createServer(function (req, res) {
    res.write('Maratona Full Cycle 2.0');
    res.end();
  }).listen(3000);