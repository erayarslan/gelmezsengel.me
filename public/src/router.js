define(['jquery', 'backbone'], function($, Backbone) {
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      ':text': 'basic',
      ':prefix/:text': 'advanced',
      '*path': 'default'
    },

    index: function () {
      $("#name").html("BURAK");
      $("#prefix").html("İPNE");
      $("title").html("BurakOnganlimAmman88");
    },

    basic: function (text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html("İPNE");
      $("title").html(text + "limAmman88");
    },

    advanced: function (prefix, text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html(prefix.toUpperCase());
      $("title").html(text + "limAmman88");
    },

    default: function() {
      $("#name").html("404");
      $("#prefix").html("GELEMEDİ");
      $("title").html("Error" + "lumAmman88");
    }
  });
});