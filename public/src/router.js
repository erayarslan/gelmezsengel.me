define(['jquery', 'underscore', 'backbone', 'text!templates/content.html', 'backbone.routefilter'], function ($, _, Backbone, templateContent) {
  var setWords = function (name, prefix) {
    $("#content").html(_.template(templateContent)({prefix: prefix.toUpperCase(), name: name.toUpperCase()}));
    $("title").html(name + "limAmman88");
  };

  var setMetas = function (name, prefix) {
    $("#og_title").attr("content", name + "limAmman88");
    $("#og_description").attr("content", prefix.toUpperCase() + " " + name.toUpperCase());
    $("#og_image").attr("content", "http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|" + prefix.toUpperCase());
  };

  var setDatas = function (name, prefix) {
    setWords(name, prefix);
    setMetas(name, prefix);
  };

  return Backbone.Router.extend({
    routes: {
      '': 'index',
      ':text(/)': 'basic',
      ':prefix/:text(/)': 'advanced',
      '*path': 'default'
    },

    before: function (route, params) {
    },

    after: function (route, params) {
    },

    index: function () {
      setDatas("BURAK", "İPNE")
    },

    basic: function (text) {
      setDatas(text, "İPNE");
    },

    advanced: function (prefix, text) {
      setDatas(text, prefix);
    },

    default: function () {
      setDatas("İPNE", "GELEMEDİ");
    }
  });
});