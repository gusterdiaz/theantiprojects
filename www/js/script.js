$(document).ready(function() {
	$('carousel').carousel();
	$('.slider').slider({
		height:'50vh',
		interval: 8000,
		indicators: false,
		transition: 700
	});
	$('.parallax').parallax();
});
