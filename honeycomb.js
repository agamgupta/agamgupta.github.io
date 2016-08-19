// Don't call JS functions such as onclick etc from html! 
$(document).ready(function(){
	var i = 1;
	// $(".theme").on('click', function(){
	// 	console.log('Hi I was clicked');
	// });

	$(".hexIn").on('click', function(){
		// $(this).css("border","url(" + $(".myimage")[0].src + ")");
		$(this).css("backgroundColor", $("#cp").val());
		// $(this).css("background-image","url(" + $(".myimage")[0].src + ")");
		// clickedflag = false;
		$(this).toggleClass(i + "selected");
		console.log(this.className);
		
		$(".myimage").on('click', function(){
			$(this).toggleClass("secpic");
			clickedflag = true;
			myurl = $(".myimage.secpic").attr('src');
			console.log(myurl);
			$(".hexIn"+ (i-1) +"selected").css("background-image","url(" + $(".myimage")[0].src + ")"); //css("background-image", "url(images/CorkRoom.jpg)");
		})

		// $("#cp").on('click',function(){
		// 	$(".hexIn."+ (i-1) +"selected").css('backgroundColor', $("#cp").val());
		// 	console.log('col changed')	
		// })
		

		// if (clickedflag==true) {
		// 	$(this).css("background-image","url(" + $(".myimage")[0].src + ")"); //css("background-image", "url(images/CorkRoom.jpg)");
		// }
		// if(clickedflag == false){ 
		// 	// $(".hexIn."+i+"selected").css("background-image","url(" + $(".myimage")[0].src + ")"); //css("background-image", "url(images/CorkRoom.jpg)");
		// 	console.log('imd')
		// 	$(".hexIn."+i+"selected").css('backgroundColor', $("#cp").val());	
		// 	// $(".hexIn"+i+"selected").css("background-image", "url(" + $(this)[0].src + ")");
		// };
		i = i+ 1;
		
	})

	// showcolors();
});

function showcolors(){
	$(".hexIn").each(function(j,currhex){
		console.log("the index is " + j + " and the color is " + currhex.style.backgroundColor)
	})
}
// function addmyClass(){
// 	// $(this).attr('id','selected');
// 	$(this).addClass("selected");
// 	console.log(this.className);
// 	// document.getElementsByClassName("selected").style.backgroundColor = $("#cp").val();	
// 	// console.log('hi')
// }

// function changeCol(){
// 	$(".selected").style.backgroundColor = $("#cp").val();
// 	console.log('col changed')
// }