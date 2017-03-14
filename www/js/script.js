$(document).ready(function() {
	$('carousel').carousel();
	$('.button-collapse').sideNav();
	$('.slider').slider({
		height:'95vh',
		interval: 8000,
		indicators: false,
		transition: 700
	});
	$('.parallax').parallax();
});
