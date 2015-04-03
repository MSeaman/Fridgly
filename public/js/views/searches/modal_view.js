App.Views.Recip = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#recipe-list-item-template').html());
    this.render();
  },
  events: {
    'click': 'showModal'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  showModal: function() {
    // Begins sequence of events to get full movie details
    // and who the resulting modal.  
    App.movieModalView.setMovie(this.model);
    App.movieModalView.show();
    var path = 'movies/' + this.model.get('imdbID');
    path += '/' + encodeURI(App.moviesView.currentQuery);
    App.movieRouter.navigate(path);
  }
});
