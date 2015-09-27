App.Views.FridgeIngredientList = Backbone.View.extend({

  initialize: function () {
    console.log('new fridge ingredients view created brough');
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'create', this.save);
    this.listenTo(this.collection, 'all', this.renderAll);
    this.listenTo(this.collection, 'remove', this.delete);
<<<<<<< HEAD

=======
>>>>>>> 5d808f5... 'added advanced search feature'
    this.getUsers();
  },

  el: 'body',

  events: {
    'click .add-to-search': 'selectIngredient',
    'click .delete-fridge-ingredient': 'delete',
    'click .add-ingredient': 'addIngredient',
    'click .move-to-pantry': 'addToPantry',
    'click .select-user':'setUser',
  },

  getUsers: function () {
    $.ajax({
      url: '/users',
      method: 'get'
    }).done(this.populateUsers)
  },

  populateUsers: function (users) {
    for (var i = 0; i < users.length; i++) {
      var userName = users[i].name;
      var userId = users[i].id;
      var dropDownItem = $('<option>').attr('value', userId).html(userName);
      $('#userDropDown').append(dropDownItem);
    };
  },

  setUser: function() {
    App.fridgeIngredients.userId = $('#userDropDown').val();
    App.pantryIngredients.userId = $('#userDropDown').val();
    App.fridgeIngredients.getFridgeIngredients();
    App.pantryIngredients.getPantryIngredients();
  },

 	addIngredient: function(){
 	  console.log('add ingredient button clicked brough');
 	  var ingredientName = $('#add-fridge-ingredient-input').val();
 	  this.collection.create({name: ingredientName});
  },

  addToPantry: function(){
    console.log('select pantry button clicked doooooood');
    var fridge = $('#fridge-ingredients-list-container');
    for (var i = 0; i < fridge.children().length; i++) {
      if (fridge.children().eq(i).children().eq(0).children().eq(0).is(':checked') === true) {
        var ingredientId = parseInt(fridge.children().eq(i).children().eq(0).attr('data-id'));
        var movedIngredient = App.fridgeIngredients.findWhere({fridgeIngId: ingredientId});
        App.pantryIngredients.create({
          name:movedIngredient.attributes.name
        });
        // App.fridgeIngredients.remove(movedIngredient);
      }
    }
  },


  selectIngredient: function () {
    console.log('select ingredient button clicked doooooood');
    var fridge = $('#fridge-ingredients-list-container');
    for (var i = 0; i < fridge.children().length; i ++) {
      if (fridge.children().eq(i).children().eq(0).children().eq(0).is(':checked') === true) {
        var ingredientId = parseInt(fridge.children().eq(i).children().eq(0).attr('data-id'));
        var movedIngredient = App.fridgeIngredients.findWhere({fridgeIngId: ingredientId});
        App.searchIngredients.add(movedIngredient);
      }
    }
  },

  delete: function(){
  	console.log('delete button clicked doooooood');
  	var fridge = $('#fridge-ingredients-list-container');
  	for (var i = 0; i < fridge.children().length; i++) {
      if (fridge.children().eq(i).children().eq(0).children().eq(0).is(':checked') === true) {
        var ingredientId = parseInt(fridge.children().eq(i).children().eq(0).attr('data-id'));
        var movedIngredient = App.fridgeIngredients.findWhere({fridgeIngId: ingredientId});
        $.ajax({
        	url: '/fridge_ingredients/' + ingredientId,
        	method: 'DELETE'
        }).done(this.collection.remove(movedIngredient))
    	}
    }      
  },

	renderAll: function() {
	  $('#fridge-ingredients-list-container').empty();
	  this.collection.each(this.renderOne, this);
	},

	renderOne: function(ingredient) {
	  var poop = new App.Views.FridgeIngredient({model: ingredient});
	  poop.$el.appendTo($('#fridge-ingredients-list-container'));
	}

});




