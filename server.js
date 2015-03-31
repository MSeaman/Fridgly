var application_root  = __dirname,
    express           = require('express'),
    bodyParser        = require('body-parser'),
    path              = require('path'),
    logger            = require('morgan'),
    models            = require('./models'),
    Fridge_ingredient = models.fridge_ingredients,
    Pantry_ingredient = models.pantry_ingredients,
    User              = models.users;
    app               = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Fridgly - Running on 3000')
});

app.get('/fridge_ingredients', function(req, res){
  Fridge_ingredient.findAll().then(function(fridge_ingredients){
    res.send(frige_ingredients);
  });
});

app.put('/fridge_ingredients/:id', function(req, res){
  Fridge_ingredient
    .findOne(req.params.id)
    .then(function(fridge_ingredient){
      fridge_ingredient.update(req.body)
    });
});

app.post('/fridge_ingredients/', function(req, res){
  Fridge_ingredient
    .create(req.body)
    .then(function(newfridge_ingredient){
      res.send(newFridge_ingredient)
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
