App.Views.FridgeIngredient = Backbone.View.extend({


	events: {
		'click .fridge-ingredient-name': 'selectIngredient'
	},

	initialize: function(){
		this.template = Handlebars.compile($('#').html());
		this.listenTo('','click' selectIngredient);
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	renderAll: function() {
    this.collection.each(this.render, this)
  },

	selectIngredient: function(){
		var ingredientArray = [];
		var singleIng = this.model.get('name');
		ingredientArray.push(singleIng);
	}
})