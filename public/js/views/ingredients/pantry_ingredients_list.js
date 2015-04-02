App.Views.PantryIngredientList = Backbone.View.extend({

    initialize: function(){
      console.log('new pantry ingredients view created!');
      this.listenTo(this.collection, 'reset', this.renderAll);
      this.listenTo(this.collection, 'add', this.renderOne);
    },

    el: 'body', 

    events: {
      'click .delete': 'delete',
      'click .add-pantry-ingredient': 'addIngredient',
      'click .add-to-fridge': 'addToFridge'
    },


    delete: function(){
      this.model.destroy()
    },

    addIngredient: function(){
    console.log('add ingredient button clicked brough');
    var ingredientName = $('#add-pantry-ingredient-input').val();
    this.collection.create({name: ingredientName});
    },

    addToFridge: function(){
      var ingredientArray = [];
    var singleIng = this.model.get('name');
    var checkedIng = this.model.get('#pantry-ingredient-checkbox');
    if (checkedIng.checked =true){
    ingredientArray.push(singleIng);
    } else {console.log('poopy')};
    ingredientArray.appendTo('#fridge-ingredients-containter');
    },

    renderAll: function() {
    $('#pantry-ingredients-list-container').empty();
    this.collection.each(this.renderOne, this)
    },

    renderOne: function(ingredient) {
    var poop = new App.Views.PantryIngredient({model: ingredient});
    poop.$el.appendTo($('#pantry-ingredients-list-container'));
    }
})