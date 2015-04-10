requirejs.config({
  baseUrl: "/src/lib",
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    '../init': {
      deps: ['jquery']
    },
    'backbone.routefilter': {
      deps: ['backbone']
    }
  }
});

require(["jquery", "backbone", "../router", "../init"], function ($, Backbone, Router) {
  var router = new Router();

  $(document).on("click", "a:not([data-bypass])", function (evt) {
    var href = {prop: $(this).prop("href"), attr: $(this).attr("href")};
    var root = location.protocol + "//" + location.host + Backbone.history.options.root;

    if (href.prop && href.prop.slice(0, root.length) === root) {
      evt.preventDefault();
      Backbone.history.navigate(href.attr, true);
    }
  });

  Backbone.history.start({pushState: true});
});