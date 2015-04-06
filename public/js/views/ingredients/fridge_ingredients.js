App.Views.FridgeIngredient = Backbone.View.extend({

	initialize: function(){
		this.template = Handlebars.compile($('#fridge-ingredients-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
  
});