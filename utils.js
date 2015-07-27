/**
 * @module utils
 * author eray arslan
 */

var fs = require('fs');

module.exports = {
  generate_xml_sitemap : function (arr) {
    var root_path = 'http://gelmezsengel.me';
    var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    for (var i in arr) {
      xml += '<url>';
      xml += '<loc>'+ root_path + arr[i].path + '</loc>';
      xml += '</url>';
      i++;
    }
    xml += '</urlset>';
    return xml;
  },
  pathCheck : function(result, path, func, req) {
    if (result.length == 2 || result.length == 3 || result.length == 4) {
      if (result.length == 3 && result[0] === "" && result[2] === "") {
        func(path, req);
      } else if (result.length == 3 && result[0] === "") {
        func(path, req);
      } else if (result.length == 2 && result[0] === "") {
        func(path, req);
      } else if (result.length == 4 && result[0] === "" && result[3] === "") {
        func(path, req);
      }
    }
  },
  getClientIp : function (req) {
    var ipAddress;
    var forwardedIpsStr = req.header('x-forwarded-for');
    if (forwardedIpsStr) {
      var forwardedIps = forwardedIpsStr.split(',');
      ipAddress = forwardedIps[0];
    } if (!ipAddress) {
      ipAddress = req.connection.remoteAddress;
    } return ipAddress;
  },
  readFile : function (path, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        callback(err);
      }
      
      callback(data);
    });
  },
  jsonToSite : function (json) {
    var html = "<html>\n";
    html += "<head>\n";
    html += "<title>@admin</title>\n";
    html += "<script src='http://cdn.jsdelivr.net/lodash/3.10.0/lodash.min.js'></script>\n";
    html += "</head>\n";
    html += "<body>\n";
    html += "<script>\n";
    html += "var data = " + json + ";\n";
    html += "</script>\n";
    html += "</body>\n";
    html += "</html>\n";
    return html;
  }
};