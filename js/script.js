/* Author:

*/
$(document).ready(function(){

	var bottomFlag = false;
	//init
	
	if ( bottomFlag === false ){
		
		$(".about_wrapper").css("opacity",0);
		
		console.log("img changed");
	}
	
// 	console.log("window height: "+$(window).height());
// 	console.log("html scrolltop: "+$("html").scrollTop());	
// 	console.log("document height: "+$(document).height());
		
	$(window).scroll(function(e) {

		// Check if we reached bottom of the document and fadeOut the target element
		if ( bottomFlag === false && $(window).scrollTop() + $(window).height() == $(document).height() ) {		


			$(".hero .headline").css("color","#ffffff");			
			$(".about").animate({
						opacity:0}, 
						10,
						function(){
							$(".headline, .nav").css("opacity",1);
							$(".about") .css("background-image","url('./img/withMicRed.jpg')")
										.animate({opacity:1.0},10);
							$(".about_wrapper").animate({opacity:1.0},"slow");
							} )
			bottomFlag = true;

		}
		else if ( $("html").scrollTop() == 0 ){
			$(".hero .headline").css("color","#000000");			
		}
		else if (  $(window).scrollTop() + $(window).height() == $(document).height() ){
			$(".hero .headline").css("color","#ffffff");			
		}

});

});