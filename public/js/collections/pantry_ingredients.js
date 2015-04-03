App.Collections.PantryIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users/:id/pantry_ingredients',
	model: App.Models.PantryIngredient,
	user: '',

	getPantryIngredients: function () {
		console.log('getting patry ingredients');
		$.ajax({
			url: '/users/' + this.userId + '/pantry_ingredients',
			method: 'get'
		})
		.done(this.addPantryIngredient)
	},
	addPantryIngredient: function (pantryIngredients) {
		console.log('got pantry ingredients');
		App.pantryIngredients.reset();
		pantryIngredients.forEach(function(pantryIng) {
			App.pantryIngredients.add({
				name: pantryIng.name,
				pantryIngId: pantryIng.id

			});
		});
	}
});