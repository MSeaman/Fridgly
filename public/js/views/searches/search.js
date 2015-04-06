App.Views.Search = Backbone.View.extend({

  el: '#search-container',

  events: {
    'click .search-button': 'search',
    'click .advanced-search-button': 'advancedSearch',
    'click .reset-search-button': 'reset'
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

  reset: function(){
    console.log('reset button clicked');
    App.searchIngredients.forEach(function(ingredient){
      App.searchIngredients.remove(ingredient);
      $('#search-ingredients-container').empty();
    });
  },

  advancedSearch: function(){

  }

});










