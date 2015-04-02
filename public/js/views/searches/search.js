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

  search: function () {
    console.log('search button has been clicked brough');
    var includeIngredient = '&allowedIngredient%5B%5D=';
    var excludeIngredient = '&excludedIngredient%5B%5D=';
    var allergy = '&allowedAllergy%5B%5D=';
    var diet = '&allowedDiet%5B%5D=';
    var includeCuisine = '&allowedCuisine%5B%5D=';
    var excludeCuisine = '&excludedCuisine%5B%5D=';
    var includeCourse = '&allowedCourse%5B%5D=';
    var excludeCourse = '&excludedCourse%5B%5D=';
    var includeHoliday = '&allowedHoliday%5B%5D=';
    var excludeHoliday = '&excludedHoliday%5B%5D=';
    var maxCookTime = '&maxTotalTimeInSeconds=';

    var apiKey = '?_app_id=66a10d93&_app_key=8bfd076a86bb08e4c703da382368127c';


   // Search Recipes = base + apiKey + Options ( such as - includedIngredient (lowercase url friendly))
    var searchRecipesBase = 'http://api.yummly.com/v1/api/recipes' + apiKey;

     // Get Recipe = base + Selected Recipe ID string + apiKey
    var getRecipeBase = 'http://api.yummly.com/v1/api/recipe';
    var searchTerms = [];
    var search = $('#search-ingredients-container');
    for (var i = 0; i < search.children().length; i ++){
      var ingredientId = parseInt(search.children().eq(i).children().eq(0).attr('data-id'));
      var searchedIngredient = App.searchIngredients.findWhere({fridgeIngId: ingredientId});
      var ingredientUrlFragment = includeIngredient + encodeURI(searchedIngredient.attributes.name).toLowerCase();
      searchTerms.push(ingredientUrlFragment);
      };
    var newSearchTerms = searchTerms.join('');
    var newUrl = searchRecipesBase + newSearchTerms;
  
  },

  showResults: function() {
    App.searchResults.model = this.model;
    App.searchResults.render();
    App.searchResults.showResults();
  },

  advancedSearch: function(){

  }
});










