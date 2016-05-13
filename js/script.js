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
	
	
	
}); //end jQuery function