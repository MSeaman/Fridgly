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
  	var searchRecipesBase = 'http://api.yummly.com/v1/api/recipes' + apiKey;
  	// Get Recipe = base + Selected Recipe ID string + apiKey
  	var getRecipeBase = 'http://api.yummly.com/v1/api/recipe';
  	var searchTerms = [];
  	var search = $('#search-ingredients-container');
    var pantrySearch = $('#pantry-ingredients-list-container');
  	for (var i = 0; i < search.children().length; i++) {
  	  var ingredientId = parseInt(search.children().eq(i).children().eq(0).attr('data-id'));
  	  var searchedIngredient = App.searchIngredients.findWhere({fridgeIngId: ingredientId});
  	  var ingredientUrlFragment = includeIngredient + encodeURI(searchedIngredient.attributes.name).toLowerCase();
  	  searchTerms.push(ingredientUrlFragment);
  	}
    // for (var i = 0; i < pantrySearch.children().length; i++) {
    //   var pIngredientId = parseInt(pantrySearch.children().eq(i).children().eq(0).attr('data-id'));
    //   var pSearchedIngredient = App.pantryIngredients.findWhere({pantryIngId: pIngredientId});
    //   var pIngredientUrlFragment = includeIngredient + encodeURI(pSearchedIngredient.attributes.name).toLowerCase();
    //   searchTerms.push(pIngredientUrlFragment);
    // }
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
		}).done(this.searchRecipes)
  },

	searchRecipes: function(recipes) {
		console.log('search Recipes fired')
		// pull items from fridge and pantry add to search array
	  var results = recipes.matches
		var fridgePull = []
		var pantryPull = []
		var localIngredients = []

		$.ajax({
			url:'/users/' + App.fridgeIngredients.userId + '/fridge_ingredients',
			method: 'GET'
		}).done(function(fridge){
			for(var i=0; i<fridge.length; i++)
				fridgePull.push(fridge[i].name.toLowerCase())
		}).done(function(){
				$.ajax({
					url:'/users/' + App.fridgeIngredients.userId + '/pantry_ingredients',
					method: 'GET'
				}).done(function(pantry){
					for(var i=0; i<pantry.length; i++)
					pantryPull.push(pantry[i].name.toLowerCase())
				}).done(function(){
						localIngredients = fridgePull.concat(pantryPull)
						localIngredients.sort(function (a, b){
							return b.length - a.length
						})
//						console.log(localIngredients)
				})

		}).done(function() {
      for (var j=0; j<results.length; j++){
        var recipeIng = results[j].ingredients
				var missing = []
        var foundIng = []
					for(var m=0; m<recipeIng.length; m++) {
						missing.push(recipeIng[m])
					}
				  	for (var i=0; i<localIngredients.length; i++){
				    	var localItem = localIngredients[i]+'(s|es)?'
				    	var searchItem = new RegExp(localItem, 'g')
          			for( var h=0; h<recipeIng.length; h++){
            			if (searchItem.test(recipeIng[h]) == true)
              		foundIng.push(h)
	          }
	      }
	          foundIng.sort()
	          for(var k=foundIng.length -1; k>=0; k--) {
	            missing.splice(foundIng[k], 1)
						}
	          recipes.matches[j].missingIng = missing
}
  	App.recipes.reset();
		var order = [];
  	for (var i = 0; i < recipes.matches.length; i++) {
			var holderArray = []
			holderArray.push(recipes.matches[i].missingIng.length)
			holderArray.push(i)
		 	order.push(holderArray)
		}
		order.sort(function (a, b) {
			var x=a[0];
			var y=b[0];
			return(x-y);
		})
		for (var i = 0; i < order.length; i++) {
			lowestId = order[i][1]
	  	App.recipes.create({
	  		name: recipes.matches[lowestId].recipeName,
	  		ingredients: recipes.matches[lowestId].ingredients,
	  		recipeId: recipes.matches[lowestId].id,
				missingIng: recipes.matches[lowestId].missingIng
	  		});
  }
})
}
});
