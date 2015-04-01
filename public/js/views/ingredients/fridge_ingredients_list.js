App.Views.FridgeIngredientList = Backbone.View.extend({

	

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function() {
    this.collection.each(this.renderOne, this)
  },

  renderOne: function(house) {
    this.$el.append(new App.Views.FridgeIngredient({model: fridge_ingredient}).$el);
  }

	
})