App.Views.Recipe = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#recipe-list-item-template').html());
    this.render();
  },

  events: {
    'click': 'showModal'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  showModal: function() {
    this.model.getFullRecipeInfo();
  }
});
