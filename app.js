var express = require('express'),
  path = require('path'),
  port = process.env.PORT || 4141,
  app = express();

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
});

app.get('*', function (request, response) {
  response.sendfile('./public/index.html');
});

app.listen(port);