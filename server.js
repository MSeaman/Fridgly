
var application_root = __dirname;
var express    = require('express');
var logger     = require('morgan');
var models     = require('./models');
var bodyParser = require('body-parser');
var User       = models.users;
var Fridge_ingredient = models.fridge_ingredients;
var Pantry_ingredient = models.pantry_ingredients;
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

app.get('/fridge_ingredients', function(req, res){
  Fridge_ingredient.findAll().then(function(fridge_ingredients){
    res.send(fridge_ingredients);
  });
});

app.put('/fridge_ingredients/:id', function(req, res){
  Fridge_ingredient
    .findOne(req.params.id)
    .then(function(fridge_ingredient){
      fridge_ingredient.update(req.body)
    });
});

app.post('/users/:id/fridge_ingredients', function (req, res){
  console.log('give it a whirl');
  User
  .findOne(req.params.id)
  .then(function (user) {
    Fridge_ingredient.create(req.body)
    .then(function(newIngredient) {
      user.addFridge_ingredient(newIngredient)
      .then(function () {
        res.send(newIngredient);
      });
    });
  });
});

app.delete('/fridge_ingredients/:id', function (req, res){
  Fridge_ingredient
    .findOne(req.params.id)
    .then(function(fridge_ingredient){
      fridge_ingredient.destroy()
      .then(function() {
        res.send(fridge_ingredient)
      });
    });
});

app.get('/users/:id/fridge_ingredients', function(req, res) {
  Fridge_ingredient
    .findAll({
      where: {user_id: req.params.id}
    })
    .then(function(fridge_ingredients){
      res.send(fridge_ingredients);
    });
});

app.get('/pantry_ingredients', function (req, res) {
	console.log('poop');
	Pantry_ingredient
	.findAll()
	.then(function(ingredients) {
		res.send(ingredients);
	});
});

//Find all pantry ingredients by user
app.get('/users/:id/pantry_ingredients', function (req, res) {
	Pantry_ingredient
	.findAll({
		where: {user_id: req.params.id}
	})
	.then(function(ingredients) {
		res.send(ingredients);
	});
});

//Create Pantry Ingredients
app.post('/users/:id/pantry_ingredients', function (req, res) {
	User
	.findOne(req.params.id)
	.then(function (user) {
		Pantry_ingredient.create(req.body)
		.then(function(newIngredient) {
			user.addPantry_ingredient(newIngredient)
			.then(function () {
				res.send(newIngredient);
			});
		});
	});
});

//Update Pantry Ingredients
app.put('/pantry_ingredients/:id', function (req, res) {
	Pantry_ingredient
	.findOne(req.params.id)
	.then(function (ingredient) {
		ingredient.update(req.body)
		.then(function(updatedIngredient) {
			res.send(updatedIngredient);
		});
	});
});

app.delete('/pantry_ingredients/:id', function (req, res) {
	Pantry_ingredient
	.findOne(req.params.id)
	.then(function (ingredient) {
		ingredient.destroy()
		.then(function(destroyedIngredient) {
			res.send(destroyedIngredient);
		});
	});
});



app.listen(3000, function() {
  console.log('Server running on 3000...');
});
