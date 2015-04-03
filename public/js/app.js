console.log('loaded brough');

var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function () {
	console.log('app dot js initialize breau');
	App.fridgeIngredients = new App.Collections.FridgeIngredients;
	App.fridgeIngredientsListView = new App.Views.FridgeIngredientList({collection: App.fridgeIngredients});
	App.pantryIngredients = new App.Collections.PantryIngredients;
	App.pantryIngredientsListView = new App.Views.PantryIngredientList({collection: App.pantryIngredients});
	//App.fridgeIngredients.fetch();
	App.searchIngredients = new App.Collections.SearchIngredients;
	App.searchView = new App.Views.Search({collection: App.searchIngredients});
	App.recipes = new App.Collections.Recipes;
	App.recipesListView = App.Views.Recipes({collection: App.recipes});
});