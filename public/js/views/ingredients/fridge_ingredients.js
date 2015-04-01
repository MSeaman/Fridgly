App.Views.FridgeIngredient = Backbone.View.extend({


	events: {
		'click .add-to-search': 'selectIngredient',
		'click .delete': 'delete',
		'click .add-ingredient': 'addIngredient',
		'click .add-to-pantry': 'addToPantry'
	},

	initialize: function(){
		this.template = Handlebars.compile($('#').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

  	delete: function(){
  		this.model.destroy()
  	},

  	addIngredient: function(){
  		var ingredient = this.$('.ingredient')
  		ingredient.val().appendTo('#fridge-ingredients-container');
  	},

  	addToPantry: function(){
  		var ingredientArray = [];
		var singleIng = this.model.get('name');
		var checkedIng = this.model.get('#fridge-ingredient-checkbox');
		if (checkedIng.checked =true){
		ingredientArray.push(singleIng);
		} else {console.log('poop')};
		ingredientArray.appendTo('#pantry-ingredients-containter');
  	},

	selectIngredient: function(){
		var ingredientArray = [];
		var singleIng = this.model.get('name');
		var checkedIng = this.model.get('#fridge-ingredient-checkbox');
		if (checkedIng.checked =true){
		ingredientArray.push(singleIng);
		} else {console.log('poop')};
		ingredientArray.appendTo('#search-ingredients-containter');
	}
});