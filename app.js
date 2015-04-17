/**
 * @server app
 * author eray arslan
 */

var express = require('express');
var app = express();
var fileSystem = require('fs');
var logFile = fileSystem.createWriteStream('log.txt', {flags: 'a'});

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger({stream: logFile}));
});

app.get('*', function (request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 4141);