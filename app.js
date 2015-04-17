/**
 * @server app
 * author eray arslan
 */

var express = require('express');
var app = express();
var fileSystem = require('fs');
var logFile = fileSystem.createWriteStream('log.txt', {flags: 'a'});
var loki = require('lokijs');
var db = new loki('gelmezsengelme.json');
var paths = db.addCollection('paths');
var utils = require("./utils");

var saveOrUpdate = function (path) {
  if (!(paths.find({'path': path}).length >= 1)) {
    paths.insert({path: path});
  }
};

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger({stream: logFile}));
});

app.get('/sitemap.xml', function (request, response) {
  response.header('Content-Type','text/xml').send(utils.generate_xml_sitemap(paths.find({})));
});

app.get('*', function (request, response) {
  if (request.path !== "/favicon.ico") {
    utils.pathCheck(request.path.split("/"), request.path, saveOrUpdate);
  }
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 4141);