App.Views.PantryIngredient = Backbone.View.extend({

	initialize: function(){
		console.log('single pantry view created');
		this.template = Handlebars.compile($('#pantry-ingredients-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});