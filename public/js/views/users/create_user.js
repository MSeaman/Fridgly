App.Views.CreateUser = Backbone.View.extend ({

  events: {
    'click .create-user': 'createUser'
  },

  initialize: function() {
      this.template = Handlebars.compile($('#users-template').html());
      this.getAllergens();
  },

  el: 'body',
  
  getAllergens: function () {
    $.ajax({
      url: '/alergens',
      method: 'get'
    }).done(this.populateAllergens)
  },

  populateAllergens: function (allergens) {
    for (var i = 0; i < allergens.length; i++) {
      var allergenName = allergens[i].name;
      var allergenId = allergens[i].id;
      var dropDownItem = $('<option>').attr('value', allergenId).html(allergenName);
      $('#userAllergy').append(dropDownItem);
    };
  },

  createUser: function () {
    console.log('create user button clicked brough');
    var userName = $('#create-user-input').val();
    var allergen = $('#userAllergy').val();
    App.users.create({name: userName, allergy: allergen}, {success: function () {
      App.users.getUsers();
    }}
      );

  }

});