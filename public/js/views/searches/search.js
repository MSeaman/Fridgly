App.Views.Search = Backbone.View.extend({

  el: '#search-container',

  events: {
    'click .search-button': 'search',
    'click .advanced-search-button': 'advancedSearch',
    'click .reset-search-button': 'reset',
    'click .remove-from-search-button': 'removeFromSearch'
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderAll);
    $('#advanced-search-container').hide();
    $('#recipe-results-container').hide();

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
    $('#recipe-results-container').show();
    App.recipes.search();
    
  },

  reset: function(){
    console.log('reset button clicked');
    App.searchIngredients.forEach(function(ingredient){
      App.searchIngredients.remove(ingredient);
      $('#search-ingredients-container').empty();
      $('#recipe-results-container').empty();
      $('#recipe-results-container').hide();
    });
  },

  // removeFromSearch: function () {
  //   // debugger
  //   console.log('remove from search button click');
  //   var search = $('#search-ingredients-container');
  //   for (var i = 0; i < search.children().length; i++) {
  //     if (search.children().eq(i).children().children().is(':checked') === true) {
  //       var ingredientId = parseInt(search.children().eq(i).children().attr('data-id'));
  //       var movedIngredient = App.searchIngredients.findWhere({fridgeIngId: ingredientId});
  //       this.collection.remove(movedIngredient);
  //     }
  //   }
  // },

  advancedSearch: function(){

    //clicks advanced search button and new advanced search view is created and rendered
    var advancedSearchView =  new App.Views.AdvancedSearch;
    $('#advanced-search-container').show();

  }

});










