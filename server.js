var express    = require('express');
var logger     = require('morgan');
var models     = require('./models');
var bodyParser = require('body-parser');
var User       = models.users;


var app        = express();

app.use(logger('dev'));
app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('Hello there, oh node person');
});

app.get('/users', function(req, res) {
  User
    .findAll({include: [{all:true,nested:true}]})
    .then(function(user) {
      res.send(user);
    });
});

app.get('/users/:id', function(req, res) {
  User
    .findOne({ 
      where: {id: req.params.id},
      include: [{all:true,nested:true}]})
    .then(function(user) {
      res.send(user);
    });
});

app.post('/users', function(req, res){
  User.create(req.body)
  .then(function(newUser){
    res.send(newUser);
  });
});

app.put('/users/:id', function(req, res) {
  User
    .findOne(req.params.id)
    .then(function(user){
      user
        .update(req.body)
        .then(function(updatedUser){
          res.send(updatedUser);
        });
    });
});

app.delete('/users/:id', function(req, res){
  console.log('delete triggered');
  User.findOne(req.params.id)
      .then(function(user){
        user.destroy()
        .then(function(){
          res.send(user);
        });
    });
});



app.listen(3000, function() {
  console.log('Server running on 3000...');
});