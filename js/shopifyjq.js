$(function(){ // Another way of saying $(document).ready(function(){}) i.e when document/window DOM is ready then execute whatever exists within the function!
	// create a shopify client
	var client = ShopifyBuy.buildClient({
	    apiKey: '7ce598e1e54382ce3b501b1b780ccc90',
	    myShopifyDomain: 'audiovert-speakers',
	    appId: '6'
  	});
	
	// Product Id: 8209844487 For the batman shirt demo
	// Fetch Products using the Products Listing API - all we need to know is the Product/Collection ID
	
	//fetchQueryProducts is a function defined in the listings API which returns all the products in the form of an array.
	var product_array;
	client.fetchQueryProducts({collection_id: 226107777})
		.then(function(products){

			// var selectedVariant = product.selectedVariant;
			// var selectedVariantImage = product.selectedVariantImage;
			// var currentOptions = product.options;
			
			//varSelectors is the html code for generating/manipulating variants in
			// var variantSelectors = generateSelectors(product);
			//product_array = products and then put the iterative call in another fn
			// Iterate over the products array adding custom html code to each product element in the view
			$.each(products,function(index,product){
				var html = "<img class='product__image' src='" + product.selectedVariantImage.src + "' >" +
						"<h2 class='product__title'>" + product.title + "</h2>" + 
						"<a class='product__buy' href='" + product.selectedVariant.checkoutUrl(1) +
						"'>Buy Now!</a>";
				$("#product-" + (index+1)).html(html)
			});
		})

	// Create a shopping cart 
	var cart;
	client.createCart({id: 123, quantity: 1}).then(function(newcart){
		cart = newcart;
		console.log(cart)
	});

	// Adding elements to the shopping cart



	//Displaying and removing the shopping cart
	function openCart() {
 	 $('.cart').addClass('js-active');
	}

	function closeCart() {
  		$('.cart .btn--close').click(function () {
    	$('.cart').removeClass('js-active');
  	});
}

	// slider functionality 
	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = "block"; 
	    setTimeout(carousel, 3000); // Change image every 2 seconds
	}



});

// jQuery Practice 
	// $("#video").click(function(){ 
	// 	$(this).hide();
	// });