App.Collections.PantryIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users/:id/pantry_ingredients',
	model: App.Models.Pantry_ingredient,

	getPantryIngredients: function () {
		//var userId = get id from user selected in drop down
		console.log('getting patry ingredients');
		$.ajax({
			url: '/users/' + userId + '/pantry_ingredients',
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