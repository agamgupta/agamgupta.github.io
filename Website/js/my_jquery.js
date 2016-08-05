$(function(){ // Another way of saying $(document).ready(function(){}) i.e when document/window DOM is ready then execute whatever exists within the function!
	// create a shopify client
	var client = ShopifyBuy.buildClient({
    apiKey: 'af401fd327fdb1af27dd66945b5c3e82',
    myShopifyDomain: 'mySpeakerz',
    appId: '6'
  });
	// Product Id: 8209844487 For the batman shirt demo

	// Fetch Products using the Products Listing API - all we need to know is the Product/Collection ID
	
	//fetchProduct is a function defined in the listings API
	client.fetchProduct('8209844487')
		.then(function(product){
			var selectedVariant = product.selectedVariant;
			var selectedVariantImage = product.selectedVariantImage;
			var currentOptions = product.options;
			
			//varSelectors is the html code for generating/manipulating variants in
			// var variantSelectors = generateSelectors(product);

			var html = "<img class='product__image' src='" + product.selectedVariantImage.src + "' >" +
						"<h2 class='product__title'>" + product.title + "</h2>" + 
						"<a class='product__buy' href='" + product.selectedVariant.checkoutUrl(1) +
						"'>Buy Now!</a>";
			$('#product-1').html(html);
			$('#product-2').html(html);
			console.log(product)
		})
		.catch(function(){
			alert('error')
		})


	
});

// jQuery Practice 
	// $("#video").click(function(){ 
	// 	$(this).hide();
	// });