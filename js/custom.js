/*====================================================================
AUTHOR: REDJEE SOFTWARE LAB PRIVATE LIMITED
WEB & UI DEVELOPER NAME: E. SWAMY
PROJECT NAME: KOLB LABS
======================================================================*/

(function($) {
    "use strict";

    /*------------------------
        Preloader
    -------------------------*/

    $(window).on('load',function() { // makes sure the whole site is loaded
        $('.preloder-wrap').fadeOut(); // will first fade out the loading animation
        $('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(150).css({'overflow':'visible'})
    })

   /*------------------------
     navbar scrolling
  ---------------------------*/  

    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            navbar = $("#navigation"),
            logo = $(".navbar .kolb-logo> img");

        if(bodyScroll > 80){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });


  /*------------------------
     slider-carousel
  ---------------------------*/    
  
        $(".main-hero-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
        });

/*---------------------
 Testimonial carousel
---------------------*/
    var test_carousel = $('.testimonial-carousel');
    test_carousel.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	
    /*---------------------
     Accordion Box
    ---------------------*/

    if ($('.accordion-box').length) {
            $('.accordion-box .acc-btn').on('click', function() {
                if ($(this).hasClass('active') !== true) {
                    $('.accordion-box .acc-btn').removeClass('active');
                }

                if ($(this).next('.acc-content').is(':visible')) {
                    $(this).removeClass('active');
                    $(this).next('.acc-content').slideUp(500);
                } else {
                    $(this).addClass('active');
                    $('.accordion-box .acc-content').slideUp(500);
                    $(this).next('.acc-content').slideDown(500);
                }
            });
        }
/*---------------------
 Brand carousel
---------------------*/
    var brand_carousel = $('.brand-carousel');
    brand_carousel.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            420:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

 $('.grid').imagesLoaded( function() {

    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.portfolio',
          }
        });
    });

    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

 // hover effect
    $(".portfolio").snakeify({speed: 300});

/*----------------------------
    Magnific Popup
    ------------------------*/
    $('.popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }

    });

    /* magnificPopup video view */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        gallery:{
            enabled:true
        }
    });
 

 /*--------------------------
    scrollUp
    ---------------------------- */
    var totop = $('#toTop');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    

  

})(jQuery);