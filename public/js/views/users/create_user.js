// App.Views.CreateUser = Backbone.View.extend ({

//   events: {
//     'click .create-user': 'createUser'
//   },

//   initialize: function() {
//       this.template = Handlebars.compile($('#users-template').html());
//   },
  
//   getAllergens: function () {
//     $.ajax({
//       url: '/users',
//       method: 'get'
//     }).done(this.populateUsers)
//   },

//   populateAllergens: function (users) {
//     for (var i = 0; i < users.length; i++) {
//       var allergenName = users[i].name;
//       var userId = users[i].id;
//       var dropDownItem = $('<option>').attr('value', userId).html(userName);
//       $('#userDropDown').append(dropDownItem);
//     };
//   },

//   createUser: function () {
//     $.ajax({
//       url: '/users',
//       method: 'POST',
//       data: {
//         name: $('#create-user-input').val(),
//         allergy: 
//       }
//     })
//   }

// })