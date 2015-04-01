App.Views.Search = Backbone.View.extend({


	events: {
		'click .search-button': 'search',
		'click .advanced-search-button': 'advancedSearch'

	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},

	search: function() {
    $.ajax({
    var userInput = $('#search-ingredients-container').val();
    var apiRootKey = 'http://api.yummly.com/v1/api/recipes?_app_id=66a10d93&_app_key=8bfd076a86bb08e4c703da382368127c';
      url: apiRootKey + userInput,
      method: 'GET'
    }).done(this.showResults.bind(this));
  },

  	showResults: function() {
    App.searchResults.model = this.model;
    App.searchResults.render();
    App.searchResults.showResults();
  },

  advancedSearch: function(){

  }
})