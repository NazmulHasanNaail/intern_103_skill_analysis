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
			496: {
				slidesPerView: 2,
				spaceBetween: 5,
			}
		}
	});


	//how-we-do progress-bar
	var delay = 500;
	$(".progress-bar").each(function (i) {
		$(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: delay,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now) + '%');
			}
		});
	});

	//protfolion-mansonary-layout
	var $grid = $('.portfolio-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1,
		}
	})
	// filter items on button click
	$('.filters').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	//for menu active class
	$('.filters a').on('click', function (event) {
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
		scrollText: '<i class="far fa-hand-point-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);

