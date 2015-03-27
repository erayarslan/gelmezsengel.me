(function () {
  'use strict';

  var App = Backbone.Router.extend({
    routes: {
      '': 'index',
      ':text': 'hello'
    },

    hello: function (text) {
      $("#name").html(text.toUpperCase());
      $("title").html(text + "limAmman88");
    },

    index: function(){
      $("#name").html("BURAK");
      $("title").html("BurakOnganlimAmman88");
    }
  });

  var app = new App();
  Backbone.history.start({ pushState : true });
})();