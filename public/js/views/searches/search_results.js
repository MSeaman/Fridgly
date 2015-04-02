App.Views.SearchResults = Backbone.View.extend({
//Why the fuck does this not work, but fridge_ingredient.js does work???!!!
	initiaize: function(){
		this.template = Handlebars.compile($('#fridge-ingredients-template').html());
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}



})