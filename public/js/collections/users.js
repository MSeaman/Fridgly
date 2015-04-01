App.Collections.Users = Backbone.Collection.extend({
	//this.listenTo(, 'reset')
	url: '/users',
	model: App.Models.User,

	getUsers: function () {
		console.log('getting users');
		$.ajax({
			url: '/users',
			method: 'get'
		})
		.done(this.addUser)
	},
	addUser: function (users) {
		console.log('got user');
		App.users.reset();
		users.forEach(function(users) {
			App.users.add({
				name: user.name,

			});
		})
	}
});