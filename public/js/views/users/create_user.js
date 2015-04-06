App.Views.CreateUser = Backbone.View.extend ({

  events: {
    'click .create-user': 'createUser'
  },

  initialize: function() {
      this.template = Handlebars.compile($('#users-template').html());
      this.render();
  },

  render: function() {
      this.$el.html(this.template());
  },

  createUser: function () {
    $.ajax({
      url: '/users',
      method: 'POST',
      data:{
        name: $('#create-user-input').val()
      }
    });
  }

})