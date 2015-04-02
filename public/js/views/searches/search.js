App.Views.Search = Backbone.View.extend({

  el: '#search-ingredients-container',
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
  //fix and comment back in for search calls
	search: function() {
    var search = $('#search-container');
      for (var i = 0; i < search.children().length; i ++){
      var ingredientId = search.children().eq(i).children().eq(0).attr('name');
      }
      debugger
    var apiRootKey = 'http://api.yummly.com/v1/api/recipes?_app_id=66a10d93&_app_key=8bfd076a86bb08e4c703da382368127c';
    $.ajax({
      url: apiRootKey + userInput,
      method: 'GET'
    }).done(this.showResults.bind(this));
  },

  showResults: function() {
    App.searchResults.model = this.model;
    App.searchResults.render();
    App.searchResults.showResults();
  },

  advancedSearch: function(){

  }
})