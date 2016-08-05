var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema basically defines the general layout of the various entries in the user database 
// i.e the porperties associated with each user such as their name, age, email, looking for - friend gathering, slow music in home, entertainment for kids

var userSchema = new Schema({
	name: String, 
	//username: {type: String, required: True, unique: true},
	//password: {type: String, reuired: True}, // unique property is false by default then
	age: int, 
	gender: String, 
	email: String, 
	requirements: String 
});

// Create a model that uses this Schema
var User = mongoose.model('User', userSchema);
// export this model so that other files can use it
// Now other files can import this module(i.e chunk of code) and use user with all the properties
module.exports = User;