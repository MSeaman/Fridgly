var application_root = __dirname;
var express = require ('express');
var logger = require ('morgan');
var models = require('./models');
var bodyParser = require ('body-parser');
var Pantry_ingredient = models.pantry_ingredients;
var User = models.users;
var Fridge_ingredient = models.fridge_ingredients;

var app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

//Find all pantry ingredients, regardless of user
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

app.listen(3000, function () {
	console.log('listening to port 3000 brough');
});