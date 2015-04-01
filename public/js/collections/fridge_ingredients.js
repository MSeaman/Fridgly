App.Collections.FridgeIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users/:id/fridge_ingredients',
	model: App.Models.Fridge_ingredient,

	getFridgeIngredients: function () {
		// var userId = get id from user selected in drop down
		console.log('getting fridge ingredients');
		$.ajax({
			url: '/users/' + userId + '/fridge_ingredients',
			method: 'get'
		})
		.done(this.addFridgeIngredient)
	},
	addFridgeIngredient: function (fridgeIngredients) {
		console.log('got fridge ingredients');
		App.fridgeIngredients.reset();
		fridgeIngredients.forEach(function(fridgeIngredient) {
			App.fridgeIngredients.add({
				name: fridgeIngredient.name,

			});
		})
	}
});