// Attemp connectting to mongo db using node js applications
var mongoose = require('mongoose')
var db = mongoose.connection;

db.on('error', console.error)
db.once('open', function(){
	var Schema = mongoose.Schema
	var movieSchema = new Schema({
		title: { type: String },
		rating: String,
		releaseYear: Number,
		hasCreditCookie: Boolean
	});
	var Movie = mongoose.model('Movie', movieSchema);

	var thor = new Movie({
		title: "Thor",
		rating: "r",
		releaseYear: 2012,
		hasCreditCookie: false
	});

	thor.save(function(err, thor){
		if(err)
			return console.error(err)
		console.log(JSON.stringify(thor));
	});
})

mongoose.connect('mongodb://localhost/test')



