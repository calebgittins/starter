jQuery(document).ready(function ($) {

	/*------------------------------------*\
	    $SLICK SLIDER
	\*------------------------------------*/

	// Global settings

	var slick_previous = '<a class="slick-arrow--previous"><i class="fa fa-angle-left"></i></a>';
	var slick_next     = '<a class="slick-arrow--next"><i class="fa fa-angle-right"></i></a>';

	// Slick single

	$('.js-slick-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: slick_previous,
		nextArrow: slick_next,
		dots: false,
		speed: 600,
		cssEase: 'ease-in-out',
		lazyLoad: 'ondemand'
	});

	$('.js-slick-single img').load(function() {
		$(this).addClass('slick-loaded');
		$(this).prev('.spinner').fadeOut().remove();
	});

	/*------------------------------------*\
	    $NAVIGATION
	\*------------------------------------*/

	// Toggle offscreen menu

	$('.js-nav-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('hamburger--active');		
		$('.offscreen').toggleClass('offscreen--active');
		$('.body').toggleClass('body--offscreen-active');
	});

	// Superfish dropdown

	$('.nav--primary').superfish();

	// Close nav on anchor click

	$('.nav-mobile a[href*="#"]').click(function (event) {
		$('.js-nav-toggle').trigger( "click" );
	});

	// Smooth scroll for anchor links

	$('.js-link-anchor, .js-link-anchor a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html, body').animate({
	          		scrollTop: target.offset().top
	        	}, 1000);
	        	return false;
	      	}
	    }
	});

	/*------------------------------------*\
	    $POPUPS
	\*------------------------------------*/

	// Magnific Popup - Standard

	$('.js-magnific-popup').magnificPopup({
		type:'inline',
		closeBtnInside: true,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
	  	midClick: true
	});

	// Magnific Popup - Video

	$('.js-magnific-video').magnificPopup({
	    type: 'inline',
	    midClick: true,
	    callbacks: {
	        open: function() {
	            // Play video on open
	            $(this.content).find('video')[0].play();
	            var p = $(this.content).find('video')[0].player;
	            p.setPlayerSize();
	            p.setControlsSize();
	        },
	        close: function() {
	            // Reset video on close
	            $(this.content).find('video')[0].load();
	        }
	    }
	});

	/*------------------------------------*\
	    $INFINITE SCROLL
	\*------------------------------------*/

	$container = $('.js-infinite-parent');

	$container.infiniteScroll({
		path: '.nav--pagination a',
		append: '.js-infinite-item',
		history: false,
		checkLastPage: true,
		scrollThreshold: 200
	});

	// Infinite Scroll - Loaded

	$container.on( 'append.infiniteScroll', function( event, response, path, items ) {
		$('.js-match-height').matchHeight();
	});

	// Infinite Scroll - Last Page

	$container.on( 'last.infiniteScroll', function( event, response, path ) {
		$('.nav-pagination').fadeOut().remove();
	});

	/*------------------------------------*\
	    $LAYOUT
	\*------------------------------------*/

	// Equal Heights

    $('.js-match-height').matchHeight();

    $('.gfield').matchHeight({
		property: 'min-height'
    });

    /*------------------------------------*\
	    $MEDIA
	\*------------------------------------*/

	// Responsive videos

	$('.js-fitvids').fitVids();

	// Lazy Loading images

	var bLazy = new Blazy({
		selector: '.b-lazy',
		loadInvisible: true,
		offset: 200,
		success: function(element){
			$(element).prev('.spinner').fadeOut().remove();
		}
	});

});

/*------------------------------------*\
    $GRAVITY FORMS
\*------------------------------------*/

$(document).bind('gform_post_render', function() {

    // Gravity forms custom elements

    var GFSelect   = $('.ginput_container_select select');
    var GFCheckbox = $('.gfield_checkbox li label');
    var GFRadio    = $('.gfield_radio li label');
    var GFDate     = $('.ginput_container_date input');

    GFSelect.each(function(){
    	if(!$(this).parent().hasClass('custom-select')) {
    		$(this).wrap('<div class="custom-select"></div>');
    	}
    });

    GFCheckbox.each(function(){
    	if($(this).prev('.custom-checkbox').length) {
    		$(this).prepend('<span class="custom-checkbox"></span>');
    	}
    });

    GFRadio.each(function(){
    	if($(this).prev('.custom-radio').length) {
    		$(this).prepend('<span class="custom-radio"></span>');
    	}
    });

    GFDate.each(function(){
    	if(!$(this).parent().hasClass('custom-datepicker')) {
    		$(this).wrap('<div class="custom-datepicker"></div>');
    	}
    });

});