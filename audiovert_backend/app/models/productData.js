// Product data

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
	name: String,
	colors: String,
	numinstock: int
	// we can add more properties to this schema as and when times comes
});

// turning the schema into a model so that it can be exported to full use by other files
var Product = mongoose.model('Product', productSchema)
module.exports = Product;