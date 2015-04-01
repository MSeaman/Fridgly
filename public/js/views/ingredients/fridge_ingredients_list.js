App.Views.FridgeIngredientList = Backbone.View.extend({

  initialize: function () {
    console.log('new fridge ingredients view created brough')
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);

  },

	//el: '#fridge-ingredients-list-container',
  el: 'body',

  events: {
    'click .add-to-search': 'selectIngredient',
    'click .delete': 'delete',
    'click .add-ingredient': 'addIngredient',
    'click .add-to-pantry': 'addToPantry',
    'click .select-user':'setUser'

  },

  setUser: function() {
    App.fridgeIngredients.userId = $('#userDropDown').val();
    App.fridgeIngredients.getFridgeIngredients()
    //this.renderAll();
  },

  addIngredient: function(){
      console.log('add ingredient button clicked');
     var ingredient = this.$('.ingredient');
     ingredient.val().appendTo('#fridge-ingredients-container');
    },

    addToPantry: function(){
      console.log('add to pantry button clicked');
      var ingredientArray = [];
    var singleIng = this.model.get('name');
    var checkedIng = this.model.get('#fridge-ingredient-checkbox');
    if (checkedIng.checked =true){
    ingredientArray.push(singleIng);
    } else {console.log('poop')};
    ingredientArray.appendTo('#pantry-ingredients-containter');
    },

  selectIngredient: function(){
    console.log('select ingredient button clicked');
    var ingredientArray = [];
    var singleIng = this.model.get('name');
    var checkedIng = this.model.get('#fridge-ingredient-checkbox');
    if (checkedIng.checked =true){
    ingredientArray.push(singleIng);
    } else {console.log('poop')};
    ingredientArray.appendTo('#search-ingredients-containter');
  },

  renderAll: function() {
    $('#fridge-ingredients-list-container').empty();
    this.collection.each(this.renderOne, this)
  },

  renderOne: function(ingredient) {
    var poop = new App.Views.FridgeIngredient({model: ingredient});
    poop.$el.appendTo($('#fridge-ingredients-list-container'));
  }

	
})