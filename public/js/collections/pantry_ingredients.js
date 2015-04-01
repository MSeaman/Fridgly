`App.Collections.PantryIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users/:id/pantry_ingredients',
	model: App.Models.Pantry_ingredient,

	getPantryIngredients: function () {
		console.log('getting patry ingredients');
		$.ajax({
			url: '/users/:id/pantry_ingredients',
			method: 'get'
		})
		.done(this.addPantryIngredient)
	},
	addPantryIngredient: function (pantryIngredients) {
		console.log('got pantry ingredients');
		App.pantryIngredients.reset();
		pantryIngredients.forEach(function(pantryIngredient) {
			App.pantryIngredients.add({
				name: pantryIngredient.name,

			});
		})
	}
});