(function () {
  'use strict';

  var App = Backbone.Router.extend({
    routes: {
      '': 'index',
      ':text': 'hello',
      ':prefix/:text': 'personal'
    },

    hello: function (text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html("iPNE");
      $("title").html(text + "limAmman88");
    },

    index: function () {
      $("#name").html("BURAK");
      $("#prefix").html("iPNE");
      $("title").html("BurakOnganlimAmman88");
    },

    personal: function (prefix, text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html(prefix.toUpperCase());
      $("title").html(text + "limAmman88");
    }
  });

  var app = new App();
  Backbone.history.start({ pushState: true });
})();