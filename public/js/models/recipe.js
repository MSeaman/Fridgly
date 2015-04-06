App.Models.Recipe = Backbone.Model.extend({

  getFullRecipeInfo: function () {
  	console.log('getting full recipe info now brough');
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
    var getRecipeBase = 'http://api.yummly.com/v1/api/recipe/'; 
    var recipeId = this.attributes.recipeId;
    var newUrl = getRecipeBase + recipeId + apiKey;
    thisModel = this;
    $.ajax ({
    	url: newUrl,
    	method: 'get'
    }).done(this.addRecipeInfo, this)	
  },

  addRecipeInfo: function (recipeData) {
  	console.log('getting full recipe info brough');
    thisModel.set({
  		name: recipeData.name,
  		recipeId: recipeData.id,
  		fullIngredients: recipeData.ingredientLines,
  		recipeUrl: recipeData.source.sourceRecipeUrl
  	});
    App.recipeModal.model = thisModel;
    App.recipeModal.render();
    App.recipeModal.showModal();
  }

});