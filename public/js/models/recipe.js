App.Models.Recipe = Backbone.Model.extend({

});

/*
App.Models.Movie = Backbone.Model.extend({
  getFullMovieInfo: function() {
  	console.log('getting full details@!#!');
  	$.ajax({
      // this url was defined in our router's intialize
  		url: App.urlApiRoot,
  		method: 'GET',
      // same as collection, data is used to pass on parameters
  		data: {
  			i: this.get('imdbID'),
  			plot: 'short'
  		},
  		dataType: 'json'
  	})
    // binding this so that we can still
    // scope this to movie model's within the
    // .done
  	.done(this.addFullMovieInfo.bind(this));
  },
  addFullMovieInfo: function(movieData) {
  	console.log('got the data');
    // reset all values on the movie,
    // including the ones I already have
    // so that my router can rebuild with only the 
    //  imdbId.  
  	this.set({
      title: movieData.Title,
      year: movieData.Year,
      imdbID: movieData.imdbID,
  		poster_url: movieData.Poster,
  		genre: movieData.Genre,
  		plot: movieData.Plot,
  	})
	}
});
*/