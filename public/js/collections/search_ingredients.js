 App.Collections.SearchIngredients = Backbone.Collection.extend({

	model: App.Models.FridgeIngredient,
	
	addModel: function (ingredient) {
		this.collection.add(ingredient);
	}

});


