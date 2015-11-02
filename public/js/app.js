console.log('loaded');

var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function () {
	console.log('app dot js initialize');
	App.users = new App.Collections.Users
	App.fridgeIngredients = new App.Collections.FridgeIngredients;
	App.fridgeIngredientsListView = new App.Views.FridgeIngredientList({collection: App.fridgeIngredients});
	App.pantryIngredients = new App.Collections.PantryIngredients;
	App.pantryIngredientsListView = new App.Views.PantryIngredientList({collection: App.pantryIngredients});
	//App.fridgeIngredients.fetch();
	App.searchIngredients = new App.Collections.SearchIngredients;
	App.searchView = new App.Views.Search({collection: App.searchIngredients});
	App.recipes = new App.Collections.Recipes;
	App.recipesListView = new App.Views.Recipes({collection: App.recipes});
	//App.recipe = new App.Views.Recipe;
	App.recipeModal = new App.Views.RecipeModal({model: App.recipe});
	App.createUser = new App.Views.CreateUser({collection: App.users});
	App.direction = new App.Views.Direction({collection: App.users})
	

});