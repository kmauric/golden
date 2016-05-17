$(function() {
	
	//PARALLAX SCROLL
	$.stellar();
	
	//MAIN-HEADER SECTION
	
	//MAIN-NAVIGATION SMOOTH SCROLL TO SECTIONS
	//Smooth Scroll to sections from main-navigation menu
	$(".main-nav").find("a").each(function(){
		var aLoc = $(this).attr("href");
		$(this).on("click", function() {
			$("html, body").animate({
			scrollTop: $(aLoc).offset().top
		}, 1500);
		});
	}); //end smooth scroll
	
	//NAVIGATION ACTIVE CLASS ON CLICK
	$(".main-nav a").click(function() {
		$(".main-nav a.active").removeClass("active");
		$(this).addClass("active");
	});
	
	// PORTFOLIO SECTION
	// Hover effect of images on the #portfolio section
	$(".portfolio-items").find("li").each(function(){
		$(this).find("img")
			.mouseover(function() {
				$(this).fadeTo(500, 0.5);
				$(this).parent().parent().addClass("bottomline");
			})
			.mouseout(function() {
				$(this).fadeTo(500, 1);
			$(this).parent().parent().removeClass("bottomline");
			});
	}); //end #portfolio image hover
	
	$(".portfolio-items").find("li").each(function(){ 
		$(this).mouseover(function(){
			$(this).addClass("bottomline");
		})
		.mouseout(function() {
			$(this).removeClass("bottomline");
		});
	});

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

	
	
	// CONTACT US SECTION
	
	//Make placeholder text for inputs disapper on focus
	$(".inputs").find("input[placeholder]").each(function() {
		$(this).attr("data-placeholder", this.placeholder);
		
		$(this).bind("focus", function() {
			this.placeholder = "";
		});
		
		$(this).bind("blur", function() {
			this.placeholder = $(this).attr("data-placeholder");
		});
	}); //end placeholder text disappear
	
	$(".textarea").find("textarea").each(function() {
		$(this).attr("data-placeholder", this.placeholder);
		
		$(this).bind("focus", function() {
			this.placeholder = "";
		});
		
		$(this).bind("blur", function() {
			this.placeholder = $(this).attr("data-placeholder");
		});
	}); //end textarea placeholder
	
}); //end jQuery function