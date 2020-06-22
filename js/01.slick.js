$(".slider").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	dotsClass: "pagers",
	prevArrow: $('.bt-prev'),
	nextArrow: $('.bt-next'),
	fade: true,
	// vertical: true,
	/*
  responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: "unslick" // destroys slick
		}
	]
	*/
});

$(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
	slick.$slides.find(".slogan").removeClass("active");
});
$(".slider").on("afterChange", function(e, slick, slide){
	slick.$slides.find(".slogan").addClass("active");
});

$(".pagers button").html('●');