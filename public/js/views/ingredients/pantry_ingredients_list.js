App.Views.PantryIngredientList = Backbone.View.extend({

    initialize: function(){
      console.log('new pantry ingredients view created!');
      this.listenTo(this.collection, 'reset', this.renderAll);
      this.listenTo(this.collection, 'add', this.renderOne);
      this.listenTo(this.collection, 'all', this.renderAll);
      this.listenTo(this.collection, 'remove', this.delete);
    },

    el: 'body', 

    events: {
      'click .delete-pantry-ingredient': 'delete',
      'click .add-pantry-ingredient': 'addIngredient',
      'click .move-to-fridge': 'addToFridge'
    },


    delete: function(){
      console.log('delete button clicked doooooood');
        var pantry = $('#pantry-ingredients-list-container');
        for (var i = 0; i < pantry.children().length; i ++) {
        if (pantry.children().eq(i).children().eq(0).children().eq(0).is(':checked') === true) {
          var ingredientId = parseInt(pantry.children().eq(i).children().eq(0).attr('data-id'));
          var movedIngredient = App.pantryIngredients.findWhere({pantryIngId: ingredientId});
          $.ajax({
            url: '/pantry_ingredients/' + ingredientId,
            method: 'DELETE'
          }) .done(App.pantryIngredients.remove(movedIngredient))
         };
     };  
    },

    addIngredient: function(){
      console.log('add ingredient button clicked brough');
      var ingredientName = $('#add-pantry-ingredient-input').val();
      this.collection.create({name: ingredientName});
      
    },

    addToFridge: function(){
      console.log('add to fridge button clicked doooooood');
      var pantry = $('#pantry-ingredients-list-container');
      for (var i = 0; i < pantry.children().length; i ++) {
        if (pantry.children().eq(i).children().eq(0).children().eq(0).is(':checked') === true) {
          var ingredientId = parseInt(pantry.children().eq(i).children().eq(0).attr('data-id'));
          var movedIngredient = App.pantryIngredients.findWhere({pantryIngId: ingredientId});
          App.fridgeIngredients.create({
              name:movedIngredient.attributes.name
          });
          App.pantryIngredients.remove(movedIngredient);
        };
      };
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