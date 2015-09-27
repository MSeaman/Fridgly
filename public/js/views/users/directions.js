App.Views.Direction = Backbone.View.extend({

  events: {
    'click .expand-button': 'expand',
    'click .hide-button': 'hide'
  },

  el: 'body',

  expand: function() {
    $('#direction-text').toggle('slow', function(){

    });
  },

  hide: function() {
    $('#direction-text').toggle('slow', function(){

    });
  }

});