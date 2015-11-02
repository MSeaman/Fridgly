App.Views.SearchResults = Backbone.View.extend({

	initiaize: function(){
		this.template = Handlebars.compile($('#fridge-ingredients-template').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}

});