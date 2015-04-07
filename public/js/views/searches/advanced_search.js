App.Views.AdvancedSearch = Backbone.View.extend({

  el: '#search-container',

  events: {
    'click .advanced-search-button': 'search',
  },

	initialize: function () {
		this.getDiets();
		this.getCuisines();
		this.getAlergens();
		this.getHolidays();
		this.getCourses();
    this.showAdvancedSearch();
    console.log('advanced search view created');
	},

  showAdvancedSearch: function () {
    //$('#advanced-search-container').css('visiblity', 'visible');
    $('#advanced-search-container').show();
  },

  getDiets: function () {
    $.ajax({
      url: '/diets',
      method: 'get'
    }).done(this.populateDiets)
  },

  populateDiets: function (diets) {
    for (var i = 0; i < diets.length; i++) {
      var dietName = diets[i].name;
      var dietApi = diets[i].api_search_param;
      var dropDownItem = $('<option>').attr('value', dietApi ).html(dietName);
      $('#dietDropDown').append(dropDownItem);
    };
  },

  getCuisines: function () {
  	$.ajax({
  		url: '/cuisines',
  		method: 'get'
  	}).done(this.populateCuisines)
  },

  populateCuisines: function (cuisines) {
  	for ( var i = 0; i < cuisines.length; i++ ) {
  		var cuisineName =  cuisines[i].name;
  		var cuisineApi = cuisines[i].api_search_param;
  		var dropDownItem = $('<option>').attr('value', cuisineApi ).html(cuisineName);
  		$('#cuisineDropDown').append(dropDownItem);
  	};
  },

  getAlergens: function () {
  	$.ajax({
  		url: '/alergens',
  		method: 'get'
  	}).done(this.populateAlergens)
  },

  populateAlergens: function (alergens) {
  	for ( var i = 0; i < alergens.length; i++ ) {
  		var alergenName = alergens[i].name;
  		var alergenApi = alergens[i].api_search_param;
  		var dropDownItem = $('<option>').attr('value', alergenApi ).html(alergenName);
  		$('#alergenDropDown').append(dropDownItem);
  	};
  },

  getCourses: function () {
  	$.ajax({
  		url: '/courses',
  		method: 'get'
  	}).done(this.populateCourses)
  },

  populateCourses: function (courses) {
  	for ( var i = 0; i < courses.length; i++ ) {
  		var courseName = courses[i].name;
  		var courseApi = courses[i].api_search_param;
  		var dropDownItem = $('<option>').attr('value', courseApi ).html(courseName);
  		$('#courseDropDown').append(dropDownItem);
  	};
  },

  getHolidays: function () {
  	$.ajax ({
  		url: '/holidays',
  		method: 'get'
  	}).done(this.populateHolidays);
  },

  populateHolidays: function (holidays) {
  	for ( var i = 0; i < holidays.length; i++ ) {
  		var holidayName = holidays[i].name;
  		var holidayApi = holidays[i].api_search_param;
  		var dropDownItem = $('<option>').attr('value', holidayApi).html(holidayName);
  		$('#holidayDropDown').append(dropDownItem);
  	};
  },

  search: function () {
    $('#recipe-results-container').show();
  	console.log('search button has been clicked brough');
  	var includeIngredient = '&allowedIngredient%5B%5D=';
  	var excludeIngredient = '&excludedIngredient%5B%5D=';
  	var allergy = '&allowedAllergy%5B%5D=';
  	var diet = '&allowedDiet%5B%5D=';
  	var includeCuisine = '&allowedCuisine%5B%5D=';
  	var excludeCuisine = '&excludedCuisine%5B%5D=';
  	var includeCourse = '&allowedCourse%5B%5D=';
  	var excludeCourse = '&excludedCourse%5B%5D=';
  	var includeHoliday = '&allowedHoliday%5B%5D=';
  	var excludeHoliday = '&excludedHoliday%5B%5D=';
  	var maxCookTime = '&maxTotalTimeInSeconds=';
    var spicyLevelMin = '&flavor.piquant.min=';
    var spicyLevelMax = '&flavor.piquant.max=';
    var saltyLevelMin = '&flavor.salty.min=';
    var saltyLevelMax = '&flavor.salty.max=';
    var sourLevelMin = '&flavor.sour.min=';
    var sourLevelMax = '&flavor.sour.max=';
    var sweetLevelMin = '&flavor.sweet.min=';
    var sweetLevelMax = '&flavor.sweet.max=';
    var bitterLevelMin = '&flavor.bitter.min=';
    var bitterLevelMax = '&flavor.bitter.max=';
    var meatyLevelMin = '&flavor.meaty.min=';
    var meatyLevelMax = '&flavor.meaty.max=';
  	var apiKey = '?_app_id=66a10d93&_app_key=8bfd076a86bb08e4c703da382368127c';
  	// Search Recipes = base + apiKey + Options ( such as - includedIngredient (lowercase url friendly))
  	var searchRecipesBase = 'http://api.yummly.com/v1/api/recipes' + apiKey;
  	// Get Recipe = base + Selected Recipe ID string + apiKey
  	var getRecipeBase = 'http://api.yummly.com/v1/api/recipe';
  	var searchTerms = [];
  	var search = $('#search-ingredients-container');
  	for (var i = 0; i < search.children().length; i ++){
  	  var ingredientId = parseInt(search.children().eq(i).children().eq(0).attr('data-id'));
  	  var searchedIngredient = App.searchIngredients.findWhere({fridgeIngId: ingredientId});
  	  var ingredientUrlFragment = includeIngredient + encodeURI(searchedIngredient.attributes.name).toLowerCase();
  	  searchTerms.push(ingredientUrlFragment);
  	  };
  	var newSearchTerms = searchTerms.join('');
    //Check for and apply advanced search drop down parameters
    if ($('#alergenDropDown').val() !== 'blank') {
        var alergenSearch = allergy + $('#alergenDropDown').val();
        newSearchTerms = newSearchTerms + alergenSearch;
    };
    if ($('#holidayDropDown').val() !== 'blank') {
        var holidaySearch = includeHoliday + $('#holidayDropDown').val();
        newSearchTerms = newSearchTerms + holidaySearch;
    };
    if ($('#cuisineDropDown').val() !== 'blank') {
        var cuisineSearch = includeCuisine + $('#cuisineDropDown').val();
        newSearchTerms = newSearchTerms + cuisineSearch;
    };
    if ($('#courseDropDown').val() !== 'blank') {
        var courseSearch = includeCourse + $('#courseDropDown').val();
        newSearchTerms = newSearchTerms + courseSearch;
    };
    if ($('#dietDropDown').val() !== 'blank') {
        var dietSearch = diet + $('#dietDropDown').val();
        newSearchTerms = newSearchTerms + dietSearch;
    };
    //Get and apply flavor levels parameters
    var spicyLevel = spicyLevelMin + $('#spicy-level-min').val() + spicyLevelMax + $('#spicy-level-max').val();
    var sourLevel = sourLevelMin + $('#sour-level-min').val() + sourLevelMax + $('#sour-level-max').val();
    var saltyLevel = saltyLevelMin + $('#salty-level-min').val() + saltyLevelMax + $('#salty-level-max').val();
    var sweetLevel = sweetLevelMin + $('#sweet-level-min').val() + sweetLevelMax + $('#sweet-level-max').val();
    var bitterLevel = bitterLevelMin + $('#bitter-level-min').val() + bitterLevelMax + $('#bitter-level-max').val();
    var meatyLevel = meatyLevelMin + $('#meaty-level-min').val() + meatyLevelMax + $('#meaty-level-max').val();
    var newSearchTerms = newSearchTerms + spicyLevel + sourLevel + saltyLevel + sweetLevel + bitterLevel + meatyLevel;
    
    var newUrl = searchRecipesBase + newSearchTerms;


  	console.log('search url is: ' + newUrl);
  	$.ajax ({
  		url: newUrl,
  		method: 'get'
  	}).done(this.addRecipes)
  },

  addRecipes: function (recipes) {
  	var results = recipes.matches;
  	App.recipes.reset();
  	for (var i = 0; i < recipes.matches.length; i++) {
  		App.recipes.create({
  			name: recipes.matches[i].recipeName,
  			ingredients: recipes.matches[i].ingredients,
  			recipeId: recipes.matches[i].id
  		});
  	}
  },











});