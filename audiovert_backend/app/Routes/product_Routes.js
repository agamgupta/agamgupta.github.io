var Product = require('../models/productData')

module.exports = function(app){
	//add a product 
	app.get('/product/new', function(req, res){
		var newProduct = new Product()
		newProduct.name = req.body.name
		newProduct.colors = req.body.colors
		newProduct.numinstock = req.body.numinstock

		newProduct.save(function(err){
			if(err)
				throw err
		})
		res.send('A new product has been added to your product database')
	})

	// Display all products
	// Search for all employers vs a specific one based on the name specified in the search bar
	app.get('/products/showall', function(req, res){ // learn how to make it more greaphic
		//res.sendFile(__dirname + './public/allEmployers.html')
		Product.find({}, function(err,curr){
			if(err)
				throw err
			res.send(JSON.stringify(curr, null, '\t'))
			//res.sendFile(__dirname + './public/allEmployers.html')
		})
	})
	
	// Display one employer based on name specified through URL
	app.get('/product/showall/:empname', function(req, res){ // learn how to make it more greaphic
		
		Product.find({name: req.params.empname}, function(err,selected){
			if(err)
				throw err
			res.send(JSON.stringify(selected, null, '\t'))
		})
	})

	app.get('/product/showallpage', function(req,res){
		res.sendFile(__dirname + './public/views/allEmployers.html')
	})
}