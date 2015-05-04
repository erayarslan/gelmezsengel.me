/**
 * @server app
 * author eray arslan
 */

var db_name = "paths";
var express = require('express');
var app = express();
var fileSystem = require('fs');
var logFile = fileSystem.createWriteStream('log.txt', {flags: 'a'});
var low = require('lowdb');
var db = new low('gelmezsengelme.json', {
  autosave: true
});
var utils = require("./utils");

var saveOrUpdate = function (path) {
  if (!(db(db_name).filter({path: path})).length >= 1) {
    db(db_name).push({path: path});
  }
};

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger({stream: logFile}));
});

app.get('/sitemap.xml', function (request, response) {
  response.header('Content-Type', 'text/xml').send(utils.generate_xml_sitemap(db(db_name).filter()));
});

app.get('*', function (request, response) {
  if (request.path !== "/favicon.ico") {
    utils.pathCheck(request.path.split("/"), request.path, saveOrUpdate);
  }
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 4141);