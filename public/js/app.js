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
	//App.fridgeIngredients.fetch();
});