define(['jquery', 'backbone'], function($, Backbone) {
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      ':text(/)': 'basic',
      ':prefix/:text(/)': 'advanced',
      '*path': 'default'
    },

    index: function () {
      $("#name").html("BURAK");
      $("#prefix").html("İPNE");
      $("title").html("BurakOnganlimAmman88");
      //
      $("#og_title").attr("content", "BurakOnganlimAmman88");
      $("#og_description").attr("content", "İPNE BURAK");
      $("#og_image").attr("content", "http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|İPNE");
    },

    basic: function (text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html("İPNE");
      $("title").html(text + "limAmman88");
      //
      $("#og_title").attr("content", text + "limAmman88");
      $("#og_description").attr("content", "İPNE " + text.toUpperCase());
      $("#og_image").attr("content", "http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|İPNE");
    },

    advanced: function (prefix, text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html(prefix.toUpperCase());
      $("title").html(text + "limAmman88");
      //
      $("#og_title").attr("content", text + "limAmman88");
      $("#og_description").attr("content", prefix.toUpperCase() + " " + text.toUpperCase());
      $("#og_image").attr("content", "http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|" + prefix.toUpperCase());
    },

    default: function() {
      $("#name").html("404");
      $("#prefix").html("GELEMEDİ");
      $("title").html("Error" + "lumAmman88");
      //
      $("#og_title").attr("content", "ErrorlumAmman88");
      $("#og_description").attr("content", "GELEMEDİ 404");
      $("#og_image").attr("content", "http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|404");
    }
  });
});