App.Views.PantryIngredientList = Backbone.View.extend({

	

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function() {
    this.collection.each(this.renderOne, this)
  },

  renderOne: function(house) {
    this.$el.append(new App.Views.PantryIngredient({model: pantry_ingredient}).$el);
  }

	
})