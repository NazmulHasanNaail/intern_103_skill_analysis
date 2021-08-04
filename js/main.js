(function ($) {
	"use strict";

	// hamburger-menu
	$('.hamburger-menu').click(function () {
		$('.header_area nav').toggleClass('active')
		$('.hamburger-menu').toggleClass('toggle')
	});


	//sticy-header
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	//slider
	var swiper = new Swiper('.hero-slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//how-we-do-slider
	var swiper = new Swiper('.how-we-do-slider', {
		loop: true,
		slidesPerView: 1,
		initialSlide: 1,
		spaceBetween: 10,
		centeredSlides: true,
		lazyLoadingInPrevNext: true,
		keyboardControl: true,
		mousewheelControl: false,
		lazyLoading: true,
		preventClicks: false,
		preventClicksPropagation: false,
		lazyLoadingInPrevNext: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			stretch: 50,
			depth: 250,
			modifier: .5,
			slideShadows: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 5,
			}
		}
	});






	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});
	});

	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});




	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);