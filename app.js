/**
 * @server app
 * author eray arslan
 */

var express = require('express');
var utils = require("./utils");
var fileSystem = require('fs');
var low = require('lowdb');

var db_name = "paths";
var logFile = fileSystem.createWriteStream('log.txt', {flags: 'a'});
var db = new low('gelmezsengelme.json', {autosave: true});
var hook = new low('hook.json', {autosave: true});
var app = express();

var saveOrUpdate = function (path, req) {
  if (!(db(db_name).filter({path: path})).length >= 1) {
    db(db_name).push({
      path: path,
      ip: utils.getClientIp(req),
      "user-agent": req.headers["user-agent"],
      date: new Date(),
      url: req.url
    });
  }
};

app.configure(function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger({stream: logFile}));
});

app.post('/hook', function (request, response) {
  hook("hooks").push(request.body);
  response.status(200).json({status: "OK"});
});

app.get('/admin/:security', function (request, response) {
  utils.readFile("./security.txt", function (result) {
    if (result.trim() === request.params.security) {
      utils.readFile("./gelmezsengelme.json", function (result) {
        response.header("Content-Type", "text/html").send(utils.jsonToSite(result));
      });
    } else {
      response.json({
        "get": "out"
      });
    }
  });
});

app.get('/sitemap.xml', function (request, response) {
  response.header('Content-Type', 'text/xml').send(utils.generate_xml_sitemap(db(db_name).filter()));
});

app.get('*', function (request, response) {
  if (request.path !== "/favicon.ico") {
    utils.pathCheck(request.path.split("/"), request.path, saveOrUpdate, request);
  }
  response.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 4141);
