App.Views.RecipeModal = Backbone.View.extend({

el: '#recipe-results-container',

model: App.Models.Recipe,

initialize: function () {
  console.log('modal view created brough');
  this.template = Handlebars.compile($('#recipe-modal').html());
  //this.listenTo(this.model, 'change', this.render);
},

events: {
  'click': 'hideModal'
},

render: function () {
  this.$el.html(this.template(thisModel.toJSON()));
},

showModal: function () {
  this.$el.show();
},

hideModal: function () {
  this.$el.hide();
}

});
