slideIndex = 1; // Defining slide index globally so as to be able to be used and modified locally!
var curI = 1;
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
			$.each(products,function(index,product){
				var html = "<img class='product__image' src='" + product.selectedVariantImage.src + "' >" +
						"<h2 class='product__title'>" + product.title + "</h2>"; //+ "<button type='button' class='btn btn-success' onclick='add2tocart()'>Hi there </button>"  ; 
						
				$("#product-" + (index+1)).html(html)
			});
		})

	// Create a shopping cart 
	// var cart;
	// client.createCart({id: 123, quantity: 1}).then(function(newcart){
	// 	cart = newcart;
	// 	console.log(cart);
	// });

	// $.getJSON('https://audiovert-speakers.myshopify.com/collections/frontpage/products/hexon-duo-2-speaker-modules.json?callback=?').done(function(x){console.log(x.product)})
	// $.post('https://audiovert-speakers.myshopify.com/cart/add.js', {'quantity': '2', 'id': '17651298625'}).done(function(y){console.log('item added')})
  

	function animator(slideIndex){
		carousel(slideIndex);}
		// slideIndex+=1;
		// console.log(slideIndex);
		// setTimeout(animator,5000,slideIndex);} // calling Timeout with a parameter is different 
		// setTimeout(animator(++slideIndex),3000);} //DOESN'T WORK

	animator(slideIndex); // We don't just have to declare functions but also call them here to run them

});

function cart_refresher(){
		var ifr = document.getElementsByName('Right')[0];
    	ifr.src = ifr.src;
    	setTimeout(cart_refresher,6000);
	}

function cart_refresh_stopper(){
// If checkout button on iframe clicked then set timeout as infinity or if link of iframe is not add/cart.js

}

// CURRENT SLIDER ***********************************************
function plusSlides(n) {
  carousel(slideIndex+=n);
}

function currentSlide(n) {
  carousel(slideIndex = n);
}

function add2tocart(){
	$.ajax({                                                                                                                                                                                                        
		 type: 'POST',                                                                                                                                                                                                 
		 url: 'https://audiovert-speakers.myshopify.com/cart/add.js?callback=?',
		 dataType: 'json',   
		 data: {'quantity': 1, 'id': 17651298625},                                                                                                                                                                                       
		 jsonp: "callback"
		 // crossdomain: true                                                                                                                                               
	 }).done(function(x){console.log('done what now')});
	
	cart_refresher();
}	


function add4tocart(){
	$.ajax({                                                                                                                                                                                                        
		 type: 'POST',                                                                                                                                                                                                 
		 url: 'https://audiovert-speakers.myshopify.com/cart/add.js?callback=?',
		 dataType: 'json',   
		 data: {'quantity': 1, 'id': 17651367937},                                                                                                                                                                                       
		 // success: function() { console.log('Success!'); },                                                                                                                                                                                       
		 // error: function() { console.log('Uh Oh!'); },
		 jsonp: "callback"
		 // crossdomain: true                                                                                                                                               
	 }).done(function(x){console.log('done what now')});

 	cart_refresher();
}


function add6tocart(){
	$.ajax({                                                                                                                                                                                                        
		 type: 'POST',                                                                                                                                                                                                 
		 url: 'https://audiovert-speakers.myshopify.com/cart/add.js?callback=?',
		 dataType: 'json',   
		 data: {'quantity': 1, 'id': 17651391937},                                                                                                                                                                                       
		 // success: function() { console.log('Success!'); },                                                                                                                                                                                       
		 // error: function() { console.log('Uh Oh!'); },
		 jsonp: "callback"
		 // crossdomain: true                                                                                                                                               
	 }).done(function(x){console.log('done what now')});

 	cart_refresher();
}

function carousel(slideIndex) {
   	var i;
    var x = document.getElementsByClassName("mySlides");
    var mydots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    for (i = 0; i < mydots.length; i++) {
  		mydots[i].className = mydots[i].className.replace(" active", "");
	}
    if (slideIndex > x.length) {slideIndex = slideIndex%x.length} 
    if (slideIndex < 1) {slideIndex = x.length}
    x[slideIndex-1].style.display = "block"; 
	mydots[slideIndex-1].className += " active";
}

function OpenNewTab(id){
    setTimeout(function(){ window.location.href = "https://audiovert-speakers.myshopify.com/cart"}, 1000);

}
///////////////////////////////////// Existing slider - DELETED NOW
// var slideIndex = 0;

// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 5000); // Change image every 2 seconds
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

// jQuery Practice 
// $("#video").click(function(){ 
// 	$(this).hide();
// });