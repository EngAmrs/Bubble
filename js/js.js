/*global $, console, jQuery, WOW*/
new WOW().init();

/*scroll*/
$(function () {
    "use strict";
    $("html").niceScroll({
        cursorcolor: '#6419D9',
        cursorborder: "1px solid #6419D9"
        
    });
});
/*start loading*/
$(window).ready(function () {
    "use strict";
    $(".loading").delay(10000).fadeOut(2000);
});

/*end loading*/

/*start navbar*/
$(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() >= 70) {
        
        $(".navbar").css({
            "padding": "7px 0",
            "background": "#6419D9",
            "transition": ".3s"
        });
        $(".navbar li").css({"fontSize": "$mainFont - 1"});
        /*media*/
        if ($(window).width() < 991) {
            
            $(".navbar-nav").css({"margin-left": "0px", "transition": ".5s"});
        } else {
            $(".navbar-nav").css({"margin-left": "70px", "transition": ".5s"});
        }
        /*media*/
    } else {
        $(".navbar").css({
            "padding": "20px 0",
            "background": "none",
            "transition": ".3s"
        });
        $(".navbar-nav").css({"margin": "0 -15px", "padding-left": "15px"});
        $(".navbar li").css({"fontSize": "$mainFont"});
        $(".navbar-header .navbar-brand").css({"border-bottom": "none", "transition": ".5s"});
    }
    
});
/*end navbar*/
/*Smooth*/
$('.navbar-nav a').on('click', function () {
    "use strict";
	$('.navbar-nav').find('li.active').removeClass('active');
	$(this).parent('li').addClass('active');
    
});

$(".home").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#home").offset().top

    }, 600);

});
$(".features").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#features").offset().top

    }, 600);

});
$(".screens").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#screens").offset().top

    }, 600);

});
$(".pricing").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#pricing").offset().top

    }, 600);

});
$(".contact").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#contact").offset().top

    }, 600);

});

//scrollUp
$(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() >= 100) {
        $("#scrollup").fadeIn();
    } else {
        
        $("#scrollup").fadeOut();
    }
    
});

$("#scrollup").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#home").offset().top
    }, 600);
});

/*start home*/

//ripples

jQuery(document).ready(function () {
    "use strict";
    $("#home").ripples({
        dropRadius: 10,
        perturbance: 0.02
    });
    
});
/*end home*/
/*start screens*/
var swiper = new Swiper("#screens .swiper-container.two", {
    pagination: "#screens .swiper-pagination",
	paginationClickable: true,
	effect: "coverflow",
	loop: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflow: {
		rotate: 0,
		stretch: 100,
		depth: 75,
		modifier: 1.5,
		slideShadows: false
	}
});
/*end screens*/

/*start ask-questions*/


$("#Ask-Questions .content .first h4").click(function () {
    "use strict";
    if ($("#Ask-Questions .content .first").hasClass("active")) {
        $("#Ask-Questions .content .first ").removeClass("active");
        $("#Ask-Questions .content .first i").removeClass("fa-minus-circle");
    } else {
        $("#Ask-Questions .content .first").addClass("active");
        $("#Ask-Questions .content .first i").addClass("fa-minus-circle");
    }
    
});
$("#Ask-Questions .content .second h4").click(function () {
    "use strict";
    if ($("#Ask-Questions .content .second").hasClass("active")) {
        $("#Ask-Questions .content .second").removeClass("active");
        $("#Ask-Questions .content .second i").removeClass("fa-minus-circle");
        
    } else {
        $("#Ask-Questions .content .second").addClass("active");
        $("#Ask-Questions .content .second i").addClass("fa-minus-circle");
    }
    
});
$("#Ask-Questions .content .third h4").click(function () {
    "use strict";
    if ($("#Ask-Questions .content .third").hasClass("active")) {
        $("#Ask-Questions .content .third").removeClass("active");
        $("#Ask-Questions .content .third i").removeClass("fa-minus-circle");
    } else {
        $("#Ask-Questions .content .third").addClass("active");
        $("#Ask-Questions .content .third i").addClass("fa-minus-circle");
    }
    
});


/*start Temi*/

var swiper = new Swiper('.testi .swiper-container', {
    pagination: '.testi .swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 70,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    loop: true
});
/*end Temi*/


