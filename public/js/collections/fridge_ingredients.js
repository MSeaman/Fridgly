App.Collections.FridgeIngredients = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	userId: '',

	url: function(){ return '/users/' + this.userId + '/fridge_ingredients'},

	model: App.Models.FridgeIngredient,


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
	},
	/*createFridgeIngredient: function (ingredient) {
		console.log('new fridge ingredient created broughhhhh');
		$.ajax({
			url: 'user/' + userId + 'fridge_ingredients',
			method: 'post',
			data: {name: ingredient.name}
		})
		.done(this.)
	}*/
});

//find or create sequelize method; count method to query 