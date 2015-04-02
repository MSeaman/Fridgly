App.Views.FridgeIngredientList = Backbone.View.extend({

  initialize: function () {
    console.log('new fridge ingredients view created brough');
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);

  },

  el: 'body',

  events: {
    'click .add-to-search': 'selectIngredient',
    'click .delete': 'delete',
    'click .add-ingredient': 'addIngredient',
    'click .add-to-pantry': 'addToPantry',
    'click .select-user':'setUser',
  },

  setUser: function() {
    App.fridgeIngredients.userId = $('#userDropDown').val();
    //App.pantryIngredients.userId = $('#userDropDown').val();
    App.fridgeIngredients.getFridgeIngredients();
    //App.pantryIngredients.getPantryIngredients();
  },

  addIngredient: function(){
    console.log('add ingredient button clicked brough');
    var ingredientName = $('#add-fridge-ingredient-input').val();
    //this.collction.userId = $('#userDropDown').val();
    this.collection.create({name: ingredientName});
    debugger
    //this.collection.sync();

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


    selectIngredient: function () {
      console.log('select ingredient button clicked doooooood');
      var fridge = $('#fridge-ingredients-list-container');
      for (var i = 0; i < fridge.children().length; i ++) {
        if (fridge.children().eq(i).children().eq(0).children().eq(0).is(':checked') == true) {
          var ingredientId = parseInt(fridge.children().eq(i).children().eq(0).attr('data-id'));
          var movedIngredient = App.fridgeIngredients.findWhere({fridgeIngId: ingredientId});
          App.searchIngredients.add(movedIngredient);
        };
      };
    },

    delete: function(){
    	this.model.destroy();
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




