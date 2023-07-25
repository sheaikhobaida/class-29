(function($){
	'use strict';

	// code start

	$('.mama-btn').on( 'click', function(){

		$('.mama').fadeIn();

	} );

	$('#mama-close').on( 'click', function(){

		$('.mama').fadeOut();

	} );


	$('.menu-icon i.fa-bars').on('click', function(){

		$('.menu').slideDown();
		$('.menu-icon i.fa-times').show();
		$(this).hide()

	});

	$('.menu-icon i.fa-times').on('click', function(){

		$('.menu').slideUp();
		$('.menu-icon i.fa-bars').show();
		$(this).hide();

	});


	$('.january').addClass('february');

	$('p').removeClass('march');

	


	$(window).resize( function(){

		var screenSize = $(window).width();

		if (screenSize > 991) {
			$('.menu').removeAttr('style');
		}

	} );



}) (jQuery);