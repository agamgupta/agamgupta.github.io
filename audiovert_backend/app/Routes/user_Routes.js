var User = require('../models/userData')

module.exports = function(app){
	// add an user  
	app.post('/user/new',function(req, res){
		var newUser = new User();
		newUser.name = req.body.name
		newUser.age = req.body.age
		newUser.gender = req.body.gender
		newUser.requirements = req.body.requirements
		
		// saving this new user to my database
		newUser.save(function(err){
			if(err)
				throw err
		})
		res.send(' New User added through post request');
	})

	app.get('*', function(req,res){
		res.sendFile(__dirname + './public/index.html')
	})
	// for all other requests not dealt with by the above commands we return the html file
	// app.get('*', function(req,res){
	// 	res.send('Oops I missed it')
	// 	//res.sendFile('../public/index.html');
	// })
}
