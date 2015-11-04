App.Collections.Recipes = Backbone.Collection.extend({

  model: App.Models.Recipe,

  localStorage: new Backbone.LocalStorage('recipes'),

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
    var searchRecipesBase = 'https://api.yummly.com/v1/api/recipes' + apiKey;
    // Get Recipe = base + Selected Recipe ID string + apiKey
    var getRecipeBase = 'https://api.yummly.com/v1/api/recipe';
    var searchTerms = [];
    var search = $('#search-ingredients-container');
    var pantrySearch = $('#pantry-ingredients-list-container');
    for (var i = 0; i < search.children().length; i++) {
      var ingredientId = parseInt(search.children().eq(i).children().eq(0).attr('data-id'));
      var searchedIngredient = App.searchIngredients.findWhere({fridgeIngId: ingredientId});
      var ingredientUrlFragment = includeIngredient + encodeURI(searchedIngredient.attributes.name).toLowerCase();
      searchTerms.push(ingredientUrlFragment);
    }
    for (var i = 0; i < pantrySearch.children().length; i++) {
      var pIngredientId = parseInt(pantrySearch.children().eq(i).children().eq(0).attr('data-id'));
      var pSearchedIngredient = App.pantryIngredients.findWhere({pantryIngId: pIngredientId});
      var pIngredientUrlFragment = includeIngredient + encodeURI(pSearchedIngredient.attributes.name).toLowerCase();
      searchTerms.push(pIngredientUrlFragment);
    }
    // for (var i = 0; i < searchTerms.length; i++) {
    //   var regex = i  + '?';
    //   searchTerms.push(regex);
    // }
    var newSearchTerms = searchTerms.join('');
    var newUrl = searchRecipesBase + newSearchTerms;
    console.log(newUrl);
    $.ajax ({
      url: newUrl,
      method: 'get'
    }).done(this.addRecipes)
  },

  addRecipes: function (recipes) {
    var results = recipes.matches;
    App.recipes.reset();
    for (var i = 0; i < recipes.matches.length; i++) {
      App.recipes.create({
        name: recipes.matches[i].recipeName,
        ingredients: recipes.matches[i].ingredients,
        recipeId: recipes.matches[i].id
      });
    }
  }
  
});