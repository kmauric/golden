$(function() {
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
	
	//STICKY NAV

	var stickyNavTop = $("#main-header .nav").offset().top;
	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyNavTop) {
			$("#main-header .nav").addClass("navbar-wrapper");
		} else { 
			$("#main-header .nav").removeClass("navbar-wrapper"); 
		}
	};
	
	$(window).scroll(function(){
		stickyNav();
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
	
	
	// SCROLLING
	
	//PARALLAX SCROLL
	$.stellar();
	
	//ANIMATE ELEMENTS ON VIEW
	var $window = $(window);
	var $main_header_p = $("#main-header p"),
		$main_header_h1 = $("#main-header h1"),
		$portfolio_h2 = $("#portfolio h2");
	
	function scrolly(){
		var window_height = $window.height(),
			window_top_position = $window.scrollTop(),
			window_bottom_position = (window_top_position + window_height);
		$.each($main_header_p, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('animated fadeIn');
			} else {
			  $element.removeClass('animated fadeIn');
			}
		}); //end $.each
		$.each($main_header_h1, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('animated pulse');
			} else {
			  $element.removeClass('animated pulse');
			}
		}); //end $.each
		$.each($main_header_p, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('animated fadeIn');
			} else {
			  $element.removeClass('animated fadeIn');
			}
		}); //end $.each
		$.each($portfolio_h2, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('animated zoomIn');
			} else {
			  $element.removeClass('animated zoomIn');
			}
		}); //end $.each
	} //end scrolly
	
	$window.on("scroll resize", scrolly);
	$window.trigger("scroll");
	
	
}); //end jQuery function