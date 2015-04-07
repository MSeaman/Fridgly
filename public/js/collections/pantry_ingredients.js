App.Collections.PantryIngredients = Backbone.Collection.extend({

	//this.listenTo(, 'reset')
	url: function(){ return '/users/' + this.userId + '/pantry_ingredients'},

	model: App.Models.PantryIngredient,
	
	userId: '',

	getPantryIngredients: function () {
		//var userId = get id from user selected in drop down
		console.log('getting pantry ingredients');
		$.ajax({
			url: '/users/' + this.userId + '/pantry_ingredients',
			method: 'get'
		}).done(this.addPantryIngredient)
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