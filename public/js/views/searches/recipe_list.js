App.Models.Recipes = Backbone.Model.extend({
el: '#search-container',

initialize: function() {
  this.listenTo(this.collection, 'reset', this.render);
  this.listenTo(this.collection, 'add', this.renderOne);
  },
render: function() {
    $('#recipe-results-container').empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(recipe) {
    var receipeView = new App.Views.Recipe({ model: recipe });
    recipeView.$el.appendTo($('#recipe-results-container'));
  }

});

