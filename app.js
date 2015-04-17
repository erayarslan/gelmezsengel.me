/**
 * @server app
 * author eray arslan
 */

var express = require('express');
var app = express();
var fileSystem = require('fs');
var sitemap = require('express-sitemap');
var logFile = fileSystem.createWriteStream('log.txt', {flags: 'a'});

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger({stream: logFile}));
});

app.get('/sitemap.xml', function(request, response) {
  map.XMLtoWeb(response);
});

app.get('/robots.txt', function(request, response) {
  map.TXTtoWeb(response);
});

app.get('*', function (request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

var map = sitemap({
  generate: app
});

app.listen(process.env.PORT || 4141);