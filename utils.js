/**
 * @module utils
 * author eray arslan
 */

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
  }
};