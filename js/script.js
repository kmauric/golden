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

// PORTFOLIO SECTION
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

$(".portfolio-items img").on("click", function(e) {
	e.preventDefault();
	var $modalImg = $("#myModal").find("img"),
		$caption = $("#myModal").find("#caption");
	$("body").css("overflow", "hidden");
	$("#myModal").css("display", "block");
	$modalImg.prop("src", $(this).prop("src"));
	$caption.text($(this).prop("alt"));
	$(window).scroll(function() { return false; });
}); //end image modal
	
$(".close").on("click", function(){
	$("#myModal").css("display", "none");
	$("body").css("overflow", "");
}); //end .close
	
}); //end jQuery function