App.Collections.FridgeIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users/:id/fridge_ingredients',
	model: App.Models.FridgeIngredient,

	userId: '',

	getFridgeIngredients: function () {
		console.log('getting fridge ingredients');
		$.ajax({
			url: '/users/' + this.userId + '/fridge_ingredients',
			method: 'get'
		})
		.done(this.addFridgeIngredient)
	},
	addFridgeIngredient: function (fridgeIngredients) {
		console.log('got fridge ingredients');
		App.fridgeIngredients.reset();
		fridgeIngredients.forEach(function(fridgeIng) {
			App.fridgeIngredients.add({
				name: fridgeIng.name,
				fridgeIngId: fridgeIng.id
			});
		});
		// App.fridgeIngredientsListView.renderAll();
	}
});