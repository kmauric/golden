$(function() {

//Smooth Scroll to sections from main-navigation menu
$(".main-nav").find("a").each(function(){
	var aLoc = $(this).attr("href");
	$(this).on("click", function() {
		$("html, body").animate({
		scrollTop: $(aLoc).offset().top
	}, 1500);
	});
}); //end smooth scroll

// Hover effect of images on the #portfolio section
$(".portfolio-items").find("li").each(function(){
	$(this).find("img")
		.mouseover(function() {
			$(this).fadeTo(500, 0.5);
		})
		.mouseout(function() {
			$(this).fadeTo(500, 1);
		});
}); //end #portfolio image hover
	
	
}); //end jQuery function