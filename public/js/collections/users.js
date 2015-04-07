App.Collections.Users = Backbone.Collection.extend({
	
	//this.listenTo(, 'reset')
	url: '/users',

	model: App.Models.User,

  getUsers: function () {
    $.ajax({
      url: '/users',
      method: 'get'
    }).done(this.populateUsers)
  },

  populateUsers: function (users) {
  	$('#userDropDown').empty();
    for (var i = 0; i < users.length; i++) {
      var userName = users[i].name;
      var userId = users[i].id;
      var userAllergy = users[i].allergy;
      var dropDownItem = $('<option>').attr('value', userId).html(userName);
      $('#userDropDown').append(dropDownItem);
      App.users.create({ name: userName, id: userId, allergy: userAllergy });
    };
  }

});