var models = require('./models');

var Alergen = models.alergens;
var Course = models.courses;
var Cuisine = models.cuisines;
var Diet = models.diets;
var Holiday = models.holidays;

var alergens = [
  {
    name:'Dairy-Free',
    api_search_param:'396^Dairy-Free'
  },
  {
    name:"Egg-Free",
    api_search_param:"397^Egg-Free"
  },
  {
    name:"Gluten-Free",
    api_search_param:"393^Gluten-Free"
  },
  {
    name:"Peanut-Free",
    api_search_param:"394^Peanut-Free"
  },
  {
    name:"Seafood-Free",
    api_search_param:"398^Seafood-Free"
  },
  {
    name:"Sesame-Free",
    api_search_param:"399^Sesame-Free"
  },
  {
    name:"Soy-Free",
    api_search_param:"400^Soy-Free"
  },
  {
    name:"Sulfite-Free",
    api_search_param:"401^Sulfite-Free"
  },
  {
    name:"Tree Nut-Free",
    api_search_param:"395^Tree+Nut-Free"
  },
  {
    name:"Wheat-Free",
    api_search_param:"392^Wheat-Free"
  }
]

var diets = [

  {
    name:"Lacto vegetarian",
    api_search_param:"388^Lacto+vegetarian"
  },
  {
    name:"Ovo vegetarian",
    api_search_param:"389^Ovo+vegetarian"
  },
  {
    name:"Pescetarian",
    api_search_param:"390^Pescetarian"
  },
  {
    name:"Vegan",
    api_search_param:"386^Vegan"
  },
  {
    name:"Vegetarian",
    api_search_param:"387^Lacto-ovo+vegetarian"
  },
  {
    name:"Paleo",
    api_search_param:"403^Paleo"
  }
]

var cuisines = [
  {
    name:"American",
    api_search_param:"cuisine^cuisine-american"
  },
  {
    name:"Kid-Friendly",
    api_search_param:"cuisine^cuisine-kid-friendly"
  },
  {
    name:"Italian",
    api_search_param:"cuisine^cuisine-italian"
  },
  {
    name:"Asian",
    api_search_param:"cuisine^cuisine-asian"
  },
  {
    name:"Mexican",
    api_search_param:"cuisine^cuisine-mexican"
  },
  {
    name:"Southern & Soul Food",
    api_search_param:"cuisine^cuisine-southern"
  },
  {
    name:"French",
    api_search_param:"cuisine^cuisine-french"
  },
  {
    name:"Southwestern",
    api_search_param:"cuisine^cuisine-southwestern"
  },
  {
    name:"Barbecue",
    api_search_param:"cuisine^cuisine-barbecue-bbq"
  },
  {
    name:"Indian",
    api_search_param:"cuisine^cuisine-indian"
  },
  {
    name:"Chinese",
    api_search_param:"cuisine^cuisine-chinese"
  },
  {
    name:"Cajun & Creole",
    api_search_param:"cuisine^cuisine-cajun"
  },
  {
    name:"Mediterranean",
    api_search_param:"cuisine^cuisine-mediterranean"
  },
  {
    name:"Greek",
    api_search_param:"cuisine^cuisine-greek"
  },
  {
    name:"English",
    api_search_param:"cuisine^cuisine-english"
  },
  {
    name:"Spanish",
    api_search_param:"cuisine^cuisine-spanish"
  },
  {
    name:"Thai",
    api_search_param:"cuisine^cuisine-thai"
  },
  {
    name:"German",
    api_search_param:"cuisine^cuisine-german"
  },
  {
    name:"Moroccan",
    api_search_param:"cuisine^cuisine-moroccan"
  },
  {
    name:"Irish",
    api_search_param:"cuisine^cuisine-irish"
  },
  {
    name:"Japanese",
    api_search_param:"cuisine^cuisine-japanese"
  },
  {
    name:"Cuban",
    api_search_param:"cuisine^cuisine-cuban"
  },
  {
    name:"Hawaiian",
    api_search_param:"cuisine^cuisine-hawaiian"
  },
  {
    name:"Swedish",
    api_search_param:"cuisine^cuisine-swedish"
  },
  {
    name:"Hungarian",
    api_search_param:"cuisine^cuisine-hungarian"
  },
  {
    name:"Portuguese",
    api_search_param:"cuisine^cuisine-portuguese"
  }
]

var courses = [
  {
    name:"Main Dishes",
    api_search_param:"course^course-Main+Dishes"
  },
  {
    name:"Desserts",
    api_search_param:"course^course-Desserts"
  },
  {
    name:"Side Dishes",
    api_search_param:"course^course-Side+Dishes"
  },
  {
    name:"Lunch and Snacks",
    api_search_param:"course^course-Lunch+and+Snacks"
  },
  {
    name:"Appetizers",
    api_search_param:"course^course-Appetizers"
  },
  {
    name:"Salads",
    api_search_param:"course^course-Salads"
  },
  {
    name:"Breakfast and Brunch",
    api_search_param:"course^course-Breakfast+and+Brunch"
  },
  {
    name:"Breads",
    api_search_param:"course^course-Breads"
  },
  {
    name:"Soups",
    api_search_param:"course^course-Soups"
  },
  {
    name:"Beverages",
    api_search_param:"course^course-Beverages"
  },
  {
    name:"Condiments and Sauces",
    api_search_param:"course^course-Condiments+and+Sauces"
  },
  {
    name:"Cocktails",
    api_search_param:"course^course-Cocktails"
  }
]

var holidays = [
  {
    name:"Christmas",
    api_search_param:"holiday^holiday-christmas"
  },
  {
    name:"Thanksgiving",
    api_search_param:"holiday^holiday-thanksgiving"
  },
  {
    name:"Summer",
    api_search_param:"holiday^holiday-summer"
  },
  {
    name:"Fall",
    api_search_param:"holiday^holiday-fall"
  },
  {
    name:"New Year",
    api_search_param:"holiday^holiday-new-year"
  },
  {
    name:"Super Bowl",
    api_search_param:"holiday^holiday-super-bowl"
  },
  {
    name:"Winter",
    api_search_param:"holiday^holiday-winter"
  },
  {
    name:"Spring",
    api_search_param:"holiday^holiday-spring"
  },
  {
    name:"Halloween",
    api_search_param:"holiday^holiday-halloween"
  },
  {
    name:"Valentine's Day",
    api_search_param:"holiday^holiday-valentines-day"
  },
  {
    name:"Hanukkah",
    api_search_param:"holiday^holiday-hanukkah"
  },
  {
    name:"Passover",
    api_search_param:"holiday^holiday-passover"
  },
  {
    name:"Easter",
    api_search_param:"holiday^holiday-easter"
  },
  {
    name:"St. Patrick's Day",
    api_search_param:"holiday^holiday-st-patricks-day"
  },
  {
    name:"Chinese New Year",
    api_search_param:"holiday^holiday-chinese-new-year"
  },
  {
    name:"4th of July",
    api_search_param:"holiday^holiday-4th-of-july"
  }
]

var seedDatabase = function() {
  alergens.forEach(function(alergensData){
    console.log(alergensData.name)
    Alergen
      .create({
        name: alergensData.name,
        api_search_param: alergensData.api_search_param
      })
    });
  diets.forEach(function(dietData){
    Diet.create({
      name: dietData.name,
      api_search_param: dietData.api_search_param
    });
  });
  cuisines.forEach(function(cuisineData){
    Cuisine.create({
      name: cuisineData.name,
      api_search_param: cuisineData.api_search_param
    });
  });
  courses.forEach(function(courseData){
    Course.create({
      name: courseData.name,
      api_search_param: courseData.api_search_param
    });
  });
  holidays.forEach(function(holidayData){
    Holiday.create({
      name: holidayData.name,
      api_search_param: holidayData.api_search_param
    });
  });
};

seedDatabase();
