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
      $('meta[property="og:title"]').remove();
      $('head').append( '<meta name="og:title" content="'+'BurakOnganlimAmman88'+'">' );

      $('meta[property="og:description"]').remove();
      $('head').append( '<meta name="og:description" content="'+'İPNE' + ' ' + 'BURAK' +'">' );

      $('meta[property="og:image"]').remove();
      $('head').append( '<meta name="og:image" content="http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|amk"' );
    },

    basic: function (text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html("İPNE");
      $("title").html(text + "limAmman88");
      //
      $('meta[property="og:title"]').remove();
      $('head').append( '<meta name="og:title" content="'+text + 'limAmman88'+'">' );

      $('meta[property="og:description"]').remove();
      $('head').append( '<meta name="og:description" content="' + 'İPNE' + ' ' + text.toUpperCase() +'">' );

      $('meta[property="og:image"]').remove();
      $('head').append( '<meta name="og:image" content="http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|İPNE"' );
    },

    advanced: function (prefix, text) {
      $("#name").html(text.toUpperCase());
      $("#prefix").html(prefix.toUpperCase());
      $("title").html(text + "limAmman88");
      //
      $('meta[property="og:title"]').remove();
      $('head').append( '<meta name="og:title" content="'+text + 'limAmman88'+'">' );

      $('meta[property="og:description"]').remove();
      $('head').append( '<meta name="og:description" content="'+prefix.toUpperCase() + ' ' + text.toUpperCase() +'">' );

      $('meta[property="og:image"]').remove();
      $('head').append( '<meta name="og:image" content="http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|' + prefix.toUpperCase() + '"' );
    },

    default: function() {
      $("#name").html("404");
      $("#prefix").html("GELEMEDİ");
      $("title").html("Error" + "lumAmman88");
      //
      $('meta[property="og:title"]').remove();
      $('head').append( '<meta name="og:title" content="'+'ErrorlumAmman88'+'">' );

      $('meta[property="og:description"]').remove();
      $('head').append( '<meta name="og:description" content="'+'GELEMEDİ' + ' ' + '404' +'">' );

      $('meta[property="og:image"]').remove();
      $('head').append( '<meta name="og:image" content="http://chart.apis.google.com/chart?chst=d_text_outline&chld=000000|48|h|FFFFFF|_|404"' );
    }
  });
});