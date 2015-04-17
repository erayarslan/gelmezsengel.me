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

app.get('/robots.txt', function (request, response) {
  response.sendfile(__dirname + '/robots.txt');
});

app.get('*', function (request, response) {
  if (request.path !== "/favicon.ico") {
    var result = request.path.split("/");
    if (result.length == 2 || result.length == 3 || result.length == 4) {
      if (result.length == 3 && result[0] === "" && result[2] === "") {
        saveOrUpdate(/* "", result[1] */ request.path);
      } else if (result.length == 3 && result[0] === "") {
        saveOrUpdate(/* result[1], result[2] */ request.path);
      } else if (result.length == 2 && result[0] === "") {
        saveOrUpdate(/* "", result[1] */ request.path);
      } else if (result.length == 4 && result[0] === "" && result[3] === "") {
        saveOrUpdate(/* result[1], result[2] */ request.path);
      }
    }
  }
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 4141);