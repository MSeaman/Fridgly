App.Views.Search = Backbone.View.extend({

  el: '#search-container',
  events: {
    'click .search-button': 'search',
    'click .advanced-search-button': 'advancedSearch'
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderAll);
  },
 
  renderAll: function() {
    $('#search-ingredients-container').empty();
    this.collection.each(this.renderOne, this)
  },

  renderOne: function(ingredient) {
    var searchResultView = new App.Views.FridgeIngredient({model: ingredient});
    searchResultView.$el.appendTo($('#search-ingredients-container'));
  },

  search: function () {
    App.recipes.search();
  },

  advancedSearch: function(){

  }
});