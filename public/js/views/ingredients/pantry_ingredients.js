App.Views.PantryIngredient = Backbone.View.extend({


	events: {
		'click .delete': 'delete',
		'click .add-ingredient': 'addIngredient',
		'click .add-to-fridge': 'addToFridge'
	},

	initialize: function(){
		this.template = Handlebars.compile($('#pantry-ingredients-template').html());
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
  		ingredient.val().appendTo('#pantry-ingredients-container');
  	},

  	addToFridge: function(){
  		var ingredientArray = [];
		var singleIng = this.model.get('name');
		var checkedIng = this.model.get('#pantry-ingredient-checkbox');
		if (checkedIng.checked =true){
		ingredientArray.push(singleIng);
		} else {console.log('poopy')};
		ingredientArray.appendTo('#fridge-ingredients-containter');
  	}


});